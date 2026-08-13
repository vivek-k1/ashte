import SectionHeading from "@/components/SectionHeading";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/Reveal";
import AkhadaImage from "@/components/AkhadaImage";
import Timeline from "@/components/Timeline";
import Link from "next/link";

export const metadata = {
  title: "About Us | Ashtedo Akhada",
  description:
    "History and mission of Ashtedo Akhada — the heritage of Mardani Khel under Chhatrapati Shivaji Maharaj.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-saffron-700/30 bg-charcoal-900">
        <div className="absolute inset-0">
          <AkhadaImage
            src="/pics/shivaji-7.webp"
            alt="About Ashtedo Akhada"
            className="h-full w-full opacity-30"
            imgClassName="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/90 to-charcoal-950/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-heading text-xs uppercase tracking-[0.4em] text-saffron-500">
              About Us
            </p>
            <h1 className="mt-3 font-display text-4xl font-black uppercase tracking-wide text-parchment-100 sm:text-5xl lg:text-6xl">
              Who We Are
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-parchment-300">
              Ashtedo Akhada is the National Governing Body for Ashtedo India —
              steward of Mardani Khel, the martial fire lit in the age of
              Hindavi Swarajya.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal-950 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <SectionHeading kicker="Mission" title="Preserve. Train. Unite." />
            <p className="mt-6 leading-relaxed text-parchment-500">
              We exist to protect the authenticity of Ashtedo, standardize
              training across affiliated states, and raise athletes who embody
              the sudden, active spirit of the Maratha battlefield arts.
            </p>
            <p className="mt-4 leading-relaxed text-parchment-500">
              From school competitions recognized by SGFI to akhada drills with
              lathi, talwar, dhal, and dan patta — every programme serves one
              purpose: keep the warrior tradition alive.
            </p>
            <Link
              href="/contact"
              className="clip-blade-sm mt-8 inline-block bg-saffron-600 px-6 py-3 font-heading text-sm font-semibold uppercase tracking-widest text-charcoal-950 hover:bg-saffron-500"
            >
              Partner With Us
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <AkhadaImage
              src="/pics/shivaji-8.webp"
              alt="Shivaji Maharaj heritage"
              className="aspect-[4/5] w-full border border-charcoal-700 sm:aspect-[5/4] lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </section>

      <section id="history" className="scroll-mt-20">
        <Timeline />
      </section>

      <section className="bg-charcoal-900 py-20 texture-grain sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Values"
            title="What Drives the Akhada"
            align="center"
          />
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-3" stagger={0.1}>
            {[
              {
                t: "Courage",
                d: "Face the strike without flinch — on the mat and in life.",
              },
              {
                t: "Discipline",
                d: "Structure, hierarchy, and relentless practice over empty show.",
              },
              {
                t: "Dharma",
                d: "Strength in service of Swarajya’s spirit — not aggression alone.",
              },
            ].map((v) => (
              <StaggerItem key={v.t}>
                <div className="border border-charcoal-700 bg-charcoal-950 p-8 text-center">
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-saffron-400">
                    {v.t}
                  </h3>
                  <p className="mt-3 text-sm text-parchment-500">{v.d}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
