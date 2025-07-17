"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBox = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("query") || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?query=${encodeURIComponent(value)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6 justify-center">
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Search recipes..."
        className="border border-lime-200 bg-amber-50 focus:bg-white focus:border-green-400 rounded-full px-4 py-2 w-64 shadow-sm outline-none transition-colors"
      />
      <button type="submit" className="bg-gradient-to-r from-lime-200 via-amber-200 to-lime-300 text-green-900 font-semibold px-6 py-2 rounded-full shadow hover:from-amber-200 hover:to-lime-200 transition-colors">
        Search
      </button>
    </form>
  );
};

export default SearchBox; 