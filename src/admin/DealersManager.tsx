import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase, type Dealer } from '../../lib/supabase';
import { ArrowLeft, Plus, Trash2, Edit3, CheckCircle, XCircle } from 'lucide-react';

export default function DealersManager() {
  const navigate = useNavigate();
  const [dealers, setDealers] = useState<Dealer[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ name: '', address: '', phone: '', state: '', district: '', city: '' });

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) navigate('/admin');
    });
    loadDealers();
  }, [navigate]);

  const loadDealers = async () => {
    const { data } = await supabase.from('dealers').select('*').order('state');
    setDealers((data ?? []) as Dealer[]);
    setLoading(false);
  };

  const addDealer = async (e: React.FormEvent) => {
    e.preventDefault();
    await supabase.from('dealers').insert([{ ...form, is_active: true }]);
    setShowAdd(false);
    setForm({ name: '', address: '', phone: '', state: '', district: '', city: '' });
    loadDealers();
  };

  const toggleActive = async (dealer: Dealer) => {
    await supabase.from('dealers').update({ is_active: !dealer.is_active }).eq('id', dealer.id);
    loadDealers();
  };

  const deleteDealer = async (id: string) => {
    if (!confirm('Delete this dealer?')) return;
    await supabase.from('dealers').delete().eq('id', id);
    loadDealers();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-900 text-white px-6 py-4 flex items-center gap-3">
        <Link to="/admin/dashboard" className="text-green-300 hover:text-white"><ArrowLeft size={20} /></Link>
        <div className="font-bold text-lg">Dealers Manager</div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-brand-green">{dealers.length} Dealers</h1>
          <button onClick={() => setShowAdd(!showAdd)} className="btn-primary !text-sm !py-2">
            <Plus size={16} />
            Add Dealer
          </button>
        </div>

        {/* Add form */}
        {showAdd && (
          <form onSubmit={addDealer} className="bg-white rounded-xl shadow p-6 mb-6 grid grid-cols-2 gap-4">
            {['name', 'address', 'phone', 'state', 'district', 'city'].map((field) => (
              <div key={field}>
                <label className="form-label capitalize">{field}</label>
                <input
                  className="form-input"
                  value={(form as any)[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  required={['name', 'address', 'phone', 'state'].includes(field)}
                />
              </div>
            ))}
            <div className="col-span-2 flex gap-2">
              <button type="submit" className="btn-primary !text-sm !py-2">Save</button>
              <button type="button" onClick={() => setShowAdd(false)} className="btn-outline !text-sm !py-2">Cancel</button>
            </div>
          </form>
        )}

        {loading ? (
          <div className="text-center py-16 text-gray-400">Loading...</div>
        ) : (
          <div className="overflow-x-auto rounded-xl shadow">
            <table className="w-full text-sm bg-white">
              <thead className="bg-brand-green text-white">
                <tr>
                  {['Name', 'State', 'District', 'City', 'Phone', 'Active', 'Actions'].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dealers.map((d, i) => (
                  <tr key={d.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium">{d.name}</td>
                    <td className="px-4 py-3">{d.state}</td>
                    <td className="px-4 py-3">{d.district}</td>
                    <td className="px-4 py-3">{d.city}</td>
                    <td className="px-4 py-3">{d.phone}</td>
                    <td className="px-4 py-3">
                      <button onClick={() => toggleActive(d)}>
                        {d.is_active
                          ? <CheckCircle size={18} className="text-green-500" />
                          : <XCircle size={18} className="text-gray-400" />}
                      </button>
                    </td>
                    <td className="px-4 py-3">
                      <button onClick={() => deleteDealer(d.id)} className="text-red-400 hover:text-red-600">
                        <Trash2 size={16} />
                      </button>
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
