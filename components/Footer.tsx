import Link from "next/link";
import { Swords, Mail, Phone, MapPin, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t-2 border-saffron-700/40 bg-charcoal-900 texture-grain">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="clip-blade-sm flex h-10 w-10 items-center justify-center bg-gradient-to-br from-saffron-600 to-crimson-600">
                <Swords className="h-5 w-5 text-charcoal-950" strokeWidth={2.5} />
              </span>
              <div className="leading-none">
                <p className="font-display text-lg font-bold tracking-wider text-parchment-100">
                  ASHTEDO AKHADA
                </p>
                <p className="font-heading text-[9px] uppercase tracking-[0.4em] text-saffron-500">
                  Mardani Khel
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-parchment-500">
              National Governing Body of Ashtedo India. Preserving the warrior
              heritage of Chhatrapati Shivaji Maharaj since the era of Hindavi
              Swarajya.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-saffron-500">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-parchment-300">
              <li><Link href="/about" className="hover:text-saffron-400">About Us &amp; History</Link></li>
              <li><Link href="/governing-board" className="hover:text-saffron-400">Governing Board</Link></li>
              <li><Link href="/affiliated-states" className="hover:text-saffron-400">Affiliated States</Link></li>
              <li><Link href="/events" className="hover:text-saffron-400">Events</Link></li>
              <li>
                <a
                  href="https://www.sgfi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-saffron-400"
                >
                  SGFI — School Games Federation of India
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-saffron-500">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-parchment-300">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-saffron-600" />
                Kolhapur, Maharashtra, India
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-saffron-600" />
                +91 00000 00000
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-saffron-600" />
                contact@ashtedoakhada.in
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              {["Facebook", "Instagram", "YouTube"].map((label) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="clip-blade-sm flex h-9 w-9 items-center justify-center bg-charcoal-800 text-parchment-300 transition-colors hover:bg-saffron-600 hover:text-charcoal-950"
                >
                  <Share2 className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-charcoal-700 pt-6 text-center">
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-parchment-500">
            National Governing Body of Ashtedo India
          </p>
          <p className="mt-2 text-xs text-parchment-500/70">
            © {new Date().getFullYear()} Ashtedo Akhada. Jai Bhavani, Jai Shivaji.
          </p>
        </div>
      </div>
    </footer>
  );
}
