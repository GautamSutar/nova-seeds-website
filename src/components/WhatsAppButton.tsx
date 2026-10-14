import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../config';

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    'नमस्ते, मुझे Gold Medal 941 हाइब्रिड सरसों बीज के बारे में जानकारी चाहिए।'
  );
  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${message}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      id="floating-whatsapp-btn"
      aria-label="Chat on WhatsApp"
      className="whatsapp-fab"
    >
      <MessageCircle size={28} fill="white" strokeWidth={1} />
    </a>
  );
}
