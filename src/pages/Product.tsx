import { useTranslation } from 'react-i18next';
import { MessageCircle, Download, TrendingUp, Shield, Droplets, Sprout, Globe } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../config';
import productData from '../data/product.json';
import heroImage from '../assets/hero.png';

const BENEFITS = [
  { icon: TrendingUp, hi: 'उच्च उपज क्षमता', en: 'High Yield Potential', descHi: 'प्रति एकड़ अधिक पैदावार की संभावना', descEn: 'Better yield per acre potential' },
  { icon: Shield, hi: 'रोग प्रतिरोधक क्षमता', en: 'Disease Tolerance', descHi: 'सामान्य रोगों से बेहतर सुरक्षा', descEn: 'Better protection from common diseases' },
  { icon: Droplets, hi: 'उत्तम तेल प्रतिशत', en: 'Good Oil Percentage', descHi: 'बेहतर गुणवत्ता वाला तेल', descEn: 'Better quality oil content' },
  { icon: Sprout, hi: 'मजबूत पौधा', en: 'Strong Plant', descHi: 'ज़्यादा शाखाएँ, ज़्यादा फसल', descEn: 'More branches, more crop' },
  { icon: Globe, hi: 'विविध मौसम अनुकूल', en: 'Multi-region Suitable', descHi: 'विभिन्न क्षेत्रों के लिए उपयुक्त', descEn: 'Suitable for various agro-climatic regions' },
];

const SPECS = [
  { key: 'sowingTime', labelHi: 'बुआई का समय', labelEn: 'Sowing Time' },
  { key: 'seedRate', labelHi: 'बीज दर', labelEn: 'Seed Rate' },
  { key: 'spacing', labelHi: 'पंक्ति दूरी', labelEn: 'Row Spacing' },
  { key: 'maturity', labelHi: 'परिपक्वता अवधि', labelEn: 'Maturity Days' },
  { key: 'oilContent', labelHi: 'तेल प्रतिशत', labelEn: 'Oil Content' },
  { key: 'yieldPotential', labelHi: 'उपज क्षमता', labelEn: 'Yield Potential' },
  { key: 'packSizes', labelHi: 'पैक साइज़', labelEn: 'Pack Sizes' },
] as const;

type SpecKey = typeof SPECS[number]['key'];

const CULTIVATION_STEPS_HI = [
  { title: 'खेत तैयार करें', desc: 'खेत को अच्छी तरह जोतें और मिट्टी भुरभुरी बनाएँ।' },
  { title: 'बुआई करें', desc: 'सही समय पर उचित दूरी पर बीज बोएँ।' },
  { title: 'सिंचाई', desc: 'जरूरत के अनुसार सिंचाई करें।' },
  { title: 'खाद और उर्वरक', desc: 'मिट्टी परीक्षण के आधार पर उचित खाद दें।' },
  { title: 'कटाई', desc: 'फलियाँ पकने पर कटाई करें।' },
];
const CULTIVATION_STEPS_EN = [
  { title: 'Prepare the Field', desc: 'Plough the field well and make the soil fine and crumbly.' },
  { title: 'Sowing', desc: 'Sow seeds at the right time with proper spacing.' },
  { title: 'Irrigation', desc: 'Irrigate as per crop requirement.' },
  { title: 'Fertilizers', desc: 'Apply fertilizers based on soil test results.' },
  { title: 'Harvesting', desc: 'Harvest when pods are mature.' },
];

export default function Product() {
  const { t } = useTranslation();
  const { isHindi } = useLanguage();
  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('नमस्ते, Gold Medal 941 के लिए ऑर्डर करना है।')}`;

  return (
    <>
      <SEO
        titleHi="Gold Medal 941 हाइब्रिड सरसों बीज – नोवा सीड्स | विशेषताएँ और फायदे"
        titleEn="Gold Medal 941 Hybrid Mustard Seeds – Nova Seeds | Features & Benefits"
        descriptionHi="नोवा सीड्स Gold Medal 941 हाइब्रिड सरसों बीज की विशेषताएँ, फायदे और खेती गाइड।"
        descriptionEn="Nova Seeds Gold Medal 941 hybrid mustard seeds – specifications, benefits, and cultivation guide."
        canonical="/product"
      />

      <div className="pt-16">
        {/* Hero strip */}
        <div className="bg-hero-gradient text-white py-12 px-4">
          <div className="container-lg">
            <div className="badge-gold mb-3 inline-flex">⭐ Gold Medal 941</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              {isHindi ? productData.nameHi : productData.nameEn}
            </h1>
            <p className="text-green-200">{isHindi ? 'नोवा रिसर्च एंड हाइब्रिड सीड्स' : 'Nova Research & Hybrid Seeds'}</p>
          </div>
        </div>

        <div className="container-lg px-4 py-10 space-y-12">
          {/* Product Visual + Actions */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Pack visual */}
            <div>
              <div className="flex justify-center">
                <img
                  src={heroImage}
                  alt="Gold Medal 941 Hybrid Mustard Seeds – Nova Seeds"
                  className="w-full max-w-sm rounded-3xl shadow-xl object-contain drop-shadow-md border-2 border-brand-mustard/40"
                />
              </div>
              <p className="text-center text-gray-400 text-xs mt-3 italic">{t('product.imageDisclaimer')}</p>
            </div>

            {/* Actions + description */}
            <div>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {t('product.description')}
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="product-wa-btn"
                  className="btn-whatsapp w-full"
                >
                  <MessageCircle size={18} />
                  {t('product.orderWhatsApp')}
                </a>
                <button
                  id="product-enquire-btn"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary w-full"
                >
                  {t('product.enquireNow')}
                </button>
                {/* Brochure placeholder */}
                <button
                  id="product-brochure-btn"
                  className="btn-outline w-full opacity-50 cursor-not-allowed"
                  title="Brochure coming soon"
                  disabled
                >
                  <Download size={18} />
                  {t('product.downloadBrochure')} (Coming Soon)
                </button>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="section-title">{t('benefits.title')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {BENEFITS.map((b) => (
                <div key={b.en} className="card p-5 flex items-start gap-4 border border-green-100">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                    <b.icon size={22} className="text-brand-green" />
                  </div>
                  <div>
                    <div className="font-bold text-brand-green">{isHindi ? b.hi : b.en}</div>
                    <div className="text-gray-500 text-sm mt-1">{isHindi ? b.descHi : b.descEn}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications Table */}
          <div>
            <h2 className="section-title">{t('product.specs')}</h2>
            {/* NOTE TO DEVELOPER: All values below are placeholders. Replace with actual company data before launch. */}
            <div className="overflow-x-auto rounded-2xl shadow">
              <table className="w-full text-base">
                <thead>
                  <tr className="bg-brand-green text-white">
                    <th className="px-4 py-3 text-left font-semibold">
                      {isHindi ? 'विशेषता' : 'Specification'}
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      {isHindi ? 'मूल्य' : 'Value'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SPECS.map((spec, i) => {
                    const specData = productData.specs[spec.key as SpecKey];
                    return (
                      <tr key={spec.key} className={i % 2 === 0 ? 'bg-white' : 'bg-green-50'}>
                        <td className="px-4 py-3 font-medium text-brand-green">
                          {isHindi ? spec.labelHi : spec.labelEn}
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          {isHindi ? specData.hi : specData.en}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 text-xs mt-2 italic">
              {isHindi
                ? '* सभी मूल्य अनुमानित हैं। कंपनी से पुष्टि करें।'
                : '* All values are indicative. Please confirm with the company.'}
            </p>
          </div>

          {/* Cultivation Guide */}
          <div className="bg-green-50 rounded-2xl p-6">
            <h2 className="section-title">{t('product.cultivationGuide')}</h2>
            <p className="text-gray-500 mb-6">
              {isHindi
                ? 'सरसों की खेती के लिए सामान्य दिशा-निर्देश'
                : 'General guidelines for mustard cultivation'}
            </p>
            <div className="space-y-4">
              {(isHindi ? CULTIVATION_STEPS_HI : CULTIVATION_STEPS_EN).map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center font-bold shrink-0 text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-brand-green">{step.title}</div>
                    <div className="text-gray-600 text-sm">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-4 italic">
              {isHindi
                ? '* सटीक जानकारी के लिए कृषि विशेषज्ञ से सलाह लें।'
                : '* Consult your local agricultural expert for exact guidance.'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
