"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal, { StaggerGroup, StaggerItem } from "./Reveal";
import AkhadaImage from "./AkhadaImage";

const preview = [
  {
    img: "/pics/shivaji-3.webp",
    date: "Upcoming",
    title: "State Championship Trials",
    place: "Kolhapur, Maharashtra",
  },
  {
    img: "/pics/shivaji-4.webp",
    date: "Annual",
    title: "National Ashtedo Meet",
    place: "All Affiliated States",
  },
  {
    img: "/pics/shivaji-5.webp",
    date: "Heritage",
    title: "Shiv Jayanti Demonstration",
    place: "Akhada Grounds",
  },
];

export default function EventsPreview() {
  return (
    <section className="bg-charcoal-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading kicker="In the Arena" title="Upcoming Events" />
          <Reveal>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 font-heading text-sm uppercase tracking-widest text-saffron-500 transition-colors hover:text-saffron-400"
            >
              View all events <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.1}>
          {preview.map((e) => (
            <StaggerItem key={e.title}>
              <article className="group overflow-hidden border border-charcoal-700 bg-charcoal-900">
                <AkhadaImage
                  src={e.img}
                  alt={e.title}
                  className="aspect-[16/10] w-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="border-t border-saffron-700/30 p-5">
                  <p className="flex items-center gap-2 font-heading text-xs uppercase tracking-[0.3em] text-saffron-500">
                    <Calendar className="h-3.5 w-3.5" /> {e.date}
                  </p>
                  <h3 className="mt-2 font-heading text-lg font-bold uppercase tracking-wide text-parchment-100">
                    {e.title}
                  </h3>
                  <p className="mt-1 text-sm text-parchment-500">{e.place}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
