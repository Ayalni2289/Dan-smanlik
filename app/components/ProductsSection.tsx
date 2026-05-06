"use client";

import { useState } from "react";
import { products } from "@/app/data";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";

export default function ProductsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="urunler" className="py-24 px-[5vw] bg-white scroll-mb-70">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-block text-[0.75rem] font-medium tracking-[0.12em] uppercase text-[#c43d72] mb-3">
          Ürün Kataloğu
        </span>
        <h2 className="font-playfair text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#0d3a20] leading-snug">
          Özenle Seçilmiş Ürünler
        </h2>
        <p className="mt-2 text-[#7a9e89] font-light text-[1rem]">
          Her biri klinik araştırmalarla desteklenen premium sağlık ürünleri
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-14 items-start">
        {/* Left: product list */}
        <div className="flex flex-col gap-3">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* Right: detail panel */}
        <ProductDetail product={products[activeIndex]} />
      </div>
    </section>
  );
}
