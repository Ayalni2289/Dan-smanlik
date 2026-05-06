import { reviews } from "@/app/data";
import ReviewCard from "./ReviewCard";

export default function ReviewsSection() {
  return (
    <section id="yorumlar" className="py-24 px-[5vw] bg-[#fff0f5]">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block text-[0.75rem] font-medium tracking-[0.12em] uppercase text-[#c43d72] mb-3">
          Müşteri Deneyimleri
        </span>
        <h2 className="font-playfair text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#0d3a20] leading-snug">
          Gerçek İnsanlar, Gerçek Sonuçlar
        </h2>
        <p className="mt-2 text-[#7a9e89] font-light text-[1rem]">
          Binlerce mutlu müşterimizden birkaçı
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}
