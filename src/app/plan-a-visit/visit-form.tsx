"use client";

import { useState } from "react";

const SERVICES = [
  "Sunday School — 10:00 AM",
  "Morning Worship — 11:00 AM",
  "Wednesday Bible Study — 6:30 PM",
  "Not sure yet",
];

const PARTY_SIZES = ["Just me", "2 of us", "3–4 of us", "5 or more"];

const fieldClass =
  "w-full px-4 py-3 rounded-lg bg-warm-white border border-cream-dark text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brown-light/30 focus:border-brown-light transition-all";
const labelClass =
  "block text-xs font-bold tracking-[0.15em] uppercase text-text-light mb-2";

export default function VisitForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setStatus("sending");

    const data = Object.fromEntries(new FormData(event.currentTarget));

    try {
      const response = await fetch("/api/visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (!response.ok) {
        setError(result.error ?? "Sorry, that didn't send. Please try again.");
        setStatus("idle");
        return;
      }
      setStatus("sent");
    } catch {
      setError(
        "Sorry, that didn't send. Please try again, or call us at (540) 718-2334."
      );
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <div className="p-10 md:p-12 bg-cream rounded-2xl border border-cream-dark text-center">
        <svg
          className="w-14 h-14 mx-auto mb-5 text-brown-light"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark mb-3">
          We&rsquo;re looking forward to meeting you.
        </h2>
        <p className="text-text-body leading-relaxed max-w-md mx-auto">
          Pastor Fincham has your note and will be in touch. When you arrive,
          come on in — someone will be watching for you at the door.
        </p>
        <div className="horizon-rule w-24 mx-auto mt-8" />
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 md:p-10 bg-cream rounded-2xl border border-cream-dark space-y-5"
    >
      {/* Honeypot — hidden from people, catnip for bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute w-0 h-0 opacity-0 -z-10 pointer-events-none"
      />

      <div>
        <label htmlFor="visit-name" className={labelClass}>
          Your name
        </label>
        <input
          id="visit-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Evan Fincham"
          className={fieldClass}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="visit-email" className={labelClass}>
            Email
          </label>
          <input
            id="visit-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="visit-phone" className={labelClass}>
            Phone
          </label>
          <input
            id="visit-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(315) 555-0142"
            className={fieldClass}
          />
        </div>
      </div>
      <p className="text-xs text-text-light -mt-1">
        Either one is fine — whichever you&rsquo;d rather we use.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="visit-service" className={labelClass}>
            Which service?
          </label>
          <select
            id="visit-service"
            name="service"
            defaultValue={SERVICES[1]}
            className={fieldClass}
          >
            {SERVICES.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="visit-party" className={labelClass}>
            How many are coming?
          </label>
          <select
            id="visit-party"
            name="partySize"
            defaultValue={PARTY_SIZES[0]}
            className={fieldClass}
          >
            {PARTY_SIZES.map((size) => (
              <option key={size}>{size}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="visit-children" className={labelClass}>
          Children&rsquo;s ages <span className="font-normal normal-case tracking-normal text-text-muted">(optional)</span>
        </label>
        <input
          id="visit-children"
          name="children"
          type="text"
          placeholder="4 and 7"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="visit-message" className={labelClass}>
          Anything we can do for you? <span className="font-normal normal-case tracking-normal text-text-muted">(optional)</span>
        </label>
        <textarea
          id="visit-message"
          name="message"
          rows={4}
          placeholder="A question, a prayer request, or just say hello."
          className={`${fieldClass} resize-y`}
        />
      </div>

      {error && (
        <p
          role="alert"
          className="text-sm font-medium text-orange-dark bg-orange/10 border border-orange/30 rounded-lg px-4 py-3"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto bg-orange text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-orange hover:bg-orange-dark hover:border-orange-dark hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:translate-y-0 disabled:cursor-not-allowed transition-all"
      >
        {status === "sending" ? "Sending…" : "Let Us Know You're Coming"}
      </button>

      <p className="text-xs text-text-light">
        This goes straight to Pastor Fincham. We won&rsquo;t add you to any
        mailing list.
      </p>
    </form>
  );
}
