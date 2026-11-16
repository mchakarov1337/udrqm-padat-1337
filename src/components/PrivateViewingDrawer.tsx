import { useEffect, useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, CheckCircle2 } from 'lucide-react';
import { validateInquiryForm } from '../utils/catalogLogic';

interface PrivateViewingDrawerProps {
  open: boolean;
  selectedTitles: string[];
  onRemoveTitle: (title: string) => void;
  onClearAll: () => void;
  onClose: () => void;
}

const SALON_LOCATIONS = [
  'Rila Mountain Distillery, Sapareva Banya',
  'Sofia Private Tasting Salon, Oborishte',
  'Paris Flagship Preview, Rue Saint-Honoré',
];

export function PrivateViewingDrawer({
  open,
  selectedTitles,
  onRemoveTitle,
  onClearAll,
  onClose,
}: PrivateViewingDrawerProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [salon, setSalon] = useState(SALON_LOCATIONS[0]);
  const [errors, setErrors] = useState<{ name?: string; email?: string; salon?: string }>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = validateInquiryForm({ name, email, salon });
    if (!result.valid) {
      setErrors(result.errors);
      return;
    }
    setErrors({});
    setSubmittedRef(`BWH-${Math.floor(1000 + Math.random() * 9000)}`);
    onClearAll();
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setName('');
    setEmail('');
    setErrors({});
  };

  return (
    <AnimatePresence>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="viewing-drawer-title"
          className="fixed inset-0 z-50 flex justify-end"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#00102A]/75"
          />

          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-md bg-white text-[#0A1E42] h-full shadow-2xl flex flex-col justify-between overflow-y-auto"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-[#002366]/12 pb-5 mb-6">
                <div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-[#4B6387]">
                    Bulgarian White Horse Concierge
                  </p>
                  <h2
                    id="viewing-drawer-title"
                    className="font-display text-3xl font-normal text-[#002366]"
                  >
                    Private Tasting
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close private tasting drawer"
                  className="w-10 h-10 inline-flex items-center justify-center text-[#002366] hover:bg-[#EAF1F8] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submittedRef ? (
                <div className="py-8 space-y-5">
                  <div className="flex items-center gap-3 text-[#002366]">
                    <CheckCircle2 className="w-6 h-6 shrink-0" />
                    <h3 className="font-display text-2xl font-normal">
                      Tasting Requested
                    </h3>
                  </div>
                  <p className="text-sm text-[#273E63] leading-relaxed">
                    Thank you, <span className="font-medium text-[#002366]">{name}</span>.
                    Our sommelier at <span className="font-medium">{salon}</span> will confirm
                    your private Bulgarian White Horse tasting shortly via{' '}
                    <span className="font-medium">{email}</span>.
                  </p>
                  <p className="text-xs tracking-[0.14em] uppercase text-[#4B6387] border-t border-b border-[#002366]/12 py-3 tabular-nums">
                    Reference: {submittedRef}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      handleReset();
                      onClose();
                    }}
                    className="w-full py-3 px-6 text-xs tracking-[0.16em] uppercase font-medium bg-[#002366] text-white hover:bg-[#001845] transition-colors cursor-pointer"
                  >
                    Return to Bulgarian White Horse
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xs tracking-[0.16em] uppercase font-medium text-[#4B6387]">
                        Selected Expressions ({selectedTitles.length})
                      </h3>
                      {selectedTitles.length > 0 && (
                        <button
                          type="button"
                          onClick={onClearAll}
                          className="text-xs text-[#4B6387] hover:text-[#002366] underline cursor-pointer"
                        >
                          Clear all
                        </button>
                      )}
                    </div>

                    {selectedTitles.length === 0 ? (
                      <p className="text-sm text-[#4B6387] bg-[#F4F7FB] p-4 border border-[#002366]/10">
                        No bottles or cocktails selected yet. Add any Bulgarian White Horse expression to reserve it for your flight, or book a general tasting below.
                      </p>
                    ) : (
                      <ul className="divide-y divide-[#002366]/12 border-t border-b border-[#002366]/12">
                        {selectedTitles.map((title) => (
                          <li
                            key={title}
                            className="py-3 flex items-center justify-between gap-3 text-sm"
                          >
                            <span className="font-medium text-[#002366]">{title}</span>
                            <button
                              type="button"
                              onClick={() => onRemoveTitle(title)}
                              aria-label={`Remove ${title} from selection`}
                              className="p-1.5 text-[#4B6387] hover:text-[#002366] transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div>
                      <label
                        htmlFor="viewing-name"
                        className="block text-xs tracking-[0.14em] uppercase font-medium text-[#273E63] mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        id="viewing-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Elena Georgieva"
                        className="w-full px-3.5 py-2.5 text-sm border border-[#002366]/25 focus:border-[#002366] focus:outline-none bg-white"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-700" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="viewing-email"
                        className="block text-xs tracking-[0.14em] uppercase font-medium text-[#273E63] mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        id="viewing-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="elena@example.com"
                        className="w-full px-3.5 py-2.5 text-sm border border-[#002366]/25 focus:border-[#002366] focus:outline-none bg-white"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-700" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="viewing-salon"
                        className="block text-xs tracking-[0.14em] uppercase font-medium text-[#273E63] mb-2"
                      >
                        Tasting Location
                      </label>
                      <select
                        id="viewing-salon"
                        value={salon}
                        onChange={(e) => setSalon(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm border border-[#002366]/25 focus:border-[#002366] focus:outline-none bg-white"
                      >
                        {SALON_LOCATIONS.map((loc) => (
                          <option key={loc} value={loc}>
                            {loc}
                          </option>
                        ))}
                      </select>
                      {errors.salon && (
                        <p className="mt-1.5 text-xs text-red-700" role="alert">
                          {errors.salon}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 text-xs tracking-[0.16em] uppercase font-medium bg-[#002366] text-white hover:bg-[#001845] transition-colors cursor-pointer"
                    >
                      Confirm Tasting Request
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
