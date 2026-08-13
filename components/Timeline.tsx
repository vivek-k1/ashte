"use client";

import SectionHeading from "./SectionHeading";
import Reveal, { StaggerGroup, StaggerItem } from "./Reveal";
import AkhadaImage from "./AkhadaImage";

const milestones = [
  {
    year: "Ancient Era",
    title: "Origins in Bharat",
    text: "Rooted in the battlefield arts of ancient India — stick, blade, and shield drilled for real combat.",
  },
  {
    year: "1600s",
    title: "Shivaji Maharaj & Hindavi Swarajya",
    text: "Chhatrapati Shivaji Maharaj promoted Mardani Khel to forge soldiers for Swarajya — courage, speed, and discipline.",
  },
  {
    year: "Evolution",
    title: "From Dan Patta to Ashtedo",
    text: "The gauntlet-sword tradition and akhada culture evolved into the structured path known today as Ashtedo Akhada.",
  },
  {
    year: "2014",
    title: "SGFI Recognition",
    text: "Recognized by the School Games Federation of India — carrying warrior heritage into modern competitive arenas.",
  },
];

export default function Timeline() {
  return (
    <section className="relative overflow-hidden bg-charcoal-950 py-20 sm:py-28">
      <div className="absolute right-0 top-0 hidden h-full w-1/3 opacity-20 lg:block">
        <AkhadaImage
          src="/pics/shivaji-2.webp"
          alt="Shivaji Maharaj statue"
          label="Legacy"
          className="h-full w-full"
          imgClassName="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-charcoal-950" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker="Heritage" title="History & Origins" />

        <div className="relative mt-14 max-w-3xl">
          <div className="absolute bottom-0 left-[11px] top-2 w-0.5 bg-gradient-to-b from-saffron-600 via-crimson-600 to-charcoal-700 sm:left-[15px]" />

          <StaggerGroup className="space-y-10" stagger={0.12}>
            {milestones.map((m) => (
              <StaggerItem key={m.year} className="relative flex gap-6 sm:gap-8">
                <div className="relative z-10 mt-1.5 h-6 w-6 shrink-0 sm:h-8 sm:w-8">
                  <span className="absolute inset-0 clip-blade-sm bg-saffron-600" />
                  <span className="absolute inset-1.5 clip-blade-sm bg-charcoal-950 sm:inset-2" />
                </div>
                <div>
                  <p className="font-heading text-xs font-semibold uppercase tracking-[0.35em] text-saffron-500">
                    {m.year}
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-bold uppercase tracking-wide text-parchment-100 sm:text-2xl">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-parchment-500 sm:text-base">
                    {m.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <Reveal className="mt-16 lg:hidden">
          <AkhadaImage
            src="/pics/shivaji-2.webp"
            alt="Shivaji Maharaj"
            label="Legacy"
            className="aspect-[16/9] w-full border border-charcoal-700"
          />
        </Reveal>
      </div>
    </section>
  );
}
