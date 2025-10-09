"use client";

import emailjs from "emailjs-com";
import { FormEvent, useState } from "react";
import { siteContent } from "@/data/siteContent";

const formContent = siteContent.contact.form;

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

const EMAILJS_SERVICE_ID = "service_8oa7nxl";
const EMAILJS_TEMPLATE_ID = "template_ixi8tp5";
const EMAILJS_PUBLIC_KEY = "z5aPLbJvgewFqbwl8";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formState.name,
          reply_to: formState.email,
          phone: formState.phone,
          company: formState.company,
          message: formState.message,
        },
        EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
      setFormState(initialState);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setErrorMessage(
        "We couldn't send your message right now. Please try again in a few moments or call us directly.",
      );
    }
  };

  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
      <div className="space-y-3 text-white">
        <h2 className="text-3xl font-semibold">{formContent.heading}</h2>
        <p className="text-sm text-sky-100/80">{formContent.description}</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-8 grid gap-5 text-sm"
        data-emailjs-ready="true"
      >
        <label className="flex flex-col gap-2 text-sky-100/90">
          <span>{formContent.fields.name}</span>
          <input
            type="text"
            name="user_name"
            value={formState.name}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, name: event.target.value }))
            }
            required
            className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-sky-100/40 focus:border-teal-300 focus:outline-none"
            placeholder="Enter your full name"
          />
        </label>
        <label className="flex flex-col gap-2 text-sky-100/90">
          <span>{formContent.fields.email}</span>
          <input
            type="email"
            name="user_email"
            value={formState.email}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, email: event.target.value }))
            }
            required
            className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-sky-100/40 focus:border-teal-300 focus:outline-none"
            placeholder="name@company.com"
          />
        </label>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sky-100/90">
            <span>{formContent.fields.phone}</span>
            <input
              type="tel"
              name="user_phone"
              value={formState.phone}
              onChange={(event) =>
                setFormState((prev) => ({ ...prev, phone: event.target.value }))
              }
              className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-sky-100/40 focus:border-teal-300 focus:outline-none"
              placeholder="+91 00000 00000"
            />
          </label>
          <label className="flex flex-col gap-2 text-sky-100/90">
            <span>{formContent.fields.company}</span>
            <input
              type="text"
              name="project_name"
              value={formState.company}
              onChange={(event) =>
                setFormState((prev) => ({ ...prev, company: event.target.value }))
              }
              className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-sky-100/40 focus:border-teal-300 focus:outline-none"
              placeholder="Company or project title"
            />
          </label>
        </div>
        <label className="flex flex-col gap-2 text-sky-100/90">
          <span>{formContent.fields.message}</span>
          <textarea
            name="message"
            value={formState.message}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, message: event.target.value }))
            }
            required
            rows={5}
            className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-sky-100/40 focus:border-teal-300 focus:outline-none"
            placeholder="Share material lists, timelines, and site locations"
          />
        </label>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-teal-300 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : formContent.submitLabel}
        </button>
        <p className="text-xs text-sky-100/60">{formContent.disclaimer}</p>
        {status === "success" && (
          <p className="rounded-2xl border border-teal-300/40 bg-teal-400/10 px-4 py-3 text-xs text-cyan-200">
            Thank you! Your details have been captured. We will contact you shortly.
          </p>
        )}
        {status === "error" && errorMessage && (
          <p className="rounded-2xl border border-rose-400/40 bg-rose-500/10 px-4 py-3 text-xs text-rose-200">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
}
