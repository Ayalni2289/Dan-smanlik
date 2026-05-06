"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { distributorStats, certificates } from "@/app/data";

export default function DistributorSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.currentTime = 0; // 🔥 HER GİRİŞTE BAŞA AL
      await video.play();
      setIsPlaying(true);
    } catch (err) {
      console.log(err);
    }
  };

  const pauseVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0; // 🔥 ÇIKINCA SIFIRLA
    setIsPlaying(false);
  };

  const toggleVideo = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await playVideo();
    } else {
      pauseVideo();
    }
  };

  return (
    <section
      id="distributor"
      className="py-24 px-[5vw] relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #1a5c35 0%, #0f3d28 100%)",
      }}
    >
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-20 items-center">

        {/* MEDIA */}
        <div
          className="group w-[360px] h-[480px] mx-auto rounded-3xl overflow-hidden relative cursor-pointer border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
          onMouseEnter={playVideo}
          onMouseLeave={pauseVideo}
          onClick={toggleVideo}
        >
          {/* IMAGE */}
          <Image
            src="/ben.png"
            alt="Distributor Photo"
            fill
            className={`object-cover transition-opacity duration-500 ${
              isPlaying ? "opacity-0" : "opacity-100"
            }`}
            priority
          />

          {/* VIDEO */}
          <video
            ref={videoRef}
            src="/video-ben.mp4"
            poster="/ben.png"
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isPlaying ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleVideo();
            }}
            className="sm:hidden absolute inset-0 z-40 flex items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur text-white flex items-center justify-center text-2xl">
              {isPlaying ? "❚❚" : "▶"}
            </div>
          </button>

          {/* TEXT */}
          <p className="absolute bottom-5 left-0 right-0 z-40 text-center text-[0.75rem] text-white/60 italic pointer-events-none">
            {isPlaying
              ? "Video oynatılıyor"
              : "Fotoğrafı görmek için üzerine gelin"}
          </p>
        </div>

        {/* CONTENT (DEĞİŞMEDİ) */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-[0.75rem] font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            <span className="text-[#f9d26a]">★★★★★★★★</span>
            Ana Distribütör
          </div>

          <h2 className="font-playfair text-[clamp(2rem,3.5vw,3rem)] text-white leading-snug mb-2">
            Meryem{" "}
            <span className="text-[#a8e0bf] italic">Yalnız</span>
          </h2>

          <p className="text-[#ffaacb] text-[0.9rem] font-medium tracking-wider uppercase mb-6">
            Sağlık & Beslenme Danışmanı
          </p>

          <p className="text-white/75 font-light text-[0.97rem] leading-[1.85] mb-8">
            5 yıllık sektör deneyimimle binlerce kişinin sağlık yolculuğuna
            rehberlik ettim. Sürekli güncellenen bilgimle, her ürünü bizzat
            araştırıp kendi ailemle birlikte kullandıktan sonra müşterilerime
            sunuyorum.
            <br />
            <br />
            Amacım sadece ürün satmak değil; size özel bir sağlık programı
            oluşturarak hedeflerinize ulaşmanızda gerçek bir destek olmak.
            Danışmanlık hizmetim ücretsizdir — çünkü gerçek değer güvende başlar.
          </p>

          {/* STATS */}
          <div className="flex flex-wrap gap-10 py-6 mb-8 border-t border-b border-white/10">
            {distributorStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-playfair text-[2.2rem] text-white leading-none mb-1">
                  {stat.value}
                </p>
                <p className="text-[0.78rem] text-white/50 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CERTIFICATES */}
          <div className="flex flex-wrap gap-3">
            {certificates.map((cert) => (
              <span
                key={cert.label}
                className="flex items-center gap-1.5 bg-white/8 border border-white/15 text-white/80 text-[0.8rem] px-4 py-1.5 rounded-full"
              >
                <span className="text-[#5cb880] text-[0.7rem]">✦</span>
                {cert.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}