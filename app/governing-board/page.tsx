import SectionHeading from "@/components/SectionHeading";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/Reveal";
import AkhadaImage from "@/components/AkhadaImage";

export const metadata = {
  title: "Governing Board | Ashtedo Akhada",
  description: "Leadership of Ashtedo Akhada — photo and position of each board member.",
};

const board = [
  { name: "Shri. Rajendra Patil", role: "President", img: "/pics/shivaji-1.webp" },
  { name: "Shri. Anil Deshmukh", role: "Vice President", img: "/pics/shivaji-2.webp" },
  { name: "Shri. Suresh Jadhav", role: "General Secretary", img: "/pics/shivaji-3.webp" },
  { name: "Smt. Meena Kulkarni", role: "Joint Secretary", img: "/pics/shivaji-4.webp" },
  { name: "Shri. Vikram Shinde", role: "Treasurer", img: "/pics/shivaji-5.webp" },
  { name: "Shri. Prakash More", role: "Technical Director", img: "/pics/shivaji-6.webp" },
  { name: "Coach Ramesh Salunkhe", role: "Chief Coach", img: "/pics/shivaji-7.webp" },
  { name: "Shri. Nitin Pawar", role: "Events Director", img: "/pics/shivaji-8.webp" },
  { name: "Smt. Kavita Bhosale", role: "Women’s Wing Head", img: "/pics/shivaji-hero.webp" },
  { name: "Shri. Deepak Chavan", role: "State Relations", img: "/pics/shivaji-2.webp" },
  { name: "Shri. Mahesh Gaikwad", role: "Media & Outreach", img: "/pics/shivaji-3.webp" },
  { name: "Shri. Santosh Kale", role: "Youth Development", img: "/pics/shivaji-4.webp" },
];

export default function GoverningBoardPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-saffron-700/30 bg-charcoal-900">
        <div className="absolute inset-0 texture-grain" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-heading text-xs uppercase tracking-[0.4em] text-saffron-500">
              Leadership
            </p>
            <h1 className="mt-3 font-display text-4xl font-black uppercase tracking-wide text-parchment-100 sm:text-5xl">
              Governing Board
            </h1>
            <p className="mt-4 max-w-2xl text-parchment-500">
              The council that steers Ashtedo India — photo and position of each
              officer. Replace placeholder portraits with official board photos
              when ready.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal-950 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading kicker="10+ Officers" title="Meet the Board" />

          <StaggerGroup
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            stagger={0.06}
          >
            {board.map((m) => (
              <StaggerItem key={m.name}>
                <article className="group overflow-hidden border border-charcoal-700 bg-charcoal-900 transition-colors hover:border-saffron-600/50">
                  <div className="relative aspect-[3/4] overflow-hidden bg-charcoal-800">
                    <AkhadaImage
                      src={m.img}
                      alt={m.name}
                      label={m.role}
                      className="h-full w-full"
                      imgClassName="object-cover grayscale transition duration-300 group-hover:grayscale-0 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/80 to-transparent p-4 pt-16">
                      <p className="font-heading text-xs uppercase tracking-[0.25em] text-saffron-500">
                        {m.role}
                      </p>
                      <h3 className="mt-1 font-heading text-lg font-bold uppercase tracking-wide text-parchment-100">
                        {m.name}
                      </h3>
                    </div>
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
