import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

// NOTE: Get this reviewed by a legal professional before launch.

export default function Terms() {
  const { isHindi } = useLanguage();

  const content = {
    hi: {
      title: 'नियम और शर्तें',
      sections: [
        {
          heading: '1. स्वीकृति',
          text: 'नोवा सीड्स की वेबसाइट का उपयोग करके आप इन नियमों और शर्तों को स्वीकार करते हैं।',
        },
        {
          heading: '2. जानकारी की सटीकता',
          text: 'इस वेबसाइट पर दी गई जानकारी केवल सामान्य जानकारी के लिए है। फसल उपज, मौसम और परिस्थितियों के आधार पर बदल सकती है। हम किसी भी दावे की गारंटी नहीं देते।',
        },
        {
          heading: '3. उत्पाद जानकारी',
          text: 'उत्पाद विशेषताएँ, बीज दर और उपज क्षमता मिट्टी, मौसम, सिंचाई और खेती की पद्धतियों पर निर्भर करती है। कंपनी से नवीनतम जानकारी प्राप्त करें।',
        },
        {
          heading: '4. छवि अस्वीकरण',
          text: 'वेबसाइट पर दी गई सभी छवियाँ केवल उदाहरण के लिए हैं। वास्तविक पैकेजिंग भिन्न हो सकती है।',
        },
        {
          heading: '5. बौद्धिक संपदा',
          text: 'नोवा सीड्स के लोगो, ब्रांड नाम और सामग्री कॉपीराइट द्वारा सुरक्षित हैं।',
        },
        {
          heading: '6. बाहरी लिंक',
          text: 'हमारी वेबसाइट पर तृतीय-पक्ष वेबसाइटों के लिंक हो सकते हैं। उनकी सामग्री के लिए हम ज़िम्मेदार नहीं हैं।',
        },
        {
          heading: '7. देयता सीमा',
          text: 'नोवा सीड्स वेबसाइट के उपयोग से होने वाले किसी भी प्रत्यक्ष या अप्रत्यक्ष नुकसान के लिए ज़िम्मेदार नहीं है।',
        },
        {
          heading: '8. लागू कानून',
          text: 'ये नियम भारत के कानून के अनुसार हैं। किसी भी विवाद में भारतीय न्यायालयों का अधिकार क्षेत्र लागू होगा।',
        },
        {
          heading: '9. बदलाव',
          text: 'हम इन नियमों को बिना पूर्व सूचना के बदल सकते हैं।',
        },
      ],
    },
    en: {
      title: 'Terms & Conditions',
      sections: [
        {
          heading: '1. Acceptance',
          text: 'By using the Nova Seeds website, you accept these Terms & Conditions.',
        },
        {
          heading: '2. Information Accuracy',
          text: 'Information on this website is for general purposes only. Crop yields may vary based on soil, weather, and farming practices. We do not guarantee any claims.',
        },
        {
          heading: '3. Product Information',
          text: 'Product specifications, seed rates, and yield potential depend on soil, weather, irrigation, and farming practices. Contact the company for the latest information.',
        },
        {
          heading: '4. Image Disclaimer',
          text: 'All images on this website are for illustrative purposes only. Actual packaging may vary.',
        },
        {
          heading: '5. Intellectual Property',
          text: 'Nova Seeds logos, brand names, and website content are protected by copyright.',
        },
        {
          heading: '6. External Links',
          text: 'Our website may contain links to third-party websites. We are not responsible for their content or privacy practices.',
        },
        {
          heading: '7. Limitation of Liability',
          text: 'Nova Seeds is not liable for any direct or indirect losses arising from the use of this website.',
        },
        {
          heading: '8. Governing Law',
          text: 'These terms are governed by the laws of India. Indian courts shall have exclusive jurisdiction for any disputes.',
        },
        {
          heading: '9. Changes',
          text: 'We may update these terms at any time without prior notice.',
        },
      ],
    },
  };

  const lang = isHindi ? content.hi : content.en;

  return (
    <>
      <SEO
        titleHi="नियम और शर्तें – नोवा सीड्स"
        titleEn="Terms & Conditions – Nova Seeds"
        descriptionHi="नोवा सीड्स वेबसाइट के नियम और शर्तें।"
        descriptionEn="Nova Seeds website Terms & Conditions."
        canonical="/terms"
      />
      <div className="pt-16">
        <div className="bg-hero-gradient text-white py-12 px-4">
          <div className="container-lg">
            <h1 className="text-3xl font-bold">{lang.title}</h1>
          </div>
        </div>
        <div className="container-lg px-4 py-10 max-w-4xl space-y-6 text-gray-700">
          {lang.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-lg font-bold text-brand-green mb-2">{s.heading}</h2>
              <p className="leading-relaxed">{s.text}</p>
            </div>
          ))}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-800">
            <strong>Note (remove before launch):</strong> Get this reviewed by a legal professional before launch.
          </div>
        </div>
      </div>
    </>
  );
}
