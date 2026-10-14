import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, MapPin, ShieldCheck, Building2 } from 'lucide-react';
import SEO from '../components/SEO';
import DealerCard from '../components/DealerCard';
import ContactForm from '../components/ContactForm';
import { useLanguage } from '../context/LanguageContext';
import { fetchDealers, type Dealer } from '../lib/supabase';

export default function Dealers() {
  const { t } = useTranslation();
  const { isHindi } = useLanguage();
  const [dealers, setDealers] = useState<Dealer[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchDealers().then((data) => {
      setDealers(data);
      setLoading(false);
    });
  }, []);

  const states = useMemo(() => {
    return [...new Set(dealers.map((d) => d.state))].sort();
  }, [dealers]);

  const filtered = useMemo(() => {
    return dealers.filter((d) => {
      const matchesState = !selectedState || d.state === selectedState;
      const q = search.toLowerCase();
      const matchesSearch = !q || [d.name, d.name_hi ?? '', d.city, d.city_hi ?? '', d.district, d.district_hi ?? '', d.address].some(
        (f) => f.toLowerCase().includes(q)
      );
      return matchesState && matchesSearch;
    });
  }, [dealers, search, selectedState]);

  const groupedByState = useMemo(() => {
    const groups = new Map<string, Dealer[]>();
    for (const dealer of filtered) {
      const list = groups.get(dealer.state) ?? [];
      list.push(dealer);
      groups.set(dealer.state, list);
    }
    return [...groups.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  return (
    <>
      <SEO
        titleHi="डीलर खोजें – नोवा सीड्स | अपने नज़दीकी अधिकृत डीलर"
        titleEn="Find Dealer – Nova Seeds | Nearest Authorized Dealer"
        descriptionHi="नोवा सीड्स का Gold Medal 941 बीज खरीदने के लिए अपने नज़दीकी अधिकृत डीलर को खोजें।"
        descriptionEn="Find your nearest authorized dealer to buy Nova Seeds Gold Medal 941 hybrid mustard seeds."
        canonical="/dealers"
      />

      <div className="pt-16">
        {/* Header */}
        <div className="bg-hero-gradient text-white py-12 px-4">
          <div className="container-lg">
            <h1 className="text-3xl font-bold mb-2">{t('dealers.title')}</h1>
            <p className="text-green-200 mb-6">{t('dealers.subtitle')}</p>

            {/* Stats strip */}
            {!loading && dealers.length > 0 && (
              <div className="flex flex-wrap gap-4 sm:gap-8">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Building2 size={18} className="text-brand-mustard" />
                  </div>
                  <div>
                    <div className="text-xl font-black leading-none">{dealers.length}+</div>
                    <div className="text-green-200 text-xs mt-0.5">{t('dealers.authorizedDealers')}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-brand-mustard" />
                  </div>
                  <div>
                    <div className="text-xl font-black leading-none">{states.length}</div>
                    <div className="text-green-200 text-xs mt-0.5">{t('dealers.statesCovered')}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <ShieldCheck size={18} className="text-brand-mustard" />
                  </div>
                  <div>
                    <div className="text-xl font-black leading-none">100%</div>
                    <div className="text-green-200 text-xs mt-0.5">{t('dealers.verified')}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="container-lg px-4 py-8 space-y-8">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                id="dealer-search"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t('dealers.searchPlaceholder')}
                className="form-input pl-10"
              />
            </div>
            <select
              id="dealer-state-filter"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="form-input sm:w-48"
            >
              <option value="">{t('dealers.allStates')}</option>
              {states.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Results */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="card p-5 border border-green-100 animate-pulse">
                  <div className="h-5 bg-gray-200 rounded w-2/3 mb-3" />
                  <div className="h-3.5 bg-gray-100 rounded w-full mb-2" />
                  <div className="h-3.5 bg-gray-100 rounded w-4/5 mb-4" />
                  <div className="flex gap-2">
                    <div className="h-9 bg-gray-100 rounded-lg flex-1" />
                    <div className="h-9 bg-gray-100 rounded-lg flex-1" />
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16">
              <MapPin size={48} className="text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">{t('dealers.noResults')}</p>
            </div>
          ) : (
            <div className="space-y-8">
              <p className="text-sm text-gray-500">
                {isHindi
                  ? `${filtered.length} डीलर मिले`
                  : `${filtered.length} dealer${filtered.length === 1 ? '' : 's'} found`}
              </p>
              {groupedByState.map(([state, stateDealers]) => (
                <div key={state}>
                  <h2 className="flex items-center gap-2 text-sm font-bold text-brand-green uppercase tracking-wide mb-3">
                    <MapPin size={14} className="text-brand-mustard" />
                    {isHindi && stateDealers[0].state_hi ? stateDealers[0].state_hi : state}
                    <span className="text-gray-400 font-normal normal-case">({stateDealers.length})</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {stateDealers.map((dealer) => (
                      <DealerCard key={dealer.id} dealer={dealer} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Become a Dealer */}
          <div className="bg-green-50 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <h2 className="text-xl font-bold text-brand-green">{t('dealers.becomeDealer')}</h2>
                <p className="text-gray-500 mt-1">{t('dealers.becomeDealerDesc')}</p>
              </div>
              <button
                id="become-dealer-btn"
                onClick={() => setShowForm(!showForm)}
                className="btn-primary shrink-0"
              >
                {t('dealers.applyNow')}
              </button>
            </div>
            {showForm && (
              <div className="mt-6 bg-white rounded-xl p-6 shadow">
                <h3 className="font-bold text-brand-green mb-4">
                  {isHindi ? 'डीलर आवेदन फॉर्म' : 'Dealer Application Form'}
                </h3>
                <ContactForm
                  type="dealer_application"
                  onSuccess={() => setShowForm(false)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
