import { motion } from 'motion/react';
import { LogIn } from 'lucide-react';
import { BOTTLE_COLLECTION, type BottleProduct } from '../data/atelierCatalog';
import { MEDIA_ASSETS } from '../assets/mediaAssets';

interface BottleCollectionSectionProps {
  onSelectBottle: (bottle: BottleProduct) => void;
}

export function BottleCollectionSection({ onSelectBottle }: BottleCollectionSectionProps) {
  return (
    <section
      id="bottles"
      aria-label="Bulgarian White Horse Vodka Collection"
      className="bg-white py-20 lg:py-24 border-b border-[#002366]/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
          <p className="text-xs tracking-[0.24em] uppercase text-[#4B6387] mb-2">
            The Seven Rila Lakes Collection
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#002366] tracking-[0.02em]">
            Bulgarian White Horse Vodka
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-9">
          {BOTTLE_COLLECTION.map((bottle, idx) => (
            <motion.article
              key={bottle.id}
              initial={{ y: 12 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center group"
            >
              {/* Framed White Studio Bottle Box */}
              <div className="relative w-full aspect-square bg-white border border-[#E4EBF3] flex items-center justify-center p-6 sm:p-8 transition-colors duration-300 group-hover:border-[#002366]/35">
                <img
                  src={MEDIA_ASSETS[bottle.image]}
                  alt={bottle.imageAlt}
                  referrerPolicy="no-referrer"
                  className="max-h-[90%] w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />

                <button
                  type="button"
                  onClick={() => onSelectBottle(bottle)}
                  aria-label={`Inspect ${bottle.fullName}`}
                  className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-[#F2F6FC] border border-[#DCE6F3] text-[#002366] inline-flex items-center justify-center hover:bg-[#002366] hover:text-white hover:border-[#002366] transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002366]"
                >
                  <LogIn className="w-4 h-4" />
                </button>
              </div>

              {/* Centered Serif Product Title */}
              <div className="mt-7 mb-6 min-h-[92px] flex flex-col justify-start items-center">
                {bottle.brandKicker && (
                  <p className="text-[11px] tracking-[0.18em] uppercase font-medium text-[#4B6387] mb-1.5">
                    {bottle.brandKicker}
                  </p>
                )}
                <h3 className="font-display text-[22px] sm:text-[25px] font-normal uppercase tracking-[0.06em] leading-[1.2] text-[#002366]">
                  {bottle.titleLine1}{' '}
                  <br />
                  {bottle.titleLine2}
                </h3>
              </div>

              {/* Centered Rectangular Explore CTA */}
              <button
                type="button"
                onClick={() => onSelectBottle(bottle)}
                aria-label={`Explore ${bottle.fullName}`}
                className="inline-flex items-center justify-center min-w-[154px] px-10 py-3 text-sm font-medium text-[#002366] border border-[#002366] bg-white hover:bg-[#002366] hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#002366]"
              >
                Explore
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
