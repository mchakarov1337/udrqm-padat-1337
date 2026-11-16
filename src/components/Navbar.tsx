import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  selectionCount: number;
  onOpenViewing: () => void;
}

const NAV_LINKS = [
  { label: 'Vodkas', href: '#bottles' },
  { label: 'Cocktails', href: '#signatures' },
  { label: 'Rila Origin', href: '#heritage' },
  { label: 'Campaign', href: '#featured' },
];

export function Navbar({ selectionCount, onOpenViewing }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled
          ? 'bg-[#001845]/95 text-white border-b border-white/10'
          : 'bg-gradient-to-b from-[#001233]/85 via-[#001233]/50 to-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-18 flex items-center justify-between gap-8">
        <a
          href="#top"
          className="font-display text-lg sm:text-xl tracking-[0.2em] uppercase text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          BULGARIAN WHITE HORSE
        </a>

        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8 text-xs tracking-[0.18em] uppercase font-medium"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 text-white/90 hover:text-white transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenViewing}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs tracking-[0.14em] uppercase font-medium border border-white/60 text-white hover:bg-white hover:text-[#001845] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {selectionCount > 0 ? `Private Tasting (${selectionCount})` : 'Private Tasting'}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#001845] border-t border-white/15 px-6 py-6 space-y-4">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-sm tracking-[0.18em] uppercase text-white/90 hover:text-white border-b border-white/10"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onOpenViewing();
            }}
            className="w-full py-3 px-4 text-xs tracking-[0.16em] uppercase font-medium border border-white text-white hover:bg-white hover:text-[#001845] transition-colors cursor-pointer"
          >
            {selectionCount > 0 ? `Private Tasting (${selectionCount})` : 'Private Tasting'}
          </button>
        </div>
      )}
    </header>
  );
}
