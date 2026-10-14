import type { ComponentType } from 'react';
import { motion } from 'framer-motion';

interface BenefitCardProps {
  icon: ComponentType<{ size?: number | string; className?: string; strokeWidth?: number | string }>;
  titleHi: string;
  titleEn: string;
  descHi: string;
  descEn: string;
  isHindi: boolean;
  delay?: number;
}

export default function BenefitCard({ icon: Icon, titleHi, titleEn, descHi, descEn, isHindi, delay = 0 }: BenefitCardProps) {
  return (
    <motion.div
      className="card-benefit"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center shadow-sm">
        <Icon size={28} className="text-brand-green" strokeWidth={1.5} />
      </div>
      <h3 className="text-base font-bold text-brand-green">{isHindi ? titleHi : titleEn}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{isHindi ? descHi : descEn}</p>
    </motion.div>
  );
}
