import { Phone, MapPin, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';

interface DealerCardProps {
  dealer: {
    id: string;
    name: string;
    name_hi?: string;
    address: string;
    address_hi?: string;
    phone: string;
    state: string;
    state_hi?: string;
    district: string;
    district_hi?: string;
    city: string;
    city_hi?: string;
    lat?: number;
    lng?: number;
  };
}

export default function DealerCard({ dealer }: DealerCardProps) {
  const { t } = useTranslation();
  const { isHindi } = useLanguage();
  const mapsLink = dealer.lat && dealer.lng
    ? `https://maps.google.com/?q=${dealer.lat},${dealer.lng}`
    : `https://maps.google.com/?q=${encodeURIComponent(dealer.address)}`;

  return (
    <div className="card p-5 border border-green-100 hover:border-brand-mustard hover:shadow-lg transition-all">
      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className="font-bold text-brand-green text-lg leading-tight">
          {isHindi && dealer.name_hi ? dealer.name_hi : dealer.name}
        </h3>
        <span
          className="flex items-center gap-1 shrink-0 text-[10px] font-semibold text-brand-green bg-green-50 px-2 py-1 rounded-full"
          title={t('dealers.verified')}
        >
          <ShieldCheck size={12} />
        </span>
      </div>
      <div className="text-xs font-medium text-gray-400 mb-2">
        {isHindi && dealer.city_hi ? dealer.city_hi : dealer.city}
        {dealer.district && dealer.district !== dealer.city && (
          <> · {isHindi && dealer.district_hi ? dealer.district_hi : dealer.district}</>
        )}
      </div>
      <div className="flex items-start gap-1.5 text-gray-500 text-sm mb-4">
        <MapPin size={14} className="text-brand-mustard mt-0.5 shrink-0" />
        <span>{isHindi && dealer.address_hi ? dealer.address_hi : dealer.address}</span>
      </div>
      <div className="flex gap-2 flex-wrap">
        <a
          href={`tel:${dealer.phone}`}
          id={`dealer-call-${dealer.id}`}
          className="btn-primary !py-2 !px-4 !text-sm !min-h-[40px] flex-1 sm:flex-none"
        >
          <Phone size={14} />
          {t('dealers.call')}
        </a>
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          id={`dealer-dir-${dealer.id}`}
          className="btn-outline !py-2 !px-4 !text-sm !min-h-[40px] flex-1 sm:flex-none"
        >
          <MapPin size={14} />
          {t('dealers.directions')}
        </a>
      </div>
    </div>
  );
}
