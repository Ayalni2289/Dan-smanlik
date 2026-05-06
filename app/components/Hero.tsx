import Link from "next/link";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-[5vw] pt-28 pb-16 overflow-hidden bg-gradient-to-br from-[#f0faf4] via-white to-[#fff0f5]">
      {/* Background Video & Carousel component */}
      <HeroCarousel />

      {/* Decorative blobs */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(92,184,128,0.12)_0%,transparent_70%)] -top-24 -right-24 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(240,111,160,0.10)_0%,transparent_70%)] -bottom-12 -left-12 pointer-events-none" />
      <div className="relative z-10 max-w-xl animate-fadeUp">
        <div className="inline-flex items-center gap-2 bg-[#d4f0df] text-[#1a5c35] text-[0.78rem] font-medium tracking-widest uppercase px-4 py-1.5 rounded-full border border-[#a8e0bf] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5cb880]" />
          Sağlıklı Yaşam Danışmanı
        </div>
        <h1 className="font-playfair text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.15] text-[#0d3a20] mb-5">
          Doğanın gücüyle{" "}
          <em className="inline-block rounded-md bg-[#fff0f5] px-1 py-0.25 text-[#c43d72] not-italic shadow-[0_2px_10px_rgba(196,61,114,0.12)]">
            sağlığınıza
          </em>{" "}
          yatırım yapın
        </h1>
        <p className="text-[1.1rem] text-[#112a1c] font-medium mb-8 max-w-md leading-relaxed bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-sm border border-white/60">
          Klinik olarak test edilmiş, doğal içerikli sağlık ürünlerini sizlerle
          buluşturuyorum. Her ürünün arkasındaki uzmanlıkla güvenli alışveriş
          yapın.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="#urunler"
            className="inline-flex items-center justify-center bg-[#2e8a52] text-white px-8 py-3.5 rounded-full font-medium text-[0.95rem] shadow-md shadow-[#2e8a52]/20 hover:bg-[#1a5c35] hover:-translate-y-px transition-all"
          >
            Ürünleri İncele
          </Link>
          <Link
            href="#distributor"
            className="inline-flex items-center justify-center bg-white backdrop-blur-sm border-[1.5px] border-[#2e8a52] text-[#1a5c35] px-7 py-3 rounded-full font-medium text-[0.95rem] shadow-md shadow-black/5 hover:bg-[#2e8a52] hover:text-white hover:-translate-y-px transition-all"
          >
            Hakkımda
          </Link>
        </div>
      </div>
    </section>
  );
}
