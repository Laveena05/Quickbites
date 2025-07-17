"use client";
import { useState } from "react";
import RecipeCard from "./RecipeCard";

interface Recipe {
  id: number;
  title: string;
  image: string;
  nutrition?: unknown;
}

export default function FeaturedRecipesCarousel({ recipes }: { recipes: Recipe[] }) {
  const [start, setStart] = useState(0);
  const visible = 3;
  const max = recipes.length;
  const next = () => setStart((s) => (s + visible < max ? s + visible : 0));
  const prev = () => setStart((s) => (s - visible >= 0 ? s - visible : max - visible));
  return (
    <div className="relative">
      <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">Featured Recipes</h2>
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="hidden md:flex absolute left-0 z-10 items-center justify-center w-12 h-12 rounded-full bg-amber-200 hover:bg-amber-300 border-2 border-lime-300 text-green-900 font-bold shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
          aria-label="Previous recipes"
        >
          <span className="text-2xl">&#8592;</span>
        </button>
        {/* Cards */}
        <div className="flex gap-6 mx-auto overflow-x-auto pb-2 justify-center">
          {recipes.slice(start, start + visible).map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
        {/* Right Arrow */}
        <button
          onClick={next}
          className="hidden md:flex absolute right-0 z-10 items-center justify-center w-12 h-12 rounded-full bg-amber-200 hover:bg-amber-300 border-2 border-lime-300 text-green-900 font-bold shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
          aria-label="Next recipes"
        >
          <span className="text-2xl">&#8594;</span>
        </button>
      </div>
    </div>
  );
} 