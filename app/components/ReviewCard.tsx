import { Review } from "@/app/types";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i < review.rating ? "★" : "☆");

  return (
    <div className="bg-white rounded-2xl p-6 border border-[rgba(94,160,120,0.18)] hover:-translate-y-1 transition-transform duration-200">
      {/* Stars */}
      <p className="text-[#f06fa0] tracking-widest text-[0.9rem] mb-3">
        {stars.join("")}
      </p>

      {/* Text */}
      <p className="text-[#3d5c48] font-light text-[0.92rem] leading-[1.75] italic mb-5">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#a8e0bf] to-[#ffd6e6] flex items-center justify-center text-[0.85rem] font-semibold text-[#1a5c35] flex-shrink-0">
          {review.initials}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-[0.9rem] text-[#1a2e22]">{review.name}</span>
            <span className="text-[0.7rem] bg-[#d4f0df] text-[#1a5c35] px-2 py-0.5 rounded-full font-medium">
              {review.productTag}
            </span>
          </div>
          <p className="text-[0.78rem] text-[#7a9e89]">
            {review.city} · {review.timeAgo}
          </p>
        </div>
      </div>
    </div>
  );
}
