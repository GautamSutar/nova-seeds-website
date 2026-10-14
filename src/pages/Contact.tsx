import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../config';

export default function Contact() {
  const { t } = useTranslation();
  const { isHindi } = useLanguage();

  return (
    <>
      <SEO
        titleHi="संपर्क करें – नोवा सीड्स | Gold Medal 941 पूछताछ"
        titleEn="Contact Us – Nova Seeds | Gold Medal 941 Enquiry"
        descriptionHi="नोवा सीड्स से संपर्क करें। हाइब्रिड सरसों बीज, डीलरशिप या किसी भी सवाल के लिए।"
        descriptionEn="Contact Nova Seeds for hybrid mustard seed enquiries, dealership, or any questions."
        canonical="/contact"
      />

      <div className="pt-16">
        <div className="bg-hero-gradient text-white py-12 px-4">
          <div className="container-lg">
            <h1 className="text-3xl font-bold mb-2">{t('contact.title')}</h1>
            <p className="text-green-200">{t('contact.subtitle')}</p>
          </div>
        </div>

        <div className="container-lg px-4 py-10">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow p-6 sm:p-8">
              <h2 className="text-xl font-bold text-brand-green mb-6">
                {isHindi ? 'संदेश भेजें' : 'Send a Message'}
              </h2>
              <ContactForm type="contact" />
            </div>

            {/* Contact Info */}
            <div className="space-y-5">
              {/* Info cards */}
              <div className="card p-5 flex items-start gap-4 border border-green-100">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-brand-green" />
                </div>
                <div>
                  <div className="font-semibold text-brand-green mb-1">{isHindi ? 'फोन' : 'Phone'}</div>
                  <a href={`tel:${siteConfig.phone}`} className="text-gray-700 hover:text-brand-green text-lg font-medium">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="card p-5 flex items-start gap-4 border border-green-100">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-brand-green" />
                </div>
                <div>
                  <div className="font-semibold text-brand-green mb-1">{isHindi ? 'ईमेल' : 'Email'}</div>
                  <a href={`mailto:${siteConfig.email}`} className="text-gray-700 hover:text-brand-green break-all">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="card p-5 flex items-start gap-4 border border-green-100">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-brand-green" />
                </div>
                <div>
                  <div className="font-semibold text-brand-green mb-1">{t('contact.address')}</div>
                  <p className="text-gray-700">{siteConfig.address}</p>
                  <a
                    href={siteConfig.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-green text-sm hover:underline mt-1 inline-block"
                  >
                    {isHindi ? 'नक्शे पर देखें →' : 'View on Map →'}
                  </a>
                </div>
              </div>

              <div className="card p-5 flex items-start gap-4 border border-green-100">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-brand-green" />
                </div>
                <div>
                  <div className="font-semibold text-brand-green mb-1">{t('contact.workingHours')}</div>
                  <p className="text-gray-700">{siteConfig.workingHours}</p>
                </div>
              </div>

              {/* Google Map placeholder */}
              {siteConfig.googleMapsEmbedUrl ? (
                <div className="rounded-2xl overflow-hidden h-48 shadow">
                  <iframe
                    src={siteConfig.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nova Seeds Location"
                  />
                </div>
              ) : (
                <div className="rounded-2xl bg-gray-100 h-48 flex items-center justify-center text-gray-400 text-sm">
                  <MapPin size={32} className="mr-2" />
                  {isHindi ? 'मानचित्र जल्द उपलब्ध होगा' : 'Map embed coming soon'}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
