"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import AkhadaImage from "@/components/AkhadaImage";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="bg-charcoal-950 py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading kicker="Reach Us" title="Contact the Akhada" />
          <Reveal className="mt-8 space-y-5">
            <p className="flex items-start gap-3 text-parchment-300">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-saffron-500" />
              National Office — Kolhapur, Maharashtra, India
            </p>
            <p className="flex items-center gap-3 text-parchment-300">
              <Phone className="h-5 w-5 shrink-0 text-saffron-500" />
              +91 00000 00000
            </p>
            <p className="flex items-center gap-3 text-parchment-300">
              <Mail className="h-5 w-5 shrink-0 text-saffron-500" />
              contact@ashtedoakhada.in
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <AkhadaImage
              src="/pics/shivaji-hero.webp"
              alt="Ashtedo Akhada"
              className="aspect-[16/10] w-full border border-charcoal-700"
            />
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <form
            onSubmit={onSubmit}
            className="border border-charcoal-700 bg-charcoal-900 p-6 sm:p-8"
          >
            <label className="block">
              <span className="font-heading text-xs uppercase tracking-[0.3em] text-saffron-500">
                Full Name
              </span>
              <input
                required
                name="name"
                className="mt-2 w-full border border-charcoal-700 bg-charcoal-950 px-4 py-3 text-parchment-100 outline-none focus:border-saffron-600"
              />
            </label>
            <label className="mt-5 block">
              <span className="font-heading text-xs uppercase tracking-[0.3em] text-saffron-500">
                Email
              </span>
              <input
                required
                type="email"
                name="email"
                className="mt-2 w-full border border-charcoal-700 bg-charcoal-950 px-4 py-3 text-parchment-100 outline-none focus:border-saffron-600"
              />
            </label>
            <label className="mt-5 block">
              <span className="font-heading text-xs uppercase tracking-[0.3em] text-saffron-500">
                Subject
              </span>
              <select
                name="subject"
                className="mt-2 w-full border border-charcoal-700 bg-charcoal-950 px-4 py-3 text-parchment-100 outline-none focus:border-saffron-600"
                defaultValue="affiliation"
              >
                <option value="affiliation">State Affiliation</option>
                <option value="training">Training / Coaching</option>
                <option value="events">Events</option>
                <option value="other">General Inquiry</option>
              </select>
            </label>
            <label className="mt-5 block">
              <span className="font-heading text-xs uppercase tracking-[0.3em] text-saffron-500">
                Message
              </span>
              <textarea
                required
                name="message"
                rows={5}
                className="mt-2 w-full resize-y border border-charcoal-700 bg-charcoal-950 px-4 py-3 text-parchment-100 outline-none focus:border-saffron-600"
              />
            </label>

            <button
              type="submit"
              className="clip-blade-sm mt-6 inline-flex items-center gap-2 bg-saffron-600 px-7 py-3.5 font-heading text-sm font-semibold uppercase tracking-widest text-charcoal-950 transition-colors hover:bg-saffron-500"
            >
              Send Message <Send className="h-4 w-4" />
            </button>

            {sent && (
              <p className="mt-4 font-heading text-sm uppercase tracking-wider text-saffron-400">
                Message received — we will respond shortly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
