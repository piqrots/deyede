import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { LOGO_URL, NAV_LINKS, CONTACT, WA_DEFAULT } from "@/data/content";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="border-t border-white/15 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 pb-16 border-b border-white/10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
              Siap Wujudkan Desainmu?
            </p>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-cta-link"
              className="group inline-flex items-baseline gap-3 font-serif text-4xl md:text-6xl uppercase tracking-tighter hover:text-white/70 transition-colors duration-300"
            >
              Mulai Proyekmu
              <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
          <img src={LOGO_URL} alt="Deyede" className="h-10 md:h-14 w-auto self-start md:self-end" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-12 text-sm">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Navigasi</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.to}
                    data-testid={`footer-link-${link.id}`}
                    className="text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Kontak</p>
            <ul className="space-y-2 text-white/60">
              <li>Admin 1 {CONTACT.waDisplay}</li>
              <li>Admin 2 {CONTACT.waDisplay2}</li>
              <li>{CONTACT.email}</li>
              <li>
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-instagram-link"
                  className="hover:text-white transition-colors duration-300"
                >
                  {CONTACT.instagram}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Workshop</p>
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-maps-link"
              className="text-white/60 hover:text-white transition-colors duration-300"
            >
              {CONTACT.address}
            </a>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Jam Operasional</p>
            <p className="text-white/60">{CONTACT.hours}</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
          <span>© 2026 Deyede Custom Semarang</span>
          <span>Spill The Design — Semarang, Jawa Tengah</span>
        </div>
      </div>
    </footer>
  );
}
