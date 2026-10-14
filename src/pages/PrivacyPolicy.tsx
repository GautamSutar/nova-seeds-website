import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

// NOTE: Get this reviewed by a legal professional before launch.
// The content below covers requirements under India's Digital Personal Data Protection Act, 2023 and IT Act, 2000.

export default function PrivacyPolicy() {
  const { isHindi } = useLanguage();
  const effectiveDate = '1 January 2024'; // Update before launch

  if (isHindi) {
    return (
      <>
        <SEO
          titleHi="गोपनीयता नीति – नोवा सीड्स"
          titleEn="Privacy Policy – Nova Seeds"
          descriptionHi="नोवा सीड्स की गोपनीयता नीति – जानें हम आपकी जानकारी कैसे एकत्र, उपयोग और सुरक्षित करते हैं।"
          descriptionEn="Nova Seeds Privacy Policy – how we collect, use and protect your information."
          canonical="/privacy-policy"
        />
        <div className="pt-16">
          <div className="bg-hero-gradient text-white py-12 px-4">
            <div className="container-lg">
              <h1 className="text-3xl font-bold">गोपनीयता नीति</h1>
              <p className="text-green-200 mt-1">प्रभावी तिथि: {effectiveDate}</p>
            </div>
          </div>
          <div className="container-lg px-4 py-10 max-w-4xl prose prose-green text-gray-700 space-y-6">
            <p>नोवा सीड्स (नोवा रिसर्च एंड हाइब्रिड सीड्स) आपकी गोपनीयता का सम्मान करती है। यह नीति बताती है कि हम आपकी व्यक्तिगत जानकारी कैसे एकत्र, उपयोग और सुरक्षित करते हैं।</p>

            <h2 className="text-xl font-bold text-brand-green">1. हम कौन सी जानकारी एकत्र करते हैं?</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>नाम, मोबाइल नंबर, ईमेल पता</li>
              <li>राज्य, ज़िला, शहर और पता</li>
              <li>संपर्क फॉर्म, डीलर फॉर्म में दिए गए संदेश</li>
              <li>डिवाइस/ब्राउज़र की जानकारी, IP पता</li>
              <li>कुकीज़ और विश्लेषण डेटा (केवल आपकी सहमति के बाद)</li>
            </ul>

            <h2 className="text-xl font-bold text-brand-green">2. जानकारी कैसे एकत्र होती है?</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>संपर्क फॉर्म और डीलर आवेदन फॉर्म के माध्यम से</li>
              <li>WhatsApp या कॉल लिंक पर क्लिक करने से</li>
              <li>कुकीज़ और Google Analytics के माध्यम से</li>
            </ul>

            <h2 className="text-xl font-bold text-brand-green">3. जानकारी का उपयोग</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>आपकी पूछताछ का जवाब देने के लिए</li>
              <li>किसानों को अधिकृत डीलरों से जोड़ने के लिए</li>
              <li>वेबसाइट और उत्पादों को बेहतर बनाने के लिए</li>
              <li>केवल आपकी सहमति से उत्पाद अपडेट भेजने के लिए</li>
              <li>कानूनी अनुपालन के लिए</li>
            </ul>

            <h2 className="text-xl font-bold text-brand-green">4. कानूनी आधार</h2>
            <p>हम भारत के डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम, 2023 और सूचना प्रौद्योगिकी अधिनियम, 2000 के अनुसार आपकी जानकारी संसाधित करते हैं। आपकी सहमति हमारी प्राथमिक कानूनी आधार है।</p>

            <h2 className="text-xl font-bold text-brand-green">5. जानकारी साझाकरण</h2>
            <p>हम आपकी व्यक्तिगत जानकारी कभी नहीं बेचते। हम केवल अधिकृत डीलरों और सेवा प्रदाताओं के साथ, जब आवश्यक हो, जानकारी साझा कर सकते हैं।</p>

            <h2 className="text-xl font-bold text-brand-green">6. कुकीज़ और Analytics</h2>
            <p>हम Google Analytics का उपयोग करते हैं, जो कुकीज़ के माध्यम से डेटा एकत्र करता है। यह केवल आपकी सहमति के बाद सक्रिय होता है। आप अपने ब्राउज़र सेटिंग में कुकीज़ बंद कर सकते हैं।</p>

            <h2 className="text-xl font-bold text-brand-green">7. डेटा सुरक्षा</h2>
            <p>हम HTTPS एन्क्रिप्शन और प्रतिबंधित एक्सेस नियंत्रण के माध्यम से आपके डेटा की सुरक्षा करते हैं। हालांकि, इंटरनेट पर 100% सुरक्षा की गारंटी नहीं दी जा सकती।</p>

            <h2 className="text-xl font-bold text-brand-green">8. आपके अधिकार</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>अपनी जानकारी तक पहुँच का अधिकार</li>
              <li>गलत जानकारी को सुधरवाने का अधिकार</li>
              <li>अपनी जानकारी हटाने का अनुरोध करने का अधिकार</li>
              <li>सहमति वापस लेने का अधिकार</li>
              <li>शिकायत करने का अधिकार</li>
            </ul>

            <h2 className="text-xl font-bold text-brand-green">9. बच्चों की गोपनीयता</h2>
            <p>हमारी वेबसाइट 18 वर्ष से कम आयु के बच्चों के लिए नहीं है। हम जानबूझकर बच्चों की जानकारी एकत्र नहीं करते।</p>

            <h2 className="text-xl font-bold text-brand-green">10. तृतीय-पक्ष लिंक</h2>
            <p>हमारी वेबसाइट पर WhatsApp, Google Maps और YouTube के लिंक हो सकते हैं। इनकी अपनी गोपनीयता नीतियाँ हैं जिनके लिए हम ज़िम्मेदार नहीं हैं।</p>

            <h2 className="text-xl font-bold text-brand-green">11. शिकायत अधिकारी (Grievance Officer)</h2>
            <p>
              नाम: Pravesh Khandelwal<br />
              ईमेल: <a href="mailto:novaseeds@hotmail.com" className="text-brand-green hover:underline">novaseeds@hotmail.com</a><br />
              फोन: <a href="tel:+91-9026215560" className="text-brand-green hover:underline">+91-9026215560</a><br />
              पता: 184/1 Shiv Vihar, Road No. 5, V.K.I.A, Jaipur, Rajasthan<br />
              <em>आपकी शिकायत 30 दिनों के भीतर हल की जाएगी।</em>
            </p>

            <h2 className="text-xl font-bold text-brand-green">12. नीति में बदलाव</h2>
            <p>हम इस नीति को समय-समय पर अपडेट कर सकते हैं। बड़े बदलावों की सूचना वेबसाइट पर दी जाएगी।</p>

          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        titleHi="गोपनीयता नीति – नोवा सीड्स"
        titleEn="Privacy Policy – Nova Seeds"
        descriptionHi="नोवा सीड्स की गोपनीयता नीति।"
        descriptionEn="Nova Seeds Privacy Policy – how we collect, use and protect your information."
        canonical="/privacy-policy"
      />
      <div className="pt-16">
        <div className="bg-hero-gradient text-white py-12 px-4">
          <div className="container-lg">
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
            <p className="text-green-200 mt-1">Effective Date: {effectiveDate}</p>
          </div>
        </div>
        <div className="container-lg px-4 py-10 max-w-4xl prose prose-green text-gray-700 space-y-6">
          <p>Nova Seeds (Nova Research & Hybrid Seeds) respects your privacy. This policy explains how we collect, use, and protect your personal information.</p>

          <h2 className="text-xl font-bold text-brand-green">1. What Information We Collect</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Name, mobile number, email address</li>
            <li>State, district, city, and address</li>
            <li>Messages submitted through contact or dealer forms</li>
            <li>Device/browser information, IP address</li>
            <li>Cookies and analytics data (only after your consent)</li>
          </ul>

          <h2 className="text-xl font-bold text-brand-green">2. How We Collect Information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Through contact forms and dealer application forms</li>
            <li>When you click on WhatsApp or call links</li>
            <li>Through cookies and Google Analytics</li>
          </ul>

          <h2 className="text-xl font-bold text-brand-green">3. Purpose of Use</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To respond to your enquiries</li>
            <li>To connect farmers with authorized dealers</li>
            <li>To improve our website and products</li>
            <li>To send product updates only with your consent</li>
            <li>For legal compliance</li>
          </ul>

          <h2 className="text-xl font-bold text-brand-green">4. Legal Basis and Consent</h2>
          <p>We process your information in accordance with India's Digital Personal Data Protection Act, 2023 (DPDP Act) and the Information Technology Act, 2000. Your consent is our primary legal basis for processing.</p>

          <h2 className="text-xl font-bold text-brand-green">5. Sharing of Information</h2>
          <p>We never sell your personal data. We may share information only with authorized dealers and service providers when necessary for the purposes described above.</p>

          <h2 className="text-xl font-bold text-brand-green">6. Cookies & Analytics</h2>
          <p>We use Google Analytics which collects data through cookies. Analytics are activated only after your explicit consent via the cookie banner. You can also disable cookies in your browser settings.</p>

          <h2 className="text-xl font-bold text-brand-green">7. Data Security</h2>
          <p>We protect your data using HTTPS encryption and restricted access controls. However, no system can guarantee 100% security over the internet.</p>

          <h2 className="text-xl font-bold text-brand-green">8. Data Retention</h2>
          <p>We retain your data only as long as necessary to fulfil the purposes for which it was collected, or as required by law.</p>

          <h2 className="text-xl font-bold text-brand-green">9. Your Rights</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Right to access your personal data</li>
            <li>Right to correct inaccurate data</li>
            <li>Right to request deletion of your data</li>
            <li>Right to withdraw consent at any time</li>
            <li>Right to lodge a complaint</li>
          </ul>

          <h2 className="text-xl font-bold text-brand-green">10. Children's Privacy</h2>
          <p>Our website is not intended for children under 18 years of age. We do not knowingly collect information from children.</p>

          <h2 className="text-xl font-bold text-brand-green">11. Third-Party Links</h2>
          <p>Our website may contain links to WhatsApp, Google Maps, and YouTube. These have their own privacy policies for which we are not responsible.</p>

          <h2 className="text-xl font-bold text-brand-green">12. Grievance Officer</h2>
          <p>
            Name: Pravesh Khandelwal<br />
            Email: <a href="mailto:novaseeds@hotmail.com" className="text-brand-green hover:underline">novaseeds@hotmail.com</a><br />
            Phone: <a href="tel:+91-9026215560" className="text-brand-green hover:underline">+91-9026215560</a><br />
            Address: 184/1 Shiv Vihar, Road No. 5, V.K.I.A, Jaipur, Rajasthan<br />
            <em>Your grievance will be addressed within 30 days.</em>
          </p>

          <h2 className="text-xl font-bold text-brand-green">13. Policy Updates</h2>
          <p>We may update this policy from time to time. Material changes will be notified on the website. Continued use of the website after changes constitutes acceptance of the updated policy.</p>

          <p className="text-sm text-gray-500">For any privacy-related concerns, contact us at: {' '}
            <a href="mailto:novaseeds@hotmail.com" className="text-brand-green hover:underline">novaseeds@hotmail.com</a>
          </p>

        </div>
      </div>
    </>
  );
}
