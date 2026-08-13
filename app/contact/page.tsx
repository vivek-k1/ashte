import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Ashtedo Akhada",
  description: "Contact the National Governing Body of Ashtedo India.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-saffron-700/30 bg-charcoal-900 texture-grain">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-heading text-xs uppercase tracking-[0.4em] text-saffron-500">
              Contact Us
            </p>
            <h1 className="mt-3 font-display text-4xl font-black uppercase tracking-wide text-parchment-100 sm:text-5xl">
              Join the Akhada
            </h1>
            <p className="mt-4 max-w-2xl text-parchment-500">
              Affiliation requests, coaching queries, and event partnerships —
              write to the national office.
            </p>
          </Reveal>
        </div>
      </section>
      <ContactForm />
    </>
  );
}
