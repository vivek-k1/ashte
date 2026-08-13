"use client";

import { useMemo, useState } from "react";
import { Search, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/Reveal";
import { affiliatedStates } from "@/lib/affiliated-states";

export default function AffiliatedStatesDirectory() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return affiliatedStates;
    return affiliatedStates.filter((s) => s.name.toLowerCase().includes(needle));
  }, [q]);

  return (
    <section className="bg-charcoal-950 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={`${affiliatedStates.length}+ Members`}
          title="State & Zone Directory"
        />

        <Reveal className="relative mt-10 max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-parchment-500" />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search state or zone…"
            className="w-full border border-charcoal-700 bg-charcoal-900 py-3 pl-10 pr-4 font-heading text-sm uppercase tracking-wider text-parchment-100 outline-none placeholder:normal-case placeholder:tracking-normal placeholder:text-parchment-500 focus:border-saffron-600"
          />
        </Reveal>

        <p className="mt-4 font-heading text-xs uppercase tracking-[0.3em] text-parchment-500">
          Showing {filtered.length} of {affiliatedStates.length}
        </p>

        <StaggerGroup
          className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          stagger={0.03}
        >
          {filtered.map((s) => (
            <StaggerItem key={s.id}>
              <article className="flex items-start gap-3 border border-charcoal-700 bg-charcoal-900 p-4 transition-colors hover:border-saffron-600/40">
                <span className="clip-blade-sm mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center bg-charcoal-800 text-saffron-500">
                  <MapPin className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-heading text-sm font-semibold uppercase tracking-wide text-parchment-100">
                    {s.name}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-parchment-500">
                    <span
                      className={
                        s.status === "Affiliated"
                          ? "text-saffron-500"
                          : "text-bronze-400"
                      }
                    >
                      {s.status}
                    </span>
                    <span>·</span>
                    <span>{s.members} athletes</span>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-parchment-500">
            No matches. Try another state name.
          </p>
        )}
      </div>
    </section>
  );
}
