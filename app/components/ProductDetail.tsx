import { Product } from "@/app/types";
import Image from "next/image";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div key={product.id} className="sticky top-[90px] animate-fadeUp">
      {/* Image */}
      <div className="w-full aspect-[4/3] rounded-2xl bg-[#f0faf4] overflow-hidden mb-6 relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 1024px) 90vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Category badge */}
      <span className="inline-block bg-[#ffd6e6] text-[#8c2050] text-[0.75rem] font-medium px-3 py-1 rounded-full uppercase tracking-wider mb-3">
        {product.category}
      </span>

      {/* Title */}
      <h3 className="font-playfair text-[1.9rem] text-[#0d3a20] leading-snug mb-3">
        {product.name}
      </h3>

      {/* Description */}
      <p className="text-[#3d5c48] font-light text-[0.97rem] leading-[1.8] mb-5">
        {product.description}
      </p>

      {/* Benefits */}
      <ul className="flex flex-col gap-2 mb-6">
        {product.benefits.map((benefit, i) => (
          <li key={i} className="flex items-start gap-2 text-[0.9rem] text-[#3d5c48]">
            <span className="text-[#2e8a52] font-semibold flex-shrink-0 mt-0.5">✓</span>
            {benefit}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#iletisim"
        className="inline-block bg-[#2e8a52] text-white px-7 py-3 rounded-full font-medium text-[0.9rem] hover:bg-[#1a5c35] transition-colors"
      >
        Bilgi Al & Sipariş Ver
      </a>
    </div>
  );
}
