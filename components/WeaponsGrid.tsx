"use client";

import { motion } from "framer-motion";
import { Shield, Sword, Axe, Crosshair } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { StaggerGroup, StaggerItem } from "./Reveal";

const arsenal = [
  {
    icon: Axe,
    name: "Lathi",
    en: "Stick",
    text: "Foundation of reach and rhythm — sweeping arcs that break guard and control distance.",
  },
  {
    icon: Sword,
    name: "Talwar",
    en: "Sword",
    text: "Curved steel of the Maratha warrior — slash, thrust, and decisive finishing cuts.",
  },
  {
    icon: Shield,
    name: "Dhal",
    en: "Shield",
    text: "Defense as offense — absorb, deflect, and open the line for the killing strike.",
  },
  {
    icon: Crosshair,
    name: "Dan Patta",
    en: "Gauntlet-Sword",
    text: "The signature weapon of Mardani Khel — flexible blade from a steel gauntlet.",
  },
];

export default function WeaponsGrid() {
  return (
    <section className="relative bg-charcoal-900 py-20 texture-grain sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Curriculum"
          title="Weapons & Training Arsenal"
        />
        <p className="mt-4 max-w-2xl text-parchment-500">
          Traditional arms drilled until muscle and mind move as one — sudden,
          active, and unforgiving.
        </p>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {arsenal.map((w) => (
            <StaggerItem key={w.name}>
              <motion.article
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 500, damping: 22 } }}
                className="group relative h-full cursor-default overflow-hidden border border-charcoal-700 bg-charcoal-950 p-6"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rotate-12 bg-saffron-600/5 transition-colors group-hover:bg-saffron-600/15" />
                <div className="clip-blade-sm flex h-12 w-12 items-center justify-center bg-crimson-700/80 transition-colors group-hover:bg-saffron-600">
                  <w.icon className="h-6 w-6 text-parchment-100" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase tracking-wider text-parchment-100">
                  {w.name}
                </h3>
                <p className="font-heading text-xs uppercase tracking-[0.3em] text-saffron-500">
                  {w.en}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-parchment-500">
                  {w.text}
                </p>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
