"use client";

import { useState } from "react";
import { DATA } from "@/lib/constants";
import { PiArrowRight } from "react-icons/pi";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href = `mailto:${DATA.email}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-surfaceground px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-accent-orange";

  return (
    <section id="contact" className="py-20 pb-24">
      <div className="mb-10">
        <h2 className="text-[clamp(3rem,10vw,6rem)] font-black uppercase leading-none tracking-tight text-foreground">
          Let&apos;s work
        </h2>
        <h2 className="text-[clamp(3rem,10vw,6rem)] font-black uppercase leading-none tracking-tight text-foreground/15">
          Together
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-secondary">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-secondary">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={inputClass}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-secondary">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            rows={6}
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-accent-orange py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
        >
          Submit
          <PiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </section>
  );
}
