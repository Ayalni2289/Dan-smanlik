"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] h-[68px] border-b border-[rgba(94,160,120,0.18)] bg-[rgba(253,250,247,0.92)] backdrop-blur-md">
      <div className="font-playfair text-[1.3rem] text-[#1a5c35] italic">
        Meryem <span className="text-[#c43d72] not-italic font-semibold">Yalnız Sağlık</span>
      </div>
      <ul className="hidden md:flex gap-8 list-none">
        <li>
          <Link href="#urunler" className="text-[0.85rem] font-medium text-[#3d5c48] uppercase tracking-widest hover:text-[#2e8a52] transition-colors">
            Ürünler
          </Link>
        </li>
        <li>
          <Link href="#distributor" className="text-[0.85rem] font-medium text-[#3d5c48] uppercase tracking-widest hover:text-[#2e8a52] transition-colors">
            Hakkımda
          </Link>
        </li>
        <li>
          <Link href="#yorumlar" className="text-[0.85rem] font-medium text-[#3d5c48] uppercase tracking-widest hover:text-[#2e8a52] transition-colors">
            Yorumlar
          </Link>
        </li>
        <li>
          <Link href="#iletisim" className="text-[0.82rem] font-medium bg-[#2e8a52] text-white px-5 py-2 rounded-full hover:bg-[#1a5c35] transition-colors">
            İletişim
          </Link>
        </li>
      </ul>
    </nav>
  );
}
