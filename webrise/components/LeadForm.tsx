"use client";

import { useState, type FormEvent } from "react";

type FormState = {
  name: string;
  business: string;
  phone: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const INITIAL_STATE: FormState = {
  name: "",
  business: "",
  phone: "",
  email: "",
  message: "",
};

const PHONE_REGEX = /^[+]?[\d\s()-]{7,15}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.business.trim()) errors.business = "Please enter your business name.";

  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (!PHONE_REGEX.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter an email address.";
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) errors.message = "Let us know how we can help.";

  return errors;
}

const FIELD_CLASS =
  "w-full rounded-md border bg-surface px-4 py-3 text-sm text-ink placeholder:text-faint transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/30";

export default function LeadForm() {
  const [values, setValues] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // eslint-disable-next-line no-console
      console.log("WebRise lead submitted:", values);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="card flex min-h-[420px] flex-col items-center justify-center p-10 text-center animate-fadeUp">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-tint">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 13l4 4L19 7"
              stroke="#0B8457"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold text-ink">Thank you!</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
          We&apos;ve received your request. Our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(INITIAL_STATE);
            setSubmitted(false);
          }}
          className="mt-8 text-sm font-medium text-accent-dark underline underline-offset-4"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form className="card space-y-5 p-7 sm:p-9" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={handleChange("name")}
          placeholder="Your full name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`${FIELD_CLASS} ${errors.name ? "border-red-400" : "border-line"}`}
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-xs text-red-500">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="business" className="mb-1.5 block text-sm font-medium text-ink">
          Business Name
        </label>
        <input
          id="business"
          type="text"
          value={values.business}
          onChange={handleChange("business")}
          placeholder="Your business name"
          aria-invalid={Boolean(errors.business)}
          aria-describedby={errors.business ? "business-error" : undefined}
          className={`${FIELD_CLASS} ${errors.business ? "border-red-400" : "border-line"}`}
        />
        {errors.business && (
          <p id="business-error" className="mt-1.5 text-xs text-red-500">
            {errors.business}
          </p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange("phone")}
            placeholder="+91 98765 43210"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`${FIELD_CLASS} ${errors.phone ? "border-red-400" : "border-line"}`}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-xs text-red-500">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            placeholder="you@business.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`${FIELD_CLASS} ${errors.email ? "border-red-400" : "border-line"}`}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-500">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          How can we help?
        </label>
        <textarea
          id="message"
          rows={4}
          value={values.message}
          onChange={handleChange("message")}
          placeholder="Tell us a little about your business and what you're looking for."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${FIELD_CLASS} resize-none ${errors.message ? "border-red-400" : "border-line"}`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" className="btn-primary w-full">
        Book a Consultation
      </button>
      <p className="text-center text-xs text-faint">
        We typically respond within one business day.
      </p>
    </form>
  );
}
