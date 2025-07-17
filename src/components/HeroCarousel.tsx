"use client";
import { useState, useEffect } from "react";

export default function HeroCarousel({ quotes }: { quotes: string[] }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % quotes.length), 3500);
    return () => clearInterval(timer);
  }, [quotes.length]);
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[320px] bg-gradient-to-br from-amber-100 via-lime-100 to-amber-200 rounded-xl shadow-lg p-8 mb-12 animate-fade-in">
      <div className="absolute inset-0 bg-[url('/public/globe.svg')] opacity-10 bg-center bg-cover rounded-xl" />
      <div className="relative z-10 max-w-xl w-full flex items-center justify-center">
        <div className="transition-all duration-700 ease-in-out bg-white/40 shadow-md px-8 py-6 text-xl text-green-900 font-semibold text-center min-h-[120px] flex items-center justify-center">
          {quotes[index]}
        </div>
      </div>
    </div>
  );
} 