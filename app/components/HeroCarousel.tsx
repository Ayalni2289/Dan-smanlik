"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/health-woman-1.jpeg", alt: "Mutlu ve Huzurlu Kadın" },
  { src: "/health-woman-2.jpeg", alt: "Sağlık" },
  { src: "/health-woman-3.jpeg", alt: "Takviyeli Gıda" },
];

export default function HeroCarousel() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Mobile tarayıcılarda video yüklenmez/oynatılamazsa carousel'in kilitlenmesini engeller.
    const fallbackTimer = setTimeout(() => {
      setIsVideoPlaying(false);
    }, 6000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  useEffect(() => {
    // Video oynarken carousel'i başlatma
    if (isVideoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 saniyede bir değiş
    
    return () => clearInterval(interval);
  }, [isVideoPlaying]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-white">
      {/* Resim Carousel */}
      {!isVideoPlaying && images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Video */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isVideoPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <video 
          autoPlay 
          muted 
          playsInline 
          onEnded={() => setIsVideoPlaying(false)}
          onError={() => setIsVideoPlaying(false)}
          onStalled={() => setIsVideoPlaying(false)}
          onAbort={() => setIsVideoPlaying(false)}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay - Metinlerin okunabilmesi için hafif ve eşit beyaz kaplama */}
      <div className="absolute inset-0 bg-white/30 md:bg-white/40 pointer-events-none" />
    </div>
  );
  
}
