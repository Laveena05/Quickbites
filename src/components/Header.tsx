import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-gradient-to-r from-amber-200 via-lime-100 to-amber-300 shadow-md border-b border-green-300 sticky top-0 z-50 animate-fade-in">
      <span className="flex items-center gap-2 text-2xl font-bold text-green-800 select-none">
        <span className="inline-block animate-bounce">
          {/* Animated earthy leaf SVG */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="16" cy="16" rx="14" ry="10" fill="#A3C76D" />
            <path d="M16 6 Q18 16 28 16" stroke="#6B8E23" strokeWidth="2" fill="none" />
          </svg>
        </span>
        QuickBite
      </span>
      <nav className="space-x-6 text-lg font-medium">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/recipes">Recipes</NavLink>
        <NavLink href="/plan">Diet Plan</NavLink>
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="relative text-green-900 hover:text-green-700 transition-colors duration-200">
      <span className="relative z-10">{children}</span>
      <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-green-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
    </Link>
  );
} 