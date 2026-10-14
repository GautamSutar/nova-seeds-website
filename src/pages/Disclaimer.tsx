import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

// NOTE: Get this reviewed by a legal professional before launch.

export default function Disclaimer() {
  const { isHindi } = useLanguage();

  return (
    <>
      <SEO
        titleHi="अस्वीकरण – नोवा सीड्स"
        titleEn="Disclaimer – Nova Seeds"
        descriptionHi="नोवा सीड्स अस्वीकरण – फसल उपज मिट्टी, मौसम और खेती पद्धतियों पर निर्भर करती है।"
        descriptionEn="Nova Seeds Disclaimer – crop yield depends on soil, weather, and farming practices."
        canonical="/disclaimer"
      />
      <div className="pt-16">
        <div className="bg-hero-gradient text-white py-12 px-4">
          <div className="container-lg">
            <h1 className="text-3xl font-bold">
              {isHindi ? 'अस्वीकरण' : 'Disclaimer'}
            </h1>
          </div>
        </div>
        <div className="container-lg px-4 py-10 max-w-4xl space-y-5 text-gray-700">
          {isHindi ? (
            <>
              <p className="leading-relaxed">
                नोवा सीड्स (नोवा रिसर्च एंड हाइब्रिड सीड्स) द्वारा इस वेबसाइट पर दी गई जानकारी केवल सामान्य जानकारी के उद्देश्य से है।
              </p>
              <h2 className="text-lg font-bold text-brand-green">फसल उपज अस्वीकरण</h2>
              <p className="leading-relaxed">
                फसल की उपज मिट्टी की गुणवत्ता, मौसम की परिस्थितियाँ, सिंचाई, उर्वरक उपयोग, खेती की पद्धतियाँ और किसान के अनुभव पर निर्भर करती है। इस वेबसाइट पर दी गई कोई भी जानकारी किसी विशेष उपज की गारंटी नहीं है।
              </p>
              <h2 className="text-lg font-bold text-brand-green">कृषि सलाह अस्वीकरण</h2>
              <p className="leading-relaxed">
                इस वेबसाइट पर दी गई खेती संबंधी जानकारी सामान्य मार्गदर्शन के लिए है। अपने क्षेत्र की विशेष परिस्थितियों के लिए कृपया अपने स्थानीय कृषि विभाग या कृषि विशेषज्ञ से सलाह लें।
              </p>
              <h2 className="text-lg font-bold text-brand-green">छवि अस्वीकरण</h2>
              <p className="leading-relaxed">
                इस वेबसाइट पर दी गई सभी छवियाँ केवल उदाहरण के लिए हैं। वास्तविक उत्पाद पैकेजिंग भिन्न हो सकती है।
              </p>
              <h2 className="text-lg font-bold text-brand-green">उपलब्धता</h2>
              <p className="leading-relaxed">
                उत्पाद की उपलब्धता क्षेत्र और मौसम के अनुसार बदल सकती है। नवीनतम जानकारी के लिए अपने नज़दीकी डीलर से संपर्क करें।
              </p>
            </>
          ) : (
            <>
              <p className="leading-relaxed">
                Information provided by Nova Seeds (Nova Research & Hybrid Seeds) on this website is for general informational purposes only.
              </p>
              <h2 className="text-lg font-bold text-brand-green">Crop Yield Disclaimer</h2>
              <p className="leading-relaxed">
                Crop yields depend on soil quality, weather conditions, irrigation, fertilizer use, farming practices, and the farmer's experience. No information on this website constitutes a guarantee of any specific yield.
              </p>
              <h2 className="text-lg font-bold text-brand-green">Agricultural Advice Disclaimer</h2>
              <p className="leading-relaxed">
                Farming information on this website is for general guidance only. For conditions specific to your region, please consult your local agricultural department or agronomist.
              </p>
              <h2 className="text-lg font-bold text-brand-green">Image Disclaimer</h2>
              <p className="leading-relaxed">
                All images on this website are for illustration purposes only. Actual product packaging may differ.
              </p>
              <h2 className="text-lg font-bold text-brand-green">Product Availability</h2>
              <p className="leading-relaxed">
                Product availability may vary by region and season. Contact your nearest dealer for the latest information.
              </p>
            </>
          )}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-800">
            <strong>Note (remove before launch):</strong> Get this reviewed by a legal professional before launch.
          </div>
        </div>
      </div>
    </>
  );
}
