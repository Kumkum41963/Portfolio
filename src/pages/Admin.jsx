// import React from 'react';
// import { useNavigate } from 'react-router-dom'
// import { CloudUpload, FileText, Globe, CheckCircle } from 'lucide-react';
// import { toast } from 'sonner';

// const Admin = () => {
//     const navigate = useNavigate()

//     const handleFileUpload =  () => {
//         toast('file upload initiated')
//     }
//     return (
//         <div className="min-h-screen bg-ambient grain p-6 lg:p-12 font-sans text-foreground">
//             <div className="max-w-4xl mx-auto space-y-10">

//                 <header className="animate-reveal">
//                     <h1 className="flex justify-center text-4xl font-display font-bold mb-2 text-primary">Portfolio Control</h1>
//                     <p className="flex justify-center text-muted-foreground">Manage the documents visible to recruiters.</p>
//                 </header>

//                 {/* Upload Card */}
//                 <section className="glass p-5 lg:p-5 rounded-3xl border-border/40 animate-reveal reveal-delayed-1">
//                     <div className="flex flex-col items-center justify-center border-2 border-dashed border-border/60 rounded-2xl p-5 hover:border-primary/50 transition-all group">
//                         <div className="p-2 bg-primary/10 rounded-full text-primary mb-6 group-hover:scale-110 transition-transform">
//                             <CloudUpload size={40} />
//                         </div>
//                         <h2 className="text-2xl font-display mb-2">Upload New PDF</h2>
//                         <p className="text-sm text-muted-foreground mb-8">Replace your current resume across the entire site.</p>
//                         <button onClick={handleFileUpload}>
//                             <label className="cursor-pointer bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold elevate-hover shadow-[0_0_20px_var(--color-turquoise-glow)]">
//                                 Select File
//                                 <input type="file" className="hidden" accept=".pdf" />
//                             </label>
//                         </button>
//                     </div>
//                 </section>

//                 {/* Live Status Card */}
//                 <section className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-reveal reveal-delayed-2">
//                     <div className="glass p-6 rounded-2xl flex items-center gap-4">
//                         <div className="w-12 h-12 rounded-lg bg-status-online/20 flex items-center justify-center text-status-online">
//                             <CheckCircle size={24} />
//                         </div>
//                         <div>
//                             <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Server Status</p>
//                             <p className="font-medium">Live on Portfolio</p>
//                         </div>
//                     </div>

//                     <div className="glass p-6 rounded-2xl flex items-center gap-4">
//                         <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-primary">
//                             <Globe size={24} />
//                         </div>
//                         <div>
//                             <button
//                                 onClick={() => navigate('/resume')}
//                                 className="w-full text-left focus:outline-none group"
//                             >
//                                 <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
//                                     Current File (Click to View)
//                                 </p>
//                                 <p className="font-medium truncate w-40 group-hover:underline decoration-primary underline-offset-4">
//                                     Resume.pdf
//                                 </p>
//                             </button>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// };

// export default Admin;


import React from 'react';
import { CloudUpload, Eye, Download, Mail, Activity, ArrowUpRight, Clock } from 'lucide-react';

const Admin = () => {
    return (
        <div className="min-h-screen bg-ambient p-6 lg:p-10 font-sans text-slate-200">
            <div className="max-w-6xl mx-auto space-y-8">
                
                {/* 1. Header Logic: Clean & Bold */}
                <header className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-6 gap-4">
                    <div>
                        <h1 className="text-3xl font-display font-bold text-white">Portfolio <span className="text-primary">Admin</span></h1>
                        <p className="text-muted-foreground text-sm">System Overview & Document Management</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-right hidden md:block">
                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Last Sync</p>
                            <p className="text-xs font-mono">2026-03-14 23:04</p>
                        </div>
                    </div>
                </header>

                {/* 2. Metrics Logic: The Big Three */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { label: 'Total Visitors', val: '1,284', icon: <Eye />, color: 'text-blue-400', bg: 'bg-blue-500/10' },
                        { label: 'Resume Downloads', val: '84', icon: <Download />, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                        { label: 'Contact Inquiries', val: '16', icon: <Mail />, color: 'text-primary', bg: 'bg-primary/10' },
                    ].map((stat, i) => (
                        <div key={i} className="glass p-6 rounded-3xl border-white/5 flex items-center gap-5">
                            <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color}`}>
                                {React.cloneElement(stat.icon, { size: 28 })}
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white">{stat.val}</p>
                                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 3. Operational Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    
                    {/* Activity Feed - Logic: Scrollable scannable list */}
                    <div className="lg:col-span-3 glass rounded-[2rem] border-white/5 overflow-hidden flex flex-col">
                        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
                            <h3 className="font-bold flex items-center gap-2"><Activity size={18} className="text-primary"/> Recent Activity</h3>
                            <button className="text-xs text-primary hover:underline">View All</button>
                        </div>
                        <div className="flex-1 overflow-y-auto max-h-[400px]">
                            {[
                                { event: 'Contact Request', from: 'Tech Lead @ Vercel', time: '5m ago', type: 'contact' },
                                { event: 'Resume Downloaded', from: 'London, UK', time: '12m ago', type: 'download' },
                                { event: 'Profile Viewed', from: 'San Francisco, US', time: '1h ago', type: 'view' },
                                { event: 'Resume Downloaded', from: 'New York, US', time: '3h ago', type: 'download' },
                            ].map((item, i) => (
                                <div key={i} className="px-6 py-4 border-b border-white/[0.03] flex items-center justify-between hover:bg-white/5 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-2 h-2 rounded-full ${item.type === 'contact' ? 'bg-primary' : 'bg-slate-500'}`} />
                                        <div>
                                            <p className="text-sm font-semibold text-white">{item.event}</p>
                                            <p className="text-xs text-muted-foreground">{item.from}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Clock size={12} />
                                        <span className="text-xs font-mono">{item.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Management Sidebar */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* File Sync Logic */}
                        <div className="glass p-8 rounded-[2rem] border-white/10 bg-primary/5 flex flex-col items-center text-center gap-4">
                            <div className="p-4 bg-primary/20 rounded-full text-primary">
                                <CloudUpload size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Update Source</h3>
                                <p className="text-sm text-muted-foreground px-4">Upload a new PDF to refresh your public resume.</p>
                            </div>
                            <label className="w-full bg-primary text-primary-foreground py-4 rounded-2xl font-bold cursor-pointer hover:scale-[1.02] transition-transform flex justify-center items-center gap-2 shadow-lg shadow-primary/20">
                                Select PDF
                                <input type="file" className="hidden" accept=".pdf" />
                            </label>
                            <p className="text-[10px] uppercase text-muted-foreground tracking-widest font-bold">Max Size: 5MB</p>
                        </div>

                        {/* Quick Insight Card */}
                        <div className="glass p-6 rounded-[2rem] border-white/5">
                            <h4 className="text-xs font-bold uppercase text-muted-foreground mb-4">Quick Insight</h4>
                            <div className="flex items-center justify-between">
                                <p className="text-sm">Weekly Growth</p>
                                <span className="text-emerald-400 font-bold flex items-center gap-1">+24% <ArrowUpRight size={14}/></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Admin;