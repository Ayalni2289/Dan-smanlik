import { Product } from "@/app/types";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  isActive: boolean;
  onClick: () => void;
}

export default function ProductCard({ product, isActive, onClick }: ProductCardProps) {
  return (
    <button
      onClick={onClick}
      className={`relative w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl border-[1.5px] text-left cursor-pointer transition-all duration-200 overflow-hidden
        ${isActive
          ? "bg-[#f0faf4] border-[#a8e0bf] translate-x-1"
          : "bg-[#fdfaf7] border-transparent hover:bg-[#f0faf4] hover:border-[#a8e0bf] hover:translate-x-1"
        }`}
      aria-pressed={isActive}
    >
      {/* Active indicator bar */}
      <span
        className={`absolute left-0 top-0 bottom-0 w-1 bg-[#5cb880] rounded-l-sm transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0"}`}
      />

      {/* Thumbnail */}
      <div className="w-16 h-16 rounded-xl bg-[#d4f0df] flex items-center justify-center flex-shrink-0 overflow-hidden relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="64px"
          loading={isActive ? "eager" : "lazy"}
          className="object-cover"
        />
      </div>

      {/* Meta */}
      <div className="flex-1 min-w-0">
        <p className={`font-medium text-[0.95rem] truncate transition-colors ${isActive ? "text-[#1a5c35]" : "text-[#1a2e22]"}`}>
          {product.name}
        </p>
        <p className="text-[0.78rem] text-[#7a9e89]">{product.category}</p>
      </div>

      {/* Tag */}
      {product.tag && (
        <span className="text-[0.7rem] px-2.5 py-1 rounded-full bg-[#ffd6e6] text-[#8c2050] font-medium whitespace-nowrap flex-shrink-0">
          {product.tag}
        </span>
      )}
    </button>
  );
}
