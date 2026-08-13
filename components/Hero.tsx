"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AkhadaImage from "./AkhadaImage";

const strike = { type: "spring", stiffness: 320, damping: 26, mass: 0.7 } as const;

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-charcoal-950">
      {/* Full-bleed warrior backdrop */}
      <div className="absolute inset-0">
        <AkhadaImage
          src="/pics/shivaji-hero.webp"
          alt="Chhatrapati Shivaji Maharaj"
          label="Shivaji Maharaj"
          className="h-full w-full"
          imgClassName="object-cover object-[center_20%] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/85 to-charcoal-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/50" />
        <div className="absolute inset-0 texture-grain" />
      </div>

      {/* Angular saffron accent stripe */}
      <div className="pointer-events-none absolute -right-20 top-0 hidden h-full w-40 rotate-6 bg-gradient-to-b from-saffron-600/20 via-crimson-700/10 to-transparent lg:block" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...strike, delay: 0.05 }}
          className="font-heading text-xs font-semibold uppercase tracking-[0.45em] text-saffron-500"
        >
          National Governing Body · Since the era of Hindavi Swarajya
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...strike, delay: 0.12 }}
          className="mt-5 max-w-4xl font-display text-4xl font-black uppercase leading-[1.05] tracking-wide text-parchment-100 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="block text-flame">Ashtedo Akhada</span>
          <span className="mt-2 block text-parchment-100">
            The Heritage of Mardani Khel
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...strike, delay: 0.22 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-parchment-300 sm:text-lg"
        >
          Uniting Mind, Body, and Soul through Traditional Indian Martial Arts —
          forged in the spirit of Chhatrapati Shivaji Maharaj.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...strike, delay: 0.32 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="/about#history"
            className="clip-blade-sm border-2 border-saffron-600 bg-transparent px-7 py-3.5 font-heading text-sm font-semibold uppercase tracking-widest text-saffron-400 transition-colors hover:bg-saffron-600 hover:text-charcoal-950"
          >
            Discover Our History
          </Link>
          <Link
            href="/contact"
            className="clip-blade-sm bg-saffron-600 px-7 py-3.5 font-heading text-sm font-semibold uppercase tracking-widest text-charcoal-950 transition-colors hover:bg-saffron-500"
          >
            Join the Akhada
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-parchment-500"
        >
          <span className="font-heading text-[10px] uppercase tracking-[0.4em]">
            Enter
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5 text-saffron-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
