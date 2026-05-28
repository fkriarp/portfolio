"use client";

import { useState } from "react";
import { DATA } from "@/lib/constants";
import { PiArrowRight } from "react-icons/pi";

const BUDGET_OPTIONS = [
  "< Rp500.000",
  "Rp500.000 – Rp2.000.000",
  "Rp2.000.000 – Rp10.000.000",
  "Rp10.000.000 – Rp50.000.000",
  "> Rp50.000.000",
  "Let's discuss",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBudget: ${form.budget}\n\n${form.message}`
    );
    window.location.href = `mailto:${DATA.email}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-xl bg-surfaceground border border-border px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-accent-orange transition-colors";

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
          <label className="text-sm text-secondary">Budget</label>
          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className={`${inputClass} appearance-none cursor-pointer`}
          >
            <option value="" disabled>Select...</option>
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-secondary">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows={5}
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
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