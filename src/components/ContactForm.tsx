"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, Suspense, useEffect, useState } from "react";
import { Button } from "@/components/Button";

const subjects = [
  { value: "quote", label: "Free quote request" },
  { value: "residential", label: "Residential cleaning" },
  { value: "commercial", label: "Commercial / church / office" },
  { value: "airbnb", label: "Airbnb / rental turnover" },
  { value: "pet", label: "Pet care (walking / sitting)" },
  { value: "other", label: "Other" },
] as const;

type FormState = "idle" | "submitting" | "success" | "error";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const defaultSubject = searchParams.get("subject") ?? "quote";
  const [subject, setSubject] = useState(
    subjects.some((s) => s.value === defaultSubject) ? defaultSubject : "quote"
  );

  useEffect(() => {
    const param = searchParams.get("subject");
    if (param && subjects.some((s) => s.value === param)) {
      setSubject(param);
    }
  }, [searchParams]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }

      setState("success");
      form.reset();
      setSubject("quote");
    } catch (err) {
      setState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-2xl border border-brand-sand bg-brand-warm p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-clay text-brand-white">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold">Message sent!</h3>
        <p className="mt-2 text-brand-muted">
          Thanks for reaching out. We&apos;ll get back to you as soon as we can.
        </p>
        <Button type="button" variant="outline" className="mt-6" onClick={() => setState("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name <span className="text-brand-muted">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-brand-sand bg-brand-white px-4 py-3 text-sm transition-colors focus:border-brand-clay focus:outline-none focus:ring-2 focus:ring-brand-sage/50"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email <span className="text-brand-muted">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-brand-sand bg-brand-white px-4 py-3 text-sm transition-colors focus:border-brand-clay focus:outline-none focus:ring-2 focus:ring-brand-sage/50"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium">
          Phone <span className="font-normal text-brand-muted">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="w-full rounded-xl border border-brand-sand bg-brand-white px-4 py-3 text-sm transition-colors focus:border-brand-clay focus:outline-none focus:ring-2 focus:ring-brand-sage/50"
          placeholder="(605) 555-0123"
        />
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium">
          I&apos;m interested in <span className="text-brand-muted">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full rounded-xl border border-brand-sand bg-brand-white px-4 py-3 text-sm transition-colors focus:border-brand-clay focus:outline-none focus:ring-2 focus:ring-brand-sage/50"
        >
          {subjects.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message <span className="text-brand-muted">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-y rounded-xl border border-brand-sand bg-brand-white px-4 py-3 text-sm transition-colors focus:border-brand-clay focus:outline-none focus:ring-2 focus:ring-brand-sage/50"
          placeholder="Tell us about your home, preferred schedule, or any special requests…"
        />
      </div>

      {state === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {errorMessage}
        </p>
      )}

      <Button type="submit" disabled={state === "submitting"} className="w-full sm:w-auto">
        {state === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense fallback={<div className="h-96 animate-pulse rounded-2xl bg-brand-warm" />}>
      <ContactFormInner />
    </Suspense>
  );
}
