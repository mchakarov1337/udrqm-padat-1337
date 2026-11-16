interface FooterProps {
  onOpenViewing: () => void;
}

export function Footer({ onOpenViewing }: FooterProps) {
  return (
    <footer className="bg-[#001233] text-white py-16 lg:py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-normal tracking-[0.06em] mb-8">
          Sip Responsibly
        </h2>

        <nav
          aria-label="Footer Navigation"
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs tracking-[0.16em] uppercase text-white/75 mb-10"
        >
          <a href="#bottles" className="hover:text-white transition-colors">
            Our Vodkas
          </a>
          <a href="#signatures" className="hover:text-white transition-colors">
            Cocktails
          </a>
          <a href="#heritage" className="hover:text-white transition-colors">
            Seven Rila Lakes
          </a>
          <a href="#featured" className="hover:text-white transition-colors">
            Launch Campaign
          </a>
          <button
            type="button"
            onClick={onOpenViewing}
            className="hover:text-white transition-colors uppercase tracking-[0.16em] cursor-pointer"
          >
            Private Tasting
          </button>
        </nav>

        <div className="max-w-2xl mx-auto border-t border-white/10 pt-8 text-xs leading-relaxed text-white/55 space-y-2">
          <p>
            Bulgarian White Horse® Distillery · Seven Rila Lakes Region, 2650 Sapareva Banya, Bulgaria
          </p>
          <p>
            © 2026 Bulgarian White Horse® Vodka. Enjoy responsibly. Intended for adults of legal drinking age only.
          </p>
        </div>
      </div>
    </footer>
  );
}
