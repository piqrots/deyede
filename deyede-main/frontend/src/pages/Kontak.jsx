import { ArrowUpRight, MapPin, Mail, Clock, Instagram, Phone } from "lucide-react";
import { RevealLine, FadeUp, PageWrap } from "@/components/Reveal";
import Ribbon from "@/components/Ribbon";
import { CONTACT, SIGNATURE_BG, WA_DEFAULT, WA_MESSAGE, waLinkFor } from "@/data/content";

const INFO = [
  { icon: Phone, label: "WhatsApp", value: `Admin 1 ${CONTACT.waDisplay}`, href: waLinkFor(CONTACT.waNumber, WA_MESSAGE), direct: true, id: "phone-1" },
  { icon: Phone, label: "WhatsApp", value: `Admin 2 ${CONTACT.waDisplay2}`, href: waLinkFor(CONTACT.waNumber2, WA_MESSAGE), direct: true, id: "phone-2" },
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}`, id: "email" },
  { icon: MapPin, label: "Workshop", value: CONTACT.address, href: CONTACT.mapsUrl, id: "address" },
  { icon: Clock, label: "Jam Operasional", value: CONTACT.hours, href: null, id: "hours" },
  { icon: Instagram, label: "Instagram", value: CONTACT.instagram, href: CONTACT.instagramUrl, id: "instagram" },
];

export default function Kontak() {
  return (
    <PageWrap>
      <section data-testid="kontak-hero" className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden pt-24">
        <img
          src={SIGNATURE_BG}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <RevealLine delay={0.1}>
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-thread">
              Hubungi Kami
            </span>
          </RevealLine>
          <h1 className="font-serif uppercase tracking-tighter leading-[0.9] mt-6">
            <RevealLine delay={0.25} className="text-5xl md:text-7xl lg:text-9xl">
              Mulai
            </RevealLine>
            <RevealLine delay={0.4} className="text-5xl md:text-7xl lg:text-9xl italic text-white/70">
              Proyekmu
            </RevealLine>
          </h1>
          <FadeUp delay={0.6} className="mt-10 max-w-md text-sm md:text-base text-white/60 leading-relaxed">
            Satu pesan WhatsApp cukup untuk memulai. Ceritakan kebutuhanmu,
            kami balas dengan estimasi harga dan timeline — tanpa komitmen apa
            pun.
          </FadeUp>
          <FadeUp delay={0.75} className="mt-12">
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="wa-cta-button"
              className="group inline-flex items-center gap-3 bg-white text-black font-mono text-xs md:text-sm uppercase tracking-[0.25em] px-10 py-5 md:px-14 md:py-6 border border-white transition-colors duration-300 hover:bg-transparent hover:text-white"
            >
              Chat WhatsApp Sekarang
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </FadeUp>
        </div>
      </section>

      <Ribbon inverted speed={30} />

      <section data-testid="kontak-info" className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-28">
        <FadeUp>
          <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-tighter mb-12">
            Temukan <span className="italic text-white/70">Kami</span>
          </h2>
        </FadeUp>
        <div className="border-t border-white/15">
          {INFO.map((item, i) => {
            const Icon = item.icon;
            const content = (
              <>
                <div className="flex items-center gap-5">
                  <Icon className="w-5 h-5 text-white/40 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                      {item.label}
                    </p>
                    <p className="mt-1.5 text-base md:text-xl font-light">{item.value}</p>
                  </div>
                </div>
                {item.href && (
                  <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors duration-300" />
                )}
              </>
            );
            const cls =
              "group flex items-center justify-between gap-6 py-7 md:py-9 border-b border-white/15 hover:px-4 transition-all duration-500";
            return (
              <FadeUp key={item.id} delay={i * 0.06}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    data-wa-direct={item.direct ? "true" : undefined}
                    data-testid={`kontak-info-${item.id}`}
                    className={cls}
                  >
                    {content}
                  </a>
                ) : (
                  <div data-testid={`kontak-info-${item.id}`} className={cls}>
                    {content}
                  </div>
                )}
              </FadeUp>
            );
          })}
        </div>
      </section>

      <section data-testid="kontak-map-note" className="border-t border-white/15 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 text-center">
          <FadeUp>
            <p className="font-serif text-3xl md:text-5xl uppercase tracking-tighter leading-tight">
              Datang Langsung ke Workshop?<br />
              <span className="italic text-white/70">Kopinya dari Kami.</span>
            </p>
            <p className="mt-6 max-w-md mx-auto text-sm text-white/60">
              Lihat sampel bahan, diskusikan desain, dan kenalan dengan tim di
              balik mesin jahit. {CONTACT.address}.
            </p>
          </FadeUp>
        </div>
      </section>
    </PageWrap>
  );
}
