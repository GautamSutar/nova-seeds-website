import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase, type Enquiry } from '../../lib/supabase';
import { Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EnquiriesManager() {
  const navigate = useNavigate();
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) navigate('/admin');
    });

    supabase
      .from('enquiries')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        setEnquiries((data ?? []) as Enquiry[]);
        setLoading(false);
      });
  }, [navigate]);

  const exportCSV = () => {
    const headers = ['Name', 'Mobile', 'State', 'District', 'Message', 'Type', 'Date'];
    const rows = enquiries.map((e) => [
      e.name, e.mobile, e.state, e.district ?? '', e.message, e.type ?? '', e.created_at ?? '',
    ]);
    const csv = [headers, ...rows].map((r) => r.map((f) => `"${String(f).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nova_seeds_enquiries_${Date.now()}.csv`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-900 text-white px-6 py-4 flex items-center gap-3">
        <Link to="/admin/dashboard" className="text-green-300 hover:text-white">
          <ArrowLeft size={20} />
        </Link>
        <div className="font-bold text-lg">Enquiries Manager</div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-brand-green">{enquiries.length} Enquiries</h1>
          <button onClick={exportCSV} className="btn-outline flex items-center gap-2 !text-sm !py-2">
            <Download size={16} />
            Export CSV
          </button>
        </div>

        {loading ? (
          <div className="text-center py-16 text-gray-400">Loading...</div>
        ) : (
          <div className="overflow-x-auto rounded-xl shadow">
            <table className="w-full text-sm bg-white">
              <thead className="bg-brand-green text-white">
                <tr>
                  {['Name', 'Mobile', 'State', 'District', 'Message', 'Type', 'Date'].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {enquiries.map((e, i) => (
                  <tr key={e.id ?? i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium">{e.name}</td>
                    <td className="px-4 py-3">{e.mobile}</td>
                    <td className="px-4 py-3">{e.state}</td>
                    <td className="px-4 py-3">{e.district ?? '-'}</td>
                    <td className="px-4 py-3 max-w-xs truncate">{e.message}</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 rounded-full text-xs bg-green-100 text-brand-green">
                        {e.type ?? 'contact'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-400">
                      {e.created_at ? new Date(e.created_at).toLocaleDateString('en-IN') : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
