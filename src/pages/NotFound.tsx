import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Home } from 'lucide-react';

export default function NotFound() {
  const { isHindi } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-center">
      <div>
        <div className="text-8xl font-black text-brand-green opacity-20 mb-4">404</div>
        <h1 className="text-2xl font-bold text-brand-green mb-3">
          {isHindi ? 'पेज नहीं मिला' : 'Page Not Found'}
        </h1>
        <p className="text-gray-500 mb-8">
          {isHindi
            ? 'आप जिस पेज को ढूंढ रहे हैं वह मौजूद नहीं है।'
            : "The page you're looking for doesn't exist."}
        </p>
        <Link to="/" className="btn-primary">
          <Home size={18} />
          {isHindi ? 'होम पर जाएँ' : 'Go Home'}
        </Link>
      </div>
    </div>
  );
}
