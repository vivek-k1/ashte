"use client";

import { Dumbbell, Brain, Heart } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { StaggerGroup, StaggerItem } from "./Reveal";

const pillars = [
  {
    icon: Dumbbell,
    title: "Body",
    subtitle: "Sharir",
    text: "Sudden, active strikes — fists, feet, and steel. Conditioning that forges warriors ready for the field.",
    accent: "from-saffron-600 to-saffron-700",
  },
  {
    icon: Brain,
    title: "Mind",
    subtitle: "Mana",
    text: "Strategy over chaos. Control the struggle, read the opponent, and strike with disciplined intent.",
    accent: "from-bronze-500 to-bronze-600",
  },
  {
    icon: Heart,
    title: "Soul",
    subtitle: "Atma",
    text: "Peace through strength. Spiritual harmony that turns combat into a path of duty and dharma.",
    accent: "from-crimson-600 to-crimson-700",
  },
];

export default function PhilosophyGrid() {
  return (
    <section className="relative bg-charcoal-900 py-20 texture-grain sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="The Ashet-do Concept"
          title="Unity of Body, Mind & Soul"
        />
        <p className="mt-4 max-w-2xl text-parchment-500">
          Ashtedo is not sport alone — it is a martial path where every movement
          binds flesh, will, and spirit into one strike.
        </p>

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.1}>
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <article className="group relative h-full overflow-hidden border border-charcoal-700 bg-charcoal-800/80 p-8 transition-colors hover:border-saffron-600/50">
                <div
                  className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${p.accent} opacity-80 transition-opacity group-hover:opacity-100`}
                />
                <div className="clip-blade-sm flex h-14 w-14 items-center justify-center bg-charcoal-700 transition-colors group-hover:bg-saffron-600">
                  <p.icon className="h-7 w-7 text-saffron-400 transition-colors group-hover:text-charcoal-950" />
                </div>
                <h3 className="mt-6 font-heading text-2xl font-bold uppercase tracking-wider text-parchment-100">
                  {p.title}
                </h3>
                <p className="mt-1 font-display text-sm tracking-widest text-saffron-500">
                  {p.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-parchment-500">
                  {p.text}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
