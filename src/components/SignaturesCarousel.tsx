import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SIGNATURE_PIECES, type SignaturePiece } from '../data/atelierCatalog';
import { MEDIA_ASSETS } from '../assets/mediaAssets';
import { filterSignatures, nextSlideIndex, prevSlideIndex } from '../utils/catalogLogic';

interface SignaturesCarouselProps {
  onSelectPieceDetails: (piece: SignaturePiece) => void;
  onAddPieceToViewing: (title: string) => void;
}

const CATEGORIES: Array<'All' | 'Martini' | 'Spritz' | 'Evening'> = [
  'All',
  'Martini',
  'Spritz',
  'Evening',
];

export function SignaturesCarousel({
  onSelectPieceDetails,
  onAddPieceToViewing,
}: SignaturesCarouselProps) {
  const [category, setCategory] = useState<'All' | 'Martini' | 'Spritz' | 'Evening'>('All');
  const [activeIndex, setActiveIndex] = useState(0);

  const visiblePieces = filterSignatures(SIGNATURE_PIECES, category);
  const safeIndex = activeIndex >= visiblePieces.length ? 0 : activeIndex;
  const activePiece = visiblePieces[safeIndex];

  const handleCategoryChange = (nextCategory: 'All' | 'Martini' | 'Spritz' | 'Evening') => {
    setCategory(nextCategory);
    setActiveIndex(0);
  };

  return (
    <section
      id="signatures"
      className="bg-white py-20 lg:py-28 border-b border-[#002366]/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#002366]/12">
          <div>
            <p className="text-xs tracking-[0.22em] uppercase text-[#4B6387] mb-2">
              Campaign &amp; Bar Rituals
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-normal text-[#002366]">
              Signature Cocktails
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter signature cocktails"
            className="flex flex-wrap items-center gap-2"
          >
            {CATEGORIES.map((tab) => {
              const selected = category === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => handleCategoryChange(tab)}
                  className={`px-4 py-2 text-xs tracking-[0.14em] uppercase font-medium transition-colors duration-200 border whitespace-nowrap shrink-0 cursor-pointer ${
                    selected
                      ? 'bg-[#002366] text-white border-[#002366]'
                      : 'bg-transparent text-[#2B4368] border-[#002366]/20 hover:border-[#002366]'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        <div className="pt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePiece.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch"
            >
              <div className="lg:col-span-6 relative aspect-[4/5] sm:aspect-[4/4] lg:aspect-auto lg:min-h-[560px] bg-[#E8EEF6] overflow-hidden">
                <img
                  src={MEDIA_ASSETS[activePiece.image]}
                  alt={activePiece.imageAlt}
                  referrerPolicy="no-referrer"
                  style={{ objectPosition: activePiece.objectPosition }}
                  className="w-full h-full lg:absolute lg:inset-0 object-cover"
                />
              </div>

              <div className="lg:col-span-6 flex flex-col justify-between py-2">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-[#4B6387] mb-3">
                    {activePiece.category}
                    <span className="mx-2" aria-hidden="true">
                      ·
                    </span>
                    <span className="tabular-nums">
                      {String(safeIndex + 1).padStart(2, '0')} /{' '}
                      {String(visiblePieces.length).padStart(2, '0')}
                    </span>
                  </p>

                  <h3 className="font-display text-3xl sm:text-4xl font-normal text-[#002366] mb-4">
                    {activePiece.title}
                  </h3>

                  <p className="text-[#273E63] text-[15px] leading-[1.7] mb-8 max-w-xl">
                    {activePiece.description}
                  </p>

                  <dl className="border-t border-[#002366]/12 divide-y divide-[#002366]/12 mb-8">
                    <div className="py-3 flex items-center justify-between gap-4 text-sm">
                      <dt className="text-[#4B6387] uppercase tracking-[0.14em] text-xs">
                        Spirit Pour
                      </dt>
                      <dd className="text-[#002366] font-medium text-right">
                        {activePiece.specs.spirit}
                      </dd>
                    </div>
                    <div className="py-3 flex items-center justify-between gap-4 text-sm">
                      <dt className="text-[#4B6387] uppercase tracking-[0.14em] text-xs">
                        Glassware
                      </dt>
                      <dd className="text-[#002366] font-medium text-right">
                        {activePiece.specs.glassware}
                      </dd>
                    </div>
                    <div className="py-3 flex items-center justify-between gap-4 text-sm">
                      <dt className="text-[#4B6387] uppercase tracking-[0.14em] text-xs">
                        Ice &amp; Method
                      </dt>
                      <dd className="text-[#002366] font-medium text-right">
                        {activePiece.specs.ice}
                      </dd>
                    </div>
                    <div className="py-3 flex items-center justify-between gap-4 text-sm">
                      <dt className="text-[#4B6387] uppercase tracking-[0.14em] text-xs">
                        Garnish
                      </dt>
                      <dd className="text-[#002366] font-medium text-right">
                        {activePiece.specs.garnish}
                      </dd>
                    </div>
                    <div className="py-3 flex items-center justify-between gap-4 text-sm">
                      <dt className="text-[#4B6387] uppercase tracking-[0.14em] text-xs">
                        Occasion
                      </dt>
                      <dd className="text-[#002366] font-medium text-right">
                        {activePiece.specs.occasion}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onSelectPieceDetails(activePiece)}
                    className="inline-flex items-center justify-center px-6 py-3 text-xs tracking-[0.15em] uppercase font-medium border border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white transition-colors duration-200 whitespace-nowrap cursor-pointer"
                  >
                    See Serve Recipe
                  </button>
                  <button
                    type="button"
                    onClick={() => onAddPieceToViewing(activePiece.title)}
                    className="inline-flex items-center justify-center px-6 py-3 text-xs tracking-[0.15em] uppercase font-medium bg-[#002366] text-white hover:bg-[#001845] transition-colors duration-200 whitespace-nowrap cursor-pointer"
                  >
                    Reserve Tasting
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 pt-6 border-t border-[#002366]/12 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous signature cocktail"
                onClick={() =>
                  setActiveIndex((prev) => prevSlideIndex(prev, visiblePieces.length))
                }
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs tracking-[0.14em] uppercase font-medium border border-[#002366]/25 text-[#002366] hover:border-[#002366] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
              <button
                type="button"
                aria-label="Next signature cocktail"
                onClick={() =>
                  setActiveIndex((prev) => nextSlideIndex(prev, visiblePieces.length))
                }
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs tracking-[0.14em] uppercase font-medium border border-[#002366]/25 text-[#002366] hover:border-[#002366] transition-colors cursor-pointer"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-1" aria-label="Slide pagination">
              {visiblePieces.map((piece, idx) => {
                const isCurrent = idx === safeIndex;
                return (
                  <button
                    key={piece.id}
                    type="button"
                    aria-label={`View slide ${idx + 1}: ${piece.title}`}
                    aria-current={isCurrent ? 'true' : undefined}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-9 h-9 text-xs tabular-nums transition-colors cursor-pointer ${
                      isCurrent
                        ? 'bg-[#002366] text-white font-medium'
                        : 'text-[#4B6387] hover:text-[#002366] hover:bg-[#EAF1F8]'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
