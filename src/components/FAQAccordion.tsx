import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  id: string;
  questionHi: string;
  questionEn: string;
  answerHi: string;
  answerEn: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const { isHindi } = useLanguage();

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="card border border-green-100 overflow-hidden">
            <button
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-green-50 transition-colors"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              id={`faq-btn-${item.id}`}
            >
              <span className="font-semibold text-brand-green text-base">
                {isHindi ? item.questionHi : item.questionEn}
              </span>
              <ChevronDown
                size={20}
                className={`text-brand-green shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-4 pt-0 text-gray-600 text-base leading-relaxed border-t border-green-100">
                    {isHindi ? item.answerHi : item.answerEn}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
