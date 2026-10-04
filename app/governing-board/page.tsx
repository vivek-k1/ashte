import SectionHeading from "@/components/SectionHeading";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/Reveal";
import AkhadaImage from "@/components/AkhadaImage";

export const metadata = {
  title: "Governing Board | Ashtedo Akhada",
  description: "Leadership of Ashtedo Akhada — photo and position of each board member.",
};

const board = [
  {
    name: "MP Sree Ramdasji Tadas",
    role: "President",
    img: "/People/ramdasji-tadas.jpg",
  },
  {
    name: "Dr. Sambhaji Bhosale",
    role: "Vice President",
    img: "/People/sambhaji-bhosale.jpg",
  },
  {
    name: "Rajesh Talmale",
    role: "General Secretary",
    img: "/People/rajesh-talmale.jpg",
  },
  {
    name: "Raj Kumar",
    role: "Secretary General",
    img: "/People/raj-kumar.jpg",
  },
  {
    name: "Dharmendra Gurjar",
    role: "Executive Member",
    img: "/People/dharmendra-gurjar.jpg",
  },
  {
    name: "Trishala Nandan Jain",
    role: "Executive Member",
    img: "/People/trishala-nandan-jain.jpg",
  },
  {
    name: "Mohammad Hassan",
    role: "Executive Member",
    img: "/People/mohammad-hassan.jpg",
  },
  {
    name: "Huidrom Singh",
    role: "Executive Member",
    img: "/People/huidrom-singh.jpg",
  },
  {
    name: "P. Senthil Nathan",
    role: "Executive Member",
    img: "/People/p-senthil-nathan.jpg",
  },
  {
    name: "K. Harikrishnan",
    role: "Executive Member",
    img: "/People/k-harikrishnan.jpg",
  },
  {
    name: "Vijay Sharma",
    role: "Executive Member",
    img: "/People/vijay-sharma.jpg",
  },
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
              The council that steers Ashtedo India — officers and executive
              members of Mardani Khel / Ashtedu Akhada.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal-950 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker={`${board.length} Officers`}
            title="Meet the Board"
          />

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
                      imgClassName="object-cover object-top transition duration-300 group-hover:scale-105"
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
