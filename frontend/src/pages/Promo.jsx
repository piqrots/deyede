import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeUp, PageWrap } from "@/components/Reveal";
import { PROMO_OFFERS } from "@/data/promos";

const PAGE_TITLE = "Promo Jersey Fun Run Murah & Baju Organisasi Murah | Deyede Semarang";
const PAGE_DESCRIPTION =

export default function Promo() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    const canonical = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonical?.href;
    const addedCanonical = !canonical;
    const canonicalLink = canonical || document.createElement("link");

    document.title = PAGE_TITLE;
    if (description) description.content = PAGE_DESCRIPTION;
    if (addedCanonical) {
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = "https://konveksimurah.store/promo/";

    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.content = previousDescription;
      if (addedCanonical) canonicalLink.remove();
      else if (previousCanonical) canonicalLink.href = previousCanonical;
    };
  }, []);

  return (
    <PageWrap>
      <section className="relative pt-32 md:pt-44 pb-14 md:pb-18 overflow-hidden border-b border-white/15">
        <div className="absolute inset-0 bg-stitch opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-thread">
            Promo Deyede · Konveksi Semarang
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl uppercase tracking-tighter leading-[0.95] mt-6 max-w-5xl">
            Promo Jersey Fun Run Murah
            <span className="block italic text-white/65">& Baju Organisasi Murah</span>
          </h1>
          <FadeUp delay={0.2} className="mt-8 max-w-2xl text-sm md:text-base text-white/60 leading-relaxed">
            Pilih promo jersey fun run custom mulai Rp45.000 atau baju organisasi custom mulai Rp100.000. Setiap produk memiliki halaman detail berisi pilihan, proses pembuatan, harga awal, dan cara konsultasi.
          </FadeUp>
          <p className="mt-5 max-w-2xl border-l-2 border-thread pl-4 text-sm text-white/70 leading-relaxed">
            Tanyakan diskon yang sedang berlaku. Untuk pesanan baju organisasi tersedia bonus gratis lanyard ID card anggota sesuai jumlah pesanan, kuota, dan ketentuan promo.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PROMO_OFFERS.map((offer, index) => (
            <FadeUp key={offer.slug} delay={index * 0.1}>
              <article className="h-full border border-white/15 bg-black">
                <Link to={`/promo/${offer.slug}/`} className="block overflow-hidden bg-white">
                  <img src={offer.thumbnail} alt={offer.gallery[0].alt} className="w-full aspect-[16/9] object-contain" />
                </Link>
                <div className="p-6 md:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-thread">
                    Promo {String(index + 1).padStart(2, "0")} · Konveksi Semarang
                  </p>
                  <h2 className="font-serif text-2xl md:text-3xl uppercase mt-3">
                    <Link to={`/promo/${offer.slug}/`} className="hover:text-thread transition-colors">
                      {offer.title}
                    </Link>
                  </h2>
                  <p className="font-mono text-lg text-thread mt-3">{offer.price}</p>
                  <p className="mt-4 text-sm text-white/55 leading-relaxed">{offer.summary}</p>
                  <Link
                    to={`/promo/${offer.slug}/`}
                    data-testid={`promo-detail-${offer.slug}`}
                    className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] border-b border-white/40 pb-2 hover:border-thread hover:text-thread transition-colors"
                  >
                    Baca Detail Promo
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>
    </PageWrap>
  );
}