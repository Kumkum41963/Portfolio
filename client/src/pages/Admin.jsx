import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { CloudUpload, Eye, Download, Mail, Activity, ArrowUpRight, Loader2, Printer, ExternalLink } from 'lucide-react';
import { usePortfolio } from '../services/PortfolioContext';
import { api } from '@/services/api';

const Admin = () => {

    const handleTestConnection = async ()=> {
        await api.test.get()
        console.log('connection success')
    }

    const navigate = useNavigate()

    // Added triggerResumeAction to the destructuring
    const { stats, loading, refreshStats, uploadResume, triggerResumeAction } = usePortfolio();

    useEffect(() => {
        refreshStats();
    }, []);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        console.log('file:', file)
        if (file) {
            console.log('File upload Inititated')
            uploadResume(file);
        }
    };

    // The logic to handle viewing the resume 
    const handleViewResume = async () => {
        navigate('/resume')
    };

    const lastSync = stats?.lastResumeUpdate
        ? new Date(stats.lastResumeUpdate).toLocaleDateString('en-GB', {
            day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
        })
        : 'No data';

    return (
        <div className="min-h-screen bg-[#0a0a0c] p-4 lg:p-10 font-sans text-slate-300">


            {/* Testing server client connection */}
            <button onClick={handleTestConnection} className='bg-amber-500'>
                Testing Server Connection
            </button>
            <div className="max-w-6xl mx-auto space-y-10">

                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/5 pb-8 gap-4">
                    <div>
                        <h1 className="text-4xl font-display font-bold text-white tracking-tight">
                            Control <span className="text-primary">Center</span>
                        </h1>
                        <p className="text-slate-500 text-sm mt-1">Real-time portfolio analytics and asset sync.</p>
                    </div>

                    <div className="flex items-center gap-4 bg-white/5 p-2 rounded-2xl border border-white/5">
                        <div className="px-4 text-right">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Last Deployment</p>
                            <p className="text-xs font-mono text-primary">{lastSync}</p>
                        </div>
                        <button
                            onClick={refreshStats}
                            className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-all text-slate-400"
                        >
                            {loading ? <Loader2 className="animate-spin" size={18} /> : <Activity size={18} />}
                        </button>
                    </div>
                </header>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { label: 'Visits', val: stats?.views, icon: <Eye />, color: 'text-blue-400', glow: 'shadow-blue-500/10' },
                        { label: 'Files', val: stats?.downloads, icon: <Download />, color: 'text-emerald-400', glow: 'shadow-emerald-500/10' },
                        { label: 'Prints', val: stats?.prints, icon: <Printer />, color: 'text-orange-400', glow: 'shadow-orange-500/10' },
                        { label: 'Inquiries', val: stats?.inquiries, icon: <Mail />, color: 'text-primary', glow: 'shadow-primary/10' },
                    ].map((item, i) => (
                        <div key={i} className={`glass p-6 rounded-[2rem] flex flex-col gap-4 hover:border-white/20 transition-all ${item.glow} shadow-2xl`}>
                            <div className={`${item.color} bg-white/5 w-fit p-3 rounded-2xl`}>
                                {React.cloneElement(item.icon, { size: 22 })}
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white tracking-tight">{item.val || 0}</h3>
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{item.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Activity Feed */}
                    <div className="lg:col-span-7 glass rounded-[2.5rem] overflow-hidden">
                        <div className="px-8 py-6 border-b border-white/5 bg-white/[0.02] flex justify-between items-center">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">System Pulse</h3>
                            <span className="flex items-center gap-1.5 text-[10px] bg-emerald-500/10 text-emerald-500 px-2.5 py-1 rounded-full font-bold">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> Live
                            </span>
                        </div>
                        <div className="p-8 space-y-6">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="flex items-center justify-between group cursor-default">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-500 group-hover:bg-primary/20 group-hover:text-primary transition-all">
                                            <ExternalLink size={16} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-200">Resume Access Detected</p>
                                            <p className="text-xs text-slate-500">Anonymous visitor from London, UK</p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-mono text-slate-600 uppercase">2m ago</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Card with the View Resume button restored */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="relative group overflow-hidden bg-primary/10 border border-primary/20 p-8 rounded-[2.5rem] flex flex-col items-center text-center">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <CloudUpload size={120} />
                            </div>

                            <div className="bg-primary text-primary-foreground p-4 rounded-3xl shadow-xl shadow-primary/20 mb-6">
                                <CloudUpload size={32} />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">Sync Assets</h3>
                            <p className="text-sm text-slate-400 mb-8 max-w-[240px]">
                                Your source PDF is automatically distributed to Cloudinary and the global CDN.
                            </p>

                            <div className="w-full space-y-3">
                                {/* Upload Button */}
                                <label className={`w-full py-4 rounded-2xl font-bold cursor-pointer transition-all flex justify-center items-center gap-2 
                                    ${loading ? 'bg-slate-800 text-slate-500' : 'bg-white text-black hover:bg-primary hover:text-white shadow-xl shadow-white/5'}`}>
                                    {loading ? <Loader2 className="animate-spin" size={20} /> : <CloudUpload size={20} />}
                                    <span>{loading ? "Syncing..." : "Upload New File"}</span>
                                    <input type="file" className="hidden" accept=".pdf" onChange={handleFileUpload} disabled={loading} />
                                </label>

                                {/* Restored View Button */}
                                <button 
                                    onClick={handleViewResume}
                                    className="w-full py-4 rounded-2xl font-bold border border-white/10 text-white hover:bg-white/5 transition-all flex justify-center items-center gap-2"
                                >
                                    <Eye size={20} />
                                    <span>View Current Resume</span>
                                </button>
                            </div>

                            <p className="mt-4 text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">Standard PDF • Max 1MB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;