import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buildCustomerConfirmationEmail,
  buildTeamNotificationEmail,
  SUBJECT_LABELS,
} from "@/lib/email/contact-emails";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim();
  const subject = body.subject?.trim();
  const message = body.message?.trim();

  if (!name || name.length < 2) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (!subject || !(subject in SUBJECT_LABELS)) {
    return NextResponse.json({ error: "Please select a subject." }, { status: 400 });
  }

  if (!message || message.length < 10) {
    return NextResponse.json(
      { error: "Please enter a message (at least 10 characters)." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return NextResponse.json(
      {
        error:
          "We could not send your message right now. Please email or call us directly.",
      },
      { status: 503 }
    );
  }

  const teamTo =
    process.env.CONTACT_TO_EMAIL ?? "hello@happyhomescleanings.com";
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    "Happy Homes <hello@happyhomescleanings.com>";

  const submission = { name, email, phone, subject, message };
  const teamEmail = buildTeamNotificationEmail(submission);
  const customerEmail = buildCustomerConfirmationEmail(submission);

  const resend = new Resend(apiKey);

  const [teamResult, customerResult] = await Promise.all([
    resend.emails.send({
      from,
      to: teamTo,
      replyTo: email,
      subject: teamEmail.subject,
      html: teamEmail.html,
      text: teamEmail.text,
    }),
    resend.emails.send({
      from,
      to: email,
      replyTo: teamTo,
      subject: customerEmail.subject,
      html: customerEmail.html,
      text: customerEmail.text,
    }),
  ]);

  if (teamResult.error) {
    console.error("[contact] team notification failed:", teamResult.error);
    return NextResponse.json(
      { error: "Could not send your message. Please try again or call us." },
      { status: 502 }
    );
  }

  if (customerResult.error) {
    console.error(
      "[contact] confirmation email failed:",
      customerResult.error
    );
  }

  return NextResponse.json({ ok: true });
}
