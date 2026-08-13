import Reveal from "@/components/Reveal";
import AkhadaImage from "@/components/AkhadaImage";
import AffiliatedStatesDirectory from "@/components/AffiliatedStatesDirectory";

export const metadata = {
  title: "Affiliated States | Ashtedo Akhada",
  description:
    "48+ affiliated states and zones under Ashtedo Akhada — National Governing Body of Ashtedo India.",
};

export default function AffiliatedStatesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-saffron-700/30 bg-charcoal-900">
        <div className="absolute inset-0">
          <AkhadaImage
            src="/pics/shivaji-5.webp"
            alt="Affiliated states"
            className="h-full w-full opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/90 to-charcoal-950/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-heading text-xs uppercase tracking-[0.4em] text-saffron-500">
              Nationwide Network
            </p>
            <h1 className="mt-3 font-display text-4xl font-black uppercase tracking-wide text-parchment-100 sm:text-5xl">
              Affiliated States
            </h1>
            <p className="mt-4 max-w-2xl text-parchment-300">
              A growing federation of state bodies and regional zones carrying
              Mardani Khel across India — 48+ entries in the directory.
            </p>
          </Reveal>
        </div>
      </section>

      <AffiliatedStatesDirectory />
    </>
  );
}
