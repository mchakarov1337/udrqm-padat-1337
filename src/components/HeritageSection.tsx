import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HERITAGE_CHAPTERS, HERITAGE_PORTRAIT_KEY } from '../data/atelierCatalog';
import { MEDIA_ASSETS } from '../assets/mediaAssets';

export function HeritageSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="heritage"
      className="relative bg-[#001845] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch">
        <motion.div
          initial={{ y: 12 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 px-6 sm:px-10 lg:px-14 py-16 lg:py-24 flex flex-col justify-center"
        >
          <p className="text-xs tracking-[0.24em] uppercase text-[#9ABCE0] mb-3">
            100% Bulgarian Origin
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-normal leading-[1.1] tracking-[0.01em] text-balance mb-6">
            The White Horse Story, Pure from Rila
          </h2>
          <p className="text-white/80 text-[15px] leading-[1.7] max-w-xl mb-10">
            Crafted from single-harvest Thracian winter wheat and snowmelt descending through the Seven Rila Lakes—unveiled through an intimate editorial campaign capturing the spirit’s nocturnal grace.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/15 pt-8 mb-9">
            {HERITAGE_CHAPTERS.map((chapter) => (
              <div key={chapter.index} className="space-y-1.5">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-lg text-[#9ABCE0] tabular-nums">
                    {chapter.index}
                  </span>
                  <h3 className="font-display text-xl font-normal text-white">
                    {chapter.title}
                  </h3>
                </div>
                <p className="text-xs text-[#9ABCE0]/90 tracking-[0.06em]">
                  {chapter.location}
                </p>
              </div>
            ))}
          </div>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-8 text-sm text-white/80 leading-relaxed">
                  {HERITAGE_CHAPTERS.map((chapter) => (
                    <p key={chapter.index}>{chapter.summary}</p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div>
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
              className="inline-flex items-center justify-center px-7 py-3 text-xs tracking-[0.16em] uppercase font-medium border border-white/70 text-white hover:bg-white hover:text-[#001845] transition-colors duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {expanded ? 'Close Distillery Notes' : 'Explore Our Origin'}
            </button>
          </div>
        </motion.div>

        <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full overflow-hidden">
          <img
            src={MEDIA_ASSETS[HERITAGE_PORTRAIT_KEY]}
            alt="Bulgarian White Horse Vodka launch campaign muse portrait"
            referrerPolicy="no-referrer"
            className="w-full h-full lg:absolute lg:inset-0 object-cover object-[center_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001845] via-[#001845]/20 to-transparent lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001845] via-transparent to-transparent lg:hidden" />
        </div>
      </div>
    </section>
  );
}
