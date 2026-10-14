import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

export default function Gallery() {
  const { t } = useTranslation();
  const { isHindi } = useLanguage();

  // Placeholder gallery items – replace with real images
  const PHOTOS = [
    { src: '/images/mustard-field.webp', altHi: 'सरसों का खेत', altEn: 'Mustard field' },
    { src: '/images/product-pack-large.webp', altHi: 'Gold Medal 941 बड़ा पैक', altEn: 'Gold Medal 941 large pack' },
    { src: '/images/product-pack-small.webp', altHi: 'Gold Medal 941 छोटा पैक', altEn: 'Gold Medal 941 small pack' },
  ];

  // Placeholder YouTube video IDs – replace with actual video IDs
  const VIDEOS: string[] = [
    // 'dQw4w9WgXcQ', // example YouTube video ID
  ];

  return (
    <>
      <SEO
        titleHi="गैलरी – नोवा सीड्स | खेत और उत्पाद की तस्वीरें"
        titleEn="Gallery – Nova Seeds | Field and Product Photos"
        descriptionHi="नोवा सीड्स की गैलरी – सरसों के खेत, उत्पाद पैक और वीडियो।"
        descriptionEn="Nova Seeds gallery – mustard field photos, product packs, and videos."
        canonical="/gallery"
      />

      <div className="pt-16">
        <div className="bg-hero-gradient text-white py-12 px-4">
          <div className="container-lg">
            <h1 className="text-3xl font-bold mb-2">{t('gallery.title')}</h1>
            <p className="text-green-200">{t('gallery.subtitle')}</p>
          </div>
        </div>

        <div className="container-lg px-4 py-10 space-y-10">
          {/* Photos */}
          <div>
            <h2 className="section-title mb-4">{isHindi ? 'तस्वीरें' : 'Photos'}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {PHOTOS.map((photo, i) => (
                <div key={i} className="rounded-xl overflow-hidden aspect-square bg-green-100 flex items-center justify-center shadow">
                  <img
                    src={photo.src}
                    alt={isHindi ? photo.altHi : photo.altEn}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="text-gray-400 text-xs text-center p-2">
                    {isHindi ? photo.altHi : photo.altEn}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Videos */}
          {VIDEOS.length > 0 && (
            <div>
              <h2 className="section-title mb-4">{isHindi ? 'वीडियो' : 'Videos'}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {VIDEOS.map((vid) => (
                  <div key={vid} className="rounded-xl overflow-hidden aspect-video shadow">
                    <iframe
                      src={`https://www.youtube.com/embed/${vid}`}
                      title="Nova Seeds Video"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Placeholder note */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-800">
            <strong>Note (remove before launch):</strong> Add real field photos and YouTube video IDs to this page. Replace the placeholder images in <code>/public/images/</code> with actual product and field images in WebP format.
          </div>

          <p className="text-gray-400 text-xs italic text-center">
            {t('footer.imageDisclaimer')}
          </p>
        </div>
      </div>
    </>
  );
}
