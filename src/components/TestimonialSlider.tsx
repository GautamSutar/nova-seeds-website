import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: string;
  nameHi: string;
  nameEn: string;
  locationHi: string;
  locationEn: string;
  textHi: string;
  textEn: string;
  rating: number;
}

export default function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const [idx, setIdx] = useState(0);
  const { isHindi } = useLanguage();
  const item = items[idx];

  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);
  const next = () => setIdx((i) => (i + 1) % items.length);

  return (
    <div className="relative max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center"
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: item.rating }).map((_, i) => (
              <Star key={i} size={18} className="text-brand-mustard" fill="#F9A825" />
            ))}
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
            "{isHindi ? item.textHi : item.textEn}"
          </p>
          <div className="font-bold text-brand-green">
            {isHindi ? item.nameHi : item.nameEn}
          </div>
          <div className="text-gray-400 text-sm">
            {isHindi ? item.locationHi : item.locationEn}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Nav */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          aria-label="Previous"
          className="w-10 h-10 rounded-full bg-green-100 hover:bg-brand-green hover:text-white flex items-center justify-center transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === idx ? 'bg-brand-green w-6' : 'bg-green-200'}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next"
          className="w-10 h-10 rounded-full bg-green-100 hover:bg-brand-green hover:text-white flex items-center justify-center transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
