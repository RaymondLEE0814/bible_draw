import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Upload, FileText, Settings, LogOut, Download } from 'lucide-react';
import { Button } from './Button';

// Mock Data
const DAILY_STATS = [
  { name: '01/01', draws: 400 },
  { name: '01/02', draws: 300 },
  { name: '01/03', draws: 200 },
  { name: '01/04', draws: 150 },
  { name: '01/05', draws: 100 },
];

const TEMPLATE_STATS = [
  { name: 'Simple', value: 45 },
  { name: 'Paper', value: 30 },
  { name: 'Photo', value: 25 },
];

const COLORS = ['#3b82f6', '#f59e0b', '#8b5cf6'];

interface AdminDashboardProps {
  onExit: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onExit }) => {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold">RePeach Admin</h2>
          <p className="text-xs text-slate-400 mt-1">Verse Draw Manager</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button className="flex items-center gap-3 w-full px-4 py-3 bg-blue-600 rounded-lg text-sm font-medium">
            <div className="bg-blue-400/20 p-1 rounded">
                <FileText size={16} />
            </div>
            Dashboard
          </button>
          <button className="flex items-center gap-3 w-full px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg text-sm font-medium transition-colors">
            <Upload size={18} />
            Verse Deck
          </button>
          <button className="flex items-center gap-3 w-full px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg text-sm font-medium transition-colors">
            <Settings size={18} />
            Settings
          </button>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button onClick={onExit} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
            <LogOut size={16} />
            Exit Admin
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-slate-200 px-8 py-5 flex items-center justify-between sticky top-0 z-20">
            <h1 className="text-2xl font-bold text-slate-800">Overview</h1>
            <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block">
                    <p className="text-sm font-medium text-slate-900">Admin User</p>
                    <p className="text-xs text-slate-500">Super Administrator</p>
                </div>
                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                    A
                </div>
            </div>
        </header>

        <div className="p-8 space-y-8 max-w-7xl mx-auto">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500 font-medium">Total Draws</p>
              <h3 className="text-3xl font-bold text-slate-900 mt-2">1,245</h3>
              <span className="text-xs text-green-600 font-medium flex items-center mt-2">
                ↑ 12% from yesterday
              </span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500 font-medium">Unique Users</p>
              <h3 className="text-3xl font-bold text-slate-900 mt-2">892</h3>
              <span className="text-xs text-slate-400 mt-2">Mobile Traffic: 92%</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500 font-medium">Save Rate</p>
              <h3 className="text-3xl font-bold text-slate-900 mt-2">68%</h3>
              <span className="text-xs text-blue-600 mt-2">High Engagement</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500 font-medium">Active Deck</p>
              <h3 className="text-3xl font-bold text-slate-900 mt-2">2026_Main</h3>
              <span className="text-xs text-green-600 mt-2">Active</span>
            </div>
          </div>

          {/* Charts Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-slate-800">Daily Traffic</h3>
                <button className="text-xs text-blue-600 hover:underline">View Report</button>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={DAILY_STATS}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip cursor={{ fill: '#f1f5f9' }} />
                    <Bar dataKey="draws" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-6">Template Popularity</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={TEMPLATE_STATS}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {TEMPLATE_STATS.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-4 text-xs text-slate-500 mt-2">
                {TEMPLATE_STATS.map((stat, index) => (
                    <div key={stat.name} className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: COLORS[index]}}></div>
                        {stat.name}
                    </div>
                ))}
              </div>
            </div>
          </div>

          {/* Verse Management Section (Simulated) */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-bold text-slate-800">Recent Verse Uploads</h3>
              <Button variant="outline" className="!py-2 !px-4 !text-sm flex gap-2">
                <Download size={14} /> Download Template
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                  <tr>
                    <th className="px-6 py-3">Reference</th>
                    <th className="px-6 py-3">Content Preview</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">John 3:16</td>
                    <td className="px-6 py-4 text-slate-500 truncate max-w-xs">For God so loved the world...</td>
                    <td className="px-6 py-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Active</span></td>
                    <td className="px-6 py-4 text-right"><button className="text-blue-600 hover:underline">Edit</button></td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">Psalm 23:1</td>
                    <td className="px-6 py-4 text-slate-500 truncate max-w-xs">The Lord is my shepherd...</td>
                    <td className="px-6 py-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Active</span></td>
                    <td className="px-6 py-4 text-right"><button className="text-blue-600 hover:underline">Edit</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};