export default function ContactSection() {
  return (
    <section id="iletisim" className="py-20 px-[5vw] bg-white text-center">
      <div className="max-w-xl mx-auto">
        <span className="inline-block text-[0.75rem] font-medium tracking-[0.12em] uppercase text-[#c43d72] mb-3">
          İletişim
        </span>
        <h2 className="font-playfair text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#0d3a20] leading-snug mb-3">
          Ücretsiz Danışmanlık Alın ve Sipariş Verin
        </h2>
        <p className="text-[#7a9e89] font-light mb-8">
          Size özel sağlık programı için bugün iletişime geçin
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+905358500116"
            className="flex items-center gap-2 bg-[#2e8a52] text-white px-7 py-3.5 rounded-full font-medium text-[0.95rem] hover:bg-[#1a5c35] transition-colors"
          >
            📞 Hemen Ara
          </a>
          <a
            href="https://wa.me/905358500116?text=Merhaba%20Meryem%20han%C4%B1m%2C%20ben%20internet%20sitenizden%20size%20ula%C5%9F%C4%B1yorum%20bilgi%20alabilir%20miyim%20%3F"
            className="flex items-center gap-2 border-[1.5px] border-[#5cb880] text-[#2e8a52] px-7 py-3 rounded-full font-medium text-[0.95rem] hover:bg-[#f0faf4] transition-colors"
          >
            💬 WhatsApp
          </a>
          <a
            href="mailto:meryem01meryem10@gmail.com"
            className="flex items-center gap-2 border-[1.5px] border-[#5cb880] text-[#2e8a52] px-7 py-3 rounded-full font-medium text-[0.95rem] hover:bg-[#f0faf4] transition-colors"
          >
            ✉️ E-posta Gönder
          </a>
        </div>
      </div>
    </section>
  );
}
