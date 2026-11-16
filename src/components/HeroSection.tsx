import { motion, useScroll, useTransform } from 'motion/react';
import { HERO_CONTENT } from '../data/atelierCatalog';
import { MEDIA_ASSETS } from '../assets/mediaAssets';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export function HeroSection({ onExploreClick }: HeroSectionProps) {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], [0, 48]);
  const textY = useTransform(scrollY, [0, 700], [0, 22]);

  return (
    <section
      id="top"
      className="relative min-h-[700px] lg:min-h-[820px] flex items-center overflow-hidden bg-gradient-to-b from-[#7FA6CF] via-[#C3D8EC] to-[#E6EFF8] pt-20 pb-28 lg:pb-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_25%,rgba(255,255,255,0.65),transparent_58%)]"
      />

      {/* Seven Rila Lakes Alpine Backdrop seamlessly masked into sky-blue canvas */}
      <motion.div
        style={{
          y: imageY,
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.42) 18%, rgba(0,0,0,0.95) 42%, black 100%)',
          maskImage:
            'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.42) 18%, rgba(0,0,0,0.95) 42%, black 100%)',
        }}
        className="absolute inset-y-0 right-0 w-full lg:w-[76%] pointer-events-none select-none"
      >
        <img
          src={MEDIA_ASSETS[HERO_CONTENT.heroImage]}
          alt={HERO_CONTENT.heroImageAlt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[28%_center] opacity-90 lg:opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001845]/35 via-transparent to-[#E6EFF8]/95" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <p className="text-xs tracking-[0.24em] uppercase font-medium text-[#002366] mb-4">
            {HERO_CONTENT.kicker}
          </p>

          <h1 className="font-display text-[#002366] text-4xl sm:text-5xl lg:text-[62px] font-normal leading-[1.04] tracking-[0.02em] text-balance mb-6">
            {HERO_CONTENT.headlineLine1}{' '}
            <br />
            {HERO_CONTENT.headlineLine2}
          </h1>

          <p className="text-[#102647] text-[15px] sm:text-base leading-[1.7] max-w-md mb-9">
            {HERO_CONTENT.description}
          </p>

          <button
            type="button"
            onClick={onExploreClick}
            className="inline-flex items-center justify-center px-7 py-3.5 text-xs tracking-[0.14em] uppercase font-medium text-[#002366] border border-[#002366] bg-white/45 hover:bg-[#002366] hover:text-white transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#002366]"
          >
            {HERO_CONTENT.ctaLabel}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
