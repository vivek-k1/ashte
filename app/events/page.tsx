import SectionHeading from "@/components/SectionHeading";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/Reveal";
import AkhadaImage from "@/components/AkhadaImage";
import { Calendar, MapPin } from "lucide-react";

export const metadata = {
  title: "Events | Ashtedo Akhada",
  description: "Championships, trials, and heritage demonstrations by Ashtedo Akhada.",
};

const events = [
  {
    img: "/pics/shivaji-3.webp",
    date: "15 Sep 2026",
    title: "State Championship Trials",
    place: "Kolhapur, Maharashtra",
    tag: "Competition",
  },
  {
    img: "/pics/shivaji-4.webp",
    date: "12 Oct 2026",
    title: "National Ashtedo Meet",
    place: "Pune, Maharashtra",
    tag: "National",
  },
  {
    img: "/pics/shivaji-5.webp",
    date: "19 Feb 2027",
    title: "Shiv Jayanti Demonstration",
    place: "Akhada Grounds",
    tag: "Heritage",
  },
  {
    img: "/pics/shivaji-6.webp",
    date: "05 Nov 2026",
    title: "Weapons Clinic — Dan Patta",
    place: "Mumbai Zone",
    tag: "Training",
  },
  {
    img: "/pics/shivaji-7.webp",
    date: "20 Dec 2026",
    title: "School Games Selection Camp",
    place: "Nagpur",
    tag: "SGFI",
  },
  {
    img: "/pics/shivaji-8.webp",
    date: "08 Jan 2027",
    title: "Inter-State Dual Meet",
    place: "Ahmedabad",
    tag: "Competition",
  },
];

export default function EventsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-saffron-700/30 bg-charcoal-900">
        <div className="absolute inset-0 texture-grain" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-heading text-xs uppercase tracking-[0.4em] text-saffron-500">
              Calendar
            </p>
            <h1 className="mt-3 font-display text-4xl font-black uppercase tracking-wide text-parchment-100 sm:text-5xl">
              Events
            </h1>
            <p className="mt-4 max-w-2xl text-parchment-500">
              Trials, national meets, and heritage demonstrations — where the
              akhada meets the arena.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal-950 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading kicker="Schedule" title="Upcoming & Featured" />

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {events.map((e) => (
              <StaggerItem key={e.title}>
                <article className="group flex h-full flex-col overflow-hidden border border-charcoal-700 bg-charcoal-900 transition-colors hover:border-saffron-600/40">
                  <div className="relative overflow-hidden">
                    <AkhadaImage
                      src={e.img}
                      alt={e.title}
                      className="aspect-[16/10] w-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 clip-blade-sm bg-saffron-600 px-3 py-1 font-heading text-[10px] font-semibold uppercase tracking-widest text-charcoal-950">
                      {e.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col border-t border-saffron-700/20 p-5">
                    <p className="flex items-center gap-2 font-heading text-xs uppercase tracking-[0.25em] text-saffron-500">
                      <Calendar className="h-3.5 w-3.5" /> {e.date}
                    </p>
                    <h3 className="mt-2 font-heading text-lg font-bold uppercase tracking-wide text-parchment-100">
                      {e.title}
                    </h3>
                    <p className="mt-auto flex items-center gap-2 pt-3 text-sm text-parchment-500">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-saffron-600" />
                      {e.place}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
