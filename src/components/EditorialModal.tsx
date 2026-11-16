import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import type {
  BottleProduct,
  EditorialStory,
  SignaturePiece,
} from '../data/atelierCatalog';
import { MEDIA_ASSETS } from '../assets/mediaAssets';

export type ModalItem =
  | { type: 'story'; data: EditorialStory }
  | { type: 'piece'; data: SignaturePiece }
  | { type: 'bottle'; data: BottleProduct };

interface EditorialModalProps {
  item: ModalItem | null;
  onClose: () => void;
  onRequestViewing: (title: string) => void;
}

export function EditorialModal({
  item,
  onClose,
  onRequestViewing,
}: EditorialModalProps) {
  useEffect(() => {
    if (!item) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [item, onClose]);

  const getReservationTitle = (current: ModalItem): string => {
    if (current.type === 'bottle') return current.data.fullName;
    return current.data.title;
  };

  return (
    <AnimatePresence>
      {item && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="editorial-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#00102A]/80"
          />

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-3xl bg-white text-[#0A1E42] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close reader"
              className="absolute top-4 right-4 z-20 w-10 h-10 inline-flex items-center justify-center bg-white/95 text-[#002366] hover:bg-[#002366] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto">
              <div
                className={`w-full overflow-hidden ${
                  item.type === 'bottle'
                    ? 'h-[300px] sm:h-[340px] bg-white border-b border-[#E4EBF3] flex items-center justify-center py-6 px-6'
                    : 'aspect-[16/9] bg-[#DCE8F4]'
                }`}
              >
                <img
                  src={MEDIA_ASSETS[item.data.image]}
                  alt={item.data.imageAlt}
                  referrerPolicy="no-referrer"
                  style={
                    item.type !== 'bottle'
                      ? { objectPosition: item.data.objectPosition }
                      : undefined
                  }
                  className={
                    item.type === 'bottle'
                      ? 'max-h-full w-auto object-contain'
                      : 'w-full h-full object-cover'
                  }
                />
              </div>

              <div className="p-6 sm:p-10">
                {item.type === 'story' ? (
                  <>
                    <div className="flex flex-wrap items-center gap-2 text-xs tracking-[0.16em] uppercase text-[#4B6387] mb-3">
                      <span>{item.data.kicker}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.data.location}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.data.readTime}</span>
                    </div>
                    <h3
                      id="editorial-modal-title"
                      className="font-display text-3xl sm:text-4xl font-normal text-[#002366] mb-2"
                    >
                      {item.data.title}
                    </h3>
                    <p className="text-sm text-[#4B6387] mb-6">{item.data.subtitle}</p>
                    <div className="space-y-4 text-[15px] leading-[1.75] text-[#1D3459] mb-8">
                      {item.data.paragraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                    <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#002366]/12 pt-5 mb-8">
                      {item.data.details.map((d) => (
                        <div key={d.label}>
                          <dt className="text-[11px] uppercase tracking-[0.16em] text-[#4B6387] mb-1">
                            {d.label}
                          </dt>
                          <dd className="text-sm font-medium text-[#002366]">
                            {d.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </>
                ) : item.type === 'bottle' ? (
                  <>
                    <div className="flex flex-wrap items-center gap-2 text-xs tracking-[0.16em] uppercase text-[#4B6387] mb-3">
                      <span>{item.data.provenance}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.data.volume}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-medium text-[#002366] tabular-nums">
                        {item.data.priceLabel}
                      </span>
                    </div>
                    <h3
                      id="editorial-modal-title"
                      className="font-display text-3xl sm:text-4xl font-normal text-[#002366] mb-2"
                    >
                      {item.data.fullName}
                    </h3>
                    <p className="text-sm text-[#4B6387] mb-6">{item.data.subtitle}</p>
                    <p className="text-[15px] leading-[1.75] text-[#1D3459] mb-6">
                      {item.data.description}
                    </p>
                    <ul className="space-y-2.5 border-t border-[#002366]/12 pt-5 mb-6 text-sm text-[#273E63]">
                      {item.data.tastingNotes.map((note, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-[#002366] font-medium tabular-nums">
                            0{idx + 1}.
                          </span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                    <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#002366]/12 pt-5 mb-8">
                      {item.data.details.map((d) => (
                        <div key={d.label}>
                          <dt className="text-[11px] uppercase tracking-[0.16em] text-[#4B6387] mb-1">
                            {d.label}
                          </dt>
                          <dd className="text-sm font-medium text-[#002366]">
                            {d.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </>
                ) : (
                  <>
                    <p className="text-xs tracking-[0.18em] uppercase text-[#4B6387] mb-2">
                      {item.data.category}
                      <span className="mx-2" aria-hidden="true">
                        ·
                      </span>
                      {item.data.specs.occasion}
                    </p>
                    <h3
                      id="editorial-modal-title"
                      className="font-display text-3xl sm:text-4xl font-normal text-[#002366] mb-4"
                    >
                      {item.data.title}
                    </h3>
                    <p className="text-[15px] leading-[1.75] text-[#1D3459] mb-6">
                      {item.data.description}
                    </p>
                    <ul className="space-y-2.5 border-t border-[#002366]/12 pt-5 mb-8 text-sm text-[#273E63]">
                      {item.data.notes.map((note, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-[#002366] font-medium tabular-nums">
                            0{idx + 1}.
                          </span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <div className="flex flex-wrap items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 text-xs tracking-[0.15em] uppercase font-medium border border-[#002366]/25 text-[#002366] hover:border-[#002366] transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const title = getReservationTitle(item);
                      onClose();
                      onRequestViewing(title);
                    }}
                    className="px-6 py-2.5 text-xs tracking-[0.15em] uppercase font-medium bg-[#002366] text-white hover:bg-[#001845] transition-colors cursor-pointer"
                  >
                    Reserve Private Tasting
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
