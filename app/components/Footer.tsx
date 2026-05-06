export default function Footer() {
  return (
    <footer className="bg-[#0d3a20] text-white/60 py-12 px-[5vw] text-center">
      <p className="font-playfair text-[1.6rem] text-white italic mb-4">
        Meryem <span className="text-[#ffaacb] not-italic">Yalnız Sağlık</span>
      </p>
      <p className="text-[0.85rem] leading-relaxed max-w-md mx-auto mb-6">
        Sağlığınız için doğru adımı atın. Uzman danışmanlığıyla özenle seçilmiş
        ürünler, kapınıza kadar gelsin.
      </p>
      <hr className="border-white/10 max-w-[200px] mx-auto mb-5" />
      <p className="text-[0.75rem] opacity-40">
        © {new Date().getFullYear()} Meryem Yalnız Sağlık — Tüm hakları saklıdır. Bu site
        tıbbi tavsiye yerine geçmez.
      </p>
    </footer>
  );
}
