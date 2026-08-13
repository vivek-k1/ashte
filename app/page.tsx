import Hero from "@/components/Hero";
import PhilosophyGrid from "@/components/PhilosophyGrid";
import Timeline from "@/components/Timeline";
import WeaponsGrid from "@/components/WeaponsGrid";
import EventsPreview from "@/components/EventsPreview";
import AkhadaImage from "@/components/AkhadaImage";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PhilosophyGrid />

      {/* Full-bleed warrior strip between philosophy and history */}
      <section className="relative h-48 overflow-hidden sm:h-64 md:h-80">
        <AkhadaImage
          src="/pics/shivaji-1.webp"
          alt="Chhatrapati Shivaji Maharaj"
          label="Jai Shivaji"
          className="h-full w-full"
          imgClassName="object-cover object-center"
        />
        <div className="absolute inset-0 bg-charcoal-950/55" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Reveal>
            <p className="font-display text-2xl font-bold uppercase tracking-[0.2em] text-parchment-100 sm:text-4xl md:text-5xl">
              Jai Bhavani · Jai Shivaji
            </p>
          </Reveal>
        </div>
      </section>

      <Timeline />
      <WeaponsGrid />
      <EventsPreview />

      {/* Closing CTA */}
      <section className="relative overflow-hidden border-t border-saffron-700/30 bg-gradient-to-br from-crimson-900 via-charcoal-900 to-charcoal-950 py-20 texture-grain">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 opacity-25 lg:block">
          <AkhadaImage
            src="/pics/shivaji-6.webp"
            alt="Warrior heritage"
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-charcoal-950" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-heading text-xs uppercase tracking-[0.4em] text-saffron-500">
              Stand with the Akhada
            </p>
            <h2 className="mt-3 max-w-xl font-heading text-3xl font-bold uppercase tracking-wide text-parchment-100 sm:text-4xl">
              Train. Compete. Carry the Flame Forward.
            </h2>
            <p className="mt-4 max-w-lg text-parchment-500">
              Whether you seek affiliation, coaching, or competition — join the
              national body preserving Mardani Khel for the next generation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="clip-blade-sm bg-saffron-600 px-7 py-3.5 font-heading text-sm font-semibold uppercase tracking-widest text-charcoal-950 hover:bg-saffron-500"
              >
                Contact Us
              </Link>
              <Link
                href="/affiliated-states"
                className="clip-blade-sm border-2 border-parchment-500/40 px-7 py-3.5 font-heading text-sm font-semibold uppercase tracking-widest text-parchment-100 hover:border-saffron-500 hover:text-saffron-400"
              >
                Affiliated States
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
