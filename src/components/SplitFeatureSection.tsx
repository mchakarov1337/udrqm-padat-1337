import { motion } from 'motion/react';
import { FEATURE_SPLIT_STORIES, type EditorialStory } from '../data/atelierCatalog';
import { MEDIA_ASSETS } from '../assets/mediaAssets';

interface SplitFeatureSectionProps {
  onSelectStory: (story: EditorialStory) => void;
}

export function SplitFeatureSection({ onSelectStory }: SplitFeatureSectionProps) {
  const [leftStory, rightStory] = FEATURE_SPLIT_STORIES;

  return (
    <section
      id="featured"
      aria-label="Featured Capsules and Stories"
      className="relative z-20 -mt-14 lg:-mt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch shadow-[0_24px_60px_-20px_rgba(0,24,69,0.28)]">
        {/* Left Feature Card (~58%) */}
        <motion.article
          initial={{ y: 14 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 relative min-h-[420px] sm:min-h-[480px] overflow-hidden group bg-[#0A1628]"
        >
          <img
            src={MEDIA_ASSETS[leftStory.image]}
            alt={leftStory.imageAlt}
            referrerPolicy="no-referrer"
            style={{ objectPosition: leftStory.objectPosition }}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00102A]/90 via-[#00102A]/30 to-transparent" />

          <div className="relative z-10 h-full flex flex-col justify-end p-8 sm:p-10 text-white">
            <p className="text-xs tracking-[0.22em] uppercase text-white/80 mb-2">
              {leftStory.kicker}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-normal leading-tight text-balance mb-6">
              {leftStory.title}
            </h2>
            <div>
              <button
                type="button"
                onClick={() => onSelectStory(leftStory)}
                className="inline-flex items-center justify-center px-6 py-2.5 text-xs tracking-[0.16em] uppercase font-medium border border-white/75 text-white hover:bg-white hover:text-[#001845] transition-colors duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {leftStory.ctaLabel}
              </button>
            </div>
          </div>
        </motion.article>

        {/* Right Feature Card (~42%) */}
        <motion.article
          initial={{ y: 14 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative min-h-[420px] sm:min-h-[480px] overflow-hidden group bg-[#161A20]"
        >
          <img
            src={MEDIA_ASSETS[rightStory.image]}
            alt={rightStory.imageAlt}
            referrerPolicy="no-referrer"
            style={{ objectPosition: rightStory.objectPosition }}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B111C]/92 via-[#0B111C]/45 to-[#0B111C]/20" />

          <div className="relative z-10 h-full flex flex-col justify-end items-center text-center p-8 sm:p-10 text-white">
            <p className="text-xs tracking-[0.24em] uppercase text-white/80 mb-2">
              {rightStory.kicker}
            </p>
            <h2 className="font-display text-3xl sm:text-[34px] font-normal leading-tight text-balance mb-6 max-w-xs">
              {rightStory.title}
            </h2>
            <button
              type="button"
              onClick={() => onSelectStory(rightStory)}
              className="inline-flex items-center justify-center px-6 py-2.5 text-xs tracking-[0.16em] uppercase font-medium border border-white/75 text-white hover:bg-white hover:text-[#001845] transition-colors duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {rightStory.ctaLabel}
            </button>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
