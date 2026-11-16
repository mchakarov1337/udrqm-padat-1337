import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { MAISON_EDITIONS } from '../data/atelierCatalog';
import { MEDIA_ASSETS } from '../assets/mediaAssets';
import { nextSlideIndex, prevSlideIndex } from '../utils/catalogLogic';

interface DiscoverShowcaseProps {
  selectedTitles: string[];
  onToggleEdition: (title: string) => void;
}

export function DiscoverShowcase({
  selectedTitles,
  onToggleEdition,
}: DiscoverShowcaseProps) {
  const [index, setIndex] = useState(0);
  const current = MAISON_EDITIONS[index];
  const isSelected = selectedTitles.includes(current.name);

  return (
    <section
      id="collections"
      className="bg-gradient-to-b from-[#EAF1F8] to-[#DCE8F4] py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs tracking-[0.22em] uppercase text-[#4B6387] mb-2">
              Discover more
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-normal text-[#002366]">
              {current.brandLine}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous Bulgarian White Horse edition"
              onClick={() =>
                setIndex((prev) => prevSlideIndex(prev, MAISON_EDITIONS.length))
              }
              className="w-11 h-11 inline-flex items-center justify-center border border-[#002366]/30 text-[#002366] hover:bg-[#002366] hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              aria-label="Next Bulgarian White Horse edition"
              onClick={() =>
                setIndex((prev) => nextSlideIndex(prev, MAISON_EDITIONS.length))
              }
              className="w-11 h-11 inline-flex items-center justify-center border border-[#002366]/30 text-[#002366] hover:bg-[#002366] hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white/80 border border-[#002366]/10 p-6 sm:p-10 lg:p-12"
          >
            <div
              className={`lg:col-span-6 aspect-[4/3] overflow-hidden ${
                current.isBottle ? 'bg-white border border-[#E4EBF3] p-4 flex items-center justify-center' : 'bg-[#D5E2F0]'
              }`}
            >
              <img
                src={MEDIA_ASSETS[current.image]}
                alt={current.imageAlt}
                referrerPolicy="no-referrer"
                style={{ objectPosition: current.objectPosition }}
                className={
                  current.isBottle
                    ? 'max-h-full w-auto object-contain'
                    : 'w-full h-full object-cover'
                }
              />
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center">
              <p className="text-xs tracking-[0.2em] uppercase text-[#4B6387] mb-2">
                {current.provenance}
                <span className="mx-2" aria-hidden="true">
                  ·
                </span>
                <span className="tabular-nums font-medium text-[#002366]">
                  {current.priceLabel}
                </span>
              </p>

              <h3 className="font-display text-3xl sm:text-4xl font-normal text-[#002366] mb-1">
                {current.name}
              </h3>
              <p className="text-sm text-[#4B6387] mb-6">{current.subtitle}</p>

              <p className="text-[#1D3459] text-[15px] leading-[1.7] mb-6">
                {current.description}
              </p>

              <p className="text-xs text-[#4B6387] border-t border-[#002366]/10 pt-4 mb-8">
                {current.notes}
              </p>

              <div>
                <button
                  type="button"
                  onClick={() => onToggleEdition(current.name)}
                  className={`inline-flex items-center gap-2 px-7 py-3.5 text-xs tracking-[0.15em] uppercase font-medium border transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-[#002366] text-white border-[#002366]'
                      : 'border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white'
                  }`}
                >
                  {isSelected && <Check className="w-4 h-4" />}
                  <span>
                    {isSelected ? 'Added to Private Tasting' : 'Add to Private Tasting'}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {MAISON_EDITIONS.map((edition, idx) => {
            const active = idx === index;
            return (
              <button
                key={edition.id}
                type="button"
                onClick={() => setIndex(idx)}
                className={`text-left p-3.5 border transition-colors duration-200 flex items-center gap-3.5 cursor-pointer ${
                  active
                    ? 'bg-white border-[#002366] text-[#002366]'
                    : 'bg-white/60 border-[#002366]/12 text-[#3E567B] hover:bg-white/95 hover:border-[#002366]/40'
                }`}
              >
                <img
                  src={MEDIA_ASSETS[edition.image]}
                  alt=""
                  aria-hidden="true"
                  referrerPolicy="no-referrer"
                  style={{ objectPosition: edition.objectPosition }}
                  className={`w-12 h-14 shrink-0 ${
                    edition.isBottle
                      ? 'object-contain bg-white border border-[#E4EBF3] p-0.5'
                      : 'object-cover bg-[#D5E2F0]'
                  }`}
                />
                <div className="min-w-0">
                  <p className="text-[11px] tracking-[0.14em] uppercase text-[#4B6387] mb-1 tabular-nums">
                    {String(idx + 1).padStart(2, '0')} · {edition.priceLabel}
                  </p>
                  <p className="font-display text-base font-normal leading-snug line-clamp-2">
                    {edition.name}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
