"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Swords } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/governing-board", label: "Governing Board" },
  { href: "/affiliated-states", label: "Affiliated States" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-saffron-700/30 bg-charcoal-950/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="clip-blade-sm flex h-10 w-10 items-center justify-center bg-gradient-to-br from-saffron-600 to-crimson-600">
            <Swords className="h-5 w-5 text-charcoal-950" strokeWidth={2.5} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-wider text-parchment-100">
              ASHTEDO AKHADA
            </span>
            <span className="font-heading text-[9px] uppercase tracking-[0.4em] text-saffron-500">
              Mardani Khel
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-3 py-2 font-heading text-sm font-medium uppercase tracking-widest transition-colors ${
                  active
                    ? "text-saffron-400"
                    : "text-parchment-300 hover:text-saffron-400"
                }`}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-saffron-500"
                  />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="clip-blade-sm ml-3 bg-saffron-600 px-5 py-2.5 font-heading text-sm font-semibold uppercase tracking-widest text-charcoal-950 transition-colors hover:bg-saffron-500"
          >
            Join the Akhada
          </Link>
        </nav>

        <button
          className="text-parchment-100 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 32 }}
            className="overflow-hidden border-t border-saffron-700/30 bg-charcoal-900 lg:hidden"
          >
            <div className="flex flex-col px-4 py-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`border-b border-charcoal-700/60 py-3 font-heading text-sm uppercase tracking-widest ${
                    pathname === l.href ? "text-saffron-400" : "text-parchment-300"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
