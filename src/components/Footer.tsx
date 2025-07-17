export default function Footer() {
  return (
    <footer className="mt-12 py-8 text-center text-sm text-green-900 border-t border-green-300 bg-gradient-to-r from-amber-100 via-lime-100 to-amber-200 relative overflow-hidden animate-fade-in">
      <span className="relative z-10">&copy; {new Date().getFullYear()} QuickBite Recipe Planner. All rights reserved.</span>
      <span className="absolute left-4 bottom-2 opacity-60 animate-spin-slow">
        {/* Subtle animated leaf SVG */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="16" cy="16" rx="12" ry="8" fill="#A3C76D" />
          <path d="M16 8 Q18 16 26 16" stroke="#6B8E23" strokeWidth="2" fill="none" />
        </svg>
      </span>
    </footer>
  );
}

// Add this to your global CSS or Tailwind config for slow spin:
// .animate-spin-slow { animation: spin 8s linear infinite; } 