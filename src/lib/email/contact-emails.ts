import { site } from "@/content/site";
import { formatPhoneDisplay, phoneHref } from "@/lib/format";

export const SUBJECT_LABELS: Record<string, string> = {
  quote: "Free quote request",
  residential: "Residential cleaning",
  commercial: "Commercial / church / office",
  airbnb: "Airbnb / rental turnover",
  pet: "Pet care (walking / sitting)",
  other: "Other",
};

export type ContactSubmission = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

const BRAND = {
  linen: "#faf7f2",
  canvas: "#fffdf9",
  oat: "#f4efe6",
  sand: "#e5ddd0",
  ink: "#3c3632",
  muted: "#8a7f73",
  clay: "#b8846a",
  clayDark: "#9d6d55",
  sage: "#9aab8f",
  sageLight: "#e8efe3",
} as const;

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function firstName(name: string): string {
  const part = name.trim().split(/\s+/)[0];
  return part || name;
}

function siteUrl(): string {
  const url =
    process.env.SITE_URL ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://happyhomescleanings.com";
  return url.replace(/\/$/, "");
}

function contactEmail(): string {
  return process.env.CONTACT_TO_EMAIL ?? "hello@happyhomescleanings.com";
}

function emailShell(content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <title>${escapeHtml(site.name)}</title>
</head>
<body style="margin:0;padding:0;background-color:${BRAND.linen};font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;color:${BRAND.ink};-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND.linen};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">
          ${content}
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function emailHeader(): string {
  return `
    <tr>
      <td style="background:linear-gradient(135deg,${BRAND.clay} 0%,${BRAND.sage} 100%);border-radius:16px 16px 0 0;padding:28px 32px;text-align:center;">
        <p style="margin:0 0 6px;font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:rgba(255,255,255,0.9);">${escapeHtml(site.shortName)}</p>
        <h1 style="margin:0;font-size:22px;font-weight:700;line-height:1.3;color:#ffffff;">${escapeHtml(site.name)}</h1>
      </td>
    </tr>`;
}

function emailFooter(options?: { roundedBottom?: boolean }): string {
  const phone = formatPhoneDisplay(site.phone);
  const email = contactEmail();
  const url = siteUrl();
  const radius = options?.roundedBottom ? "border-radius:0 0 16px 16px;" : "";

  return `
    <tr>
      <td style="padding:24px 32px 28px;text-align:center;border-top:1px solid ${BRAND.sand};background-color:${BRAND.canvas};border-left:1px solid ${BRAND.sand};border-right:1px solid ${BRAND.sand};border-bottom:1px solid ${BRAND.sand};${radius}">
        <p style="margin:0 0 8px;font-size:14px;color:${BRAND.muted};">${escapeHtml(site.location.area)}</p>
        <p style="margin:0 0 4px;font-size:14px;">
          <a href="${phoneHref(site.phone)}" style="color:${BRAND.clayDark};text-decoration:none;font-weight:600;">${phone}</a>
          <span style="color:${BRAND.sand};"> · </span>
          <a href="mailto:${escapeHtml(email)}" style="color:${BRAND.clayDark};text-decoration:none;font-weight:600;">${escapeHtml(email)}</a>
        </p>
        <p style="margin:16px 0 0;font-size:12px;color:${BRAND.muted};">
          <a href="${escapeHtml(url)}" style="color:${BRAND.muted};text-decoration:underline;">${escapeHtml(url.replace(/^https?:\/\//, ""))}</a>
        </p>
      </td>
    </tr>`;
}

export function buildTeamNotificationEmail(data: ContactSubmission) {
  const subjectLabel = SUBJECT_LABELS[data.subject] ?? data.subject;

  const html = emailShell(`
    ${emailHeader()}
    <tr>
      <td style="background-color:${BRAND.canvas};padding:32px;border-left:1px solid ${BRAND.sand};border-right:1px solid ${BRAND.sand};">
        <h2 style="margin:0 0 20px;font-size:18px;font-weight:700;color:${BRAND.ink};">New contact form submission</h2>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND.oat};border-radius:12px;border:1px solid ${BRAND.sand};">
          <tr><td style="padding:20px 24px;">
            <p style="margin:0 0 12px;font-size:14px;line-height:1.6;"><strong style="color:${BRAND.ink};">Name</strong><br /><span style="color:${BRAND.muted};">${escapeHtml(data.name)}</span></p>
            <p style="margin:0 0 12px;font-size:14px;line-height:1.6;"><strong style="color:${BRAND.ink};">Email</strong><br /><a href="mailto:${escapeHtml(data.email)}" style="color:${BRAND.clayDark};">${escapeHtml(data.email)}</a></p>
            <p style="margin:0 0 12px;font-size:14px;line-height:1.6;"><strong style="color:${BRAND.ink};">Phone</strong><br /><span style="color:${BRAND.muted};">${escapeHtml(data.phone || "(not provided)")}</span></p>
            <p style="margin:0 0 12px;font-size:14px;line-height:1.6;"><strong style="color:${BRAND.ink};">Interest</strong><br /><span style="color:${BRAND.muted};">${escapeHtml(subjectLabel)}</span></p>
            <p style="margin:0;font-size:14px;line-height:1.6;"><strong style="color:${BRAND.ink};">Message</strong></p>
            <p style="margin:8px 0 0;font-size:14px;line-height:1.65;color:${BRAND.ink};white-space:pre-wrap;">${escapeHtml(data.message)}</p>
          </td></tr>
        </table>
        <p style="margin:20px 0 0;font-size:13px;color:${BRAND.muted};">Reply directly to this email to reach ${escapeHtml(data.name)}.</p>
      </td>
    </tr>
    ${emailFooter({ roundedBottom: true })}
  `);

  const text = [
    "New contact form submission",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "(not provided)"}`,
    `Interest: ${subjectLabel}`,
    "",
    "Message:",
    data.message,
  ].join("\n");

  return {
    subject: `[Happy Homes] ${subjectLabel} — ${data.name}`,
    html,
    text,
  };
}

export function buildCustomerConfirmationEmail(data: ContactSubmission) {
  const subjectLabel = SUBJECT_LABELS[data.subject] ?? data.subject;
  const greeting = firstName(data.name);
  const email = contactEmail();
  const phone = formatPhoneDisplay(site.phone);
  const url = siteUrl();

  const html = emailShell(`
    ${emailHeader()}
    <tr>
      <td style="background-color:${BRAND.canvas};padding:32px;border-left:1px solid ${BRAND.sand};border-right:1px solid ${BRAND.sand};">
        <p style="margin:0 0 8px;font-size:16px;line-height:1.5;color:${BRAND.ink};">Hi ${escapeHtml(greeting)},</p>
        <p style="margin:0 0 24px;font-size:16px;line-height:1.65;color:${BRAND.muted};">
          Thank you for reaching out to ${escapeHtml(site.name)}. We&apos;ve received your message and will get back to you soon—usually within one to two business days.
        </p>

        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND.sageLight};border-radius:12px;border:1px solid ${BRAND.sand};margin-bottom:24px;">
          <tr><td style="padding:20px 24px;">
            <p style="margin:0 0 4px;font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${BRAND.clayDark};">Your request</p>
            <p style="margin:0 0 16px;font-size:17px;font-weight:700;color:${BRAND.ink};">${escapeHtml(subjectLabel)}</p>
            <p style="margin:0;font-size:14px;line-height:1.65;color:${BRAND.ink};white-space:pre-wrap;">${escapeHtml(data.message)}</p>
          </td></tr>
        </table>

        <h3 style="margin:0 0 12px;font-size:15px;font-weight:700;color:${BRAND.ink};">What happens next?</h3>
        <p style="margin:0 0 20px;font-size:14px;line-height:1.65;color:${BRAND.muted};">
          Our team will review your details and follow up by email or phone. If your request is urgent, feel free to call us—we&apos;re happy to help.
        </p>

        <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
          <tr>
            <td style="border-radius:999px;background-color:${BRAND.clay};">
              <a href="${phoneHref(site.phone)}" style="display:inline-block;padding:12px 24px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;">Call ${phone}</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="background-color:${BRAND.oat};padding:20px 32px;border-left:1px solid ${BRAND.sand};border-right:1px solid ${BRAND.sand};border-bottom:1px solid ${BRAND.sand};border-radius:0 0 16px 16px;text-align:center;">
        <p style="margin:0;font-size:13px;line-height:1.6;color:${BRAND.muted};">
          ${escapeHtml(site.tagline)}
        </p>
        <p style="margin:12px 0 0;font-size:13px;">
          <a href="${escapeHtml(url)}/services" style="color:${BRAND.clayDark};font-weight:600;text-decoration:none;">View our services</a>
        </p>
      </td>
    </tr>
  `);

  const text = [
    `Hi ${greeting},`,
    "",
    `Thank you for contacting ${site.name}. We've received your message and will get back to you soon—usually within one to two business days.`,
    "",
    "Your request:",
    subjectLabel,
    "",
    data.message,
    "",
    "What happens next?",
    "Our team will review your details and follow up by email or phone.",
    "",
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Website: ${url}`,
  ].join("\n");

  return {
    subject: `We received your message — ${site.shortName}`,
    html,
    text,
  };
}
