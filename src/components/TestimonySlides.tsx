"use client";
import { useState, useEffect } from "react";

interface Testimonial {
  name: string;
  text: string;
}

export default function TestimonySlides({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);
  return (
    <section className="mt-16 bg-lime-50 rounded-xl shadow-inner py-10 px-4 max-w-3xl mx-auto animate-fade-in">
      <h3 className="text-xl font-bold text-green-800 mb-6 text-center">What our users say</h3>
      <div className="flex flex-col items-center">
        <div className="transition-all duration-700 ease-in-out bg-white/40 shadow px-8 py-6 text-lg text-green-900 font-medium text-center min-h-[80px] flex items-center justify-center">
          &quot;{testimonials[index].text}&quot;
        </div>
        <div className="mt-4 text-green-700 font-semibold">- {testimonials[index].name}</div>
      </div>
    </section>
  );
} 