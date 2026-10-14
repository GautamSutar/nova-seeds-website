import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { LayoutDashboard, MessageSquare, LogOut, Store } from 'lucide-react';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [stats, setStats] = useState({ enquiries: 0, dealers: 0 });

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        navigate('/admin');
        return;
      }
      setUserEmail(data.user.email ?? '');
    });

    // Load stats
    Promise.all([
      supabase.from('enquiries').select('id', { count: 'exact', head: true }),
      supabase.from('dealers').select('id', { count: 'exact', head: true }),
    ]).then(([enq, dealers]) => {
      setStats({ enquiries: enq.count ?? 0, dealers: dealers.count ?? 0 });
    });
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin');
  };

  const ADMIN_LINKS = [
    { to: '/admin/enquiries', icon: MessageSquare, label: 'Enquiries', count: stats.enquiries },
    { to: '/admin/dealers', icon: Store, label: 'Dealers', count: stats.dealers },
    { to: '/admin/content', icon: LayoutDashboard, label: 'Content' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-green-900 text-white px-6 py-4 flex items-center justify-between">
        <div className="font-bold text-lg">Nova Seeds Admin</div>
        <div className="flex items-center gap-4">
          <span className="text-green-300 text-sm">{userEmail}</span>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 text-sm text-green-200 hover:text-white"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-brand-green mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {ADMIN_LINKS.map(({ to, icon: Icon, label, count }) => (
            <Link
              key={to}
              to={to}
              className="bg-white rounded-xl shadow p-6 flex items-center gap-4 hover:shadow-lg transition-shadow border border-green-100"
            >
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                <Icon size={24} className="text-brand-green" />
              </div>
              <div>
                <div className="font-bold text-gray-800">{label}</div>
                {count !== undefined && (
                  <div className="text-2xl font-black text-brand-green">{count}</div>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow p-6 border border-yellow-100">
          <h2 className="font-bold text-gray-700 mb-2">Quick Links</h2>
          <div className="space-y-2 text-sm">
            <a href="/" target="_blank" className="text-brand-green hover:underline block">→ View public website</a>
            <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline block">→ Supabase Dashboard</a>
          </div>
        </div>
      </div>
    </div>
  );
}
