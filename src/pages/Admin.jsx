import React from 'react';
import { useNavigate } from 'react-router-dom'
import { CloudUpload, FileText, Globe, CheckCircle } from 'lucide-react';

const Admin = () => {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-ambient grain p-6 lg:p-12 font-sans text-foreground">
            <div className="max-w-4xl mx-auto space-y-10">

                <header className="animate-reveal">
                    <h1 className="flex justify-center text-4xl font-display font-bold mb-2 text-primary">Portfolio Control</h1>
                    <p className="flex justify-center text-muted-foreground">Manage the documents visible to recruiters.</p>
                </header>

                {/* Upload Card */}
                <section className="glass p-8 lg:p-12 rounded-3xl border-border/40 animate-reveal reveal-delayed-1">
                    <div className="flex flex-col items-center justify-center border-2 border-dashed border-border/60 rounded-2xl p-12 hover:border-primary/50 transition-all group">
                        <div className="p-4 bg-primary/10 rounded-full text-primary mb-6 group-hover:scale-110 transition-transform">
                            <CloudUpload size={40} />
                        </div>
                        <h2 className="text-2xl font-display mb-2">Upload New PDF</h2>
                        <p className="text-sm text-muted-foreground mb-8">Replace your current resume across the entire site.</p>

                        <label className="cursor-pointer bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold elevate-hover shadow-[0_0_20px_var(--color-turquoise-glow)]">
                            Select File
                            <input type="file" className="hidden" accept=".pdf" />
                        </label>
                    </div>
                </section>

                {/* Live Status Card */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-reveal reveal-delayed-2">
                    <div className="glass p-6 rounded-2xl flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-status-online/20 flex items-center justify-center text-status-online">
                            <CheckCircle size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Server Status</p>
                            <p className="font-medium">Live on Portfolio</p>
                        </div>
                    </div>

                    <div className="glass p-6 rounded-2xl flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-primary">
                            <Globe size={24} />
                        </div>
                        <div>
                            <button
                                onClick={() => navigate('/resume')}
                                className="w-full text-left focus:outline-none group"
                            >
                                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                                    Current File (Click to View)
                                </p>
                                <p className="font-medium truncate w-40 group-hover:underline decoration-primary underline-offset-4">
                                    My_Resume_2026.pdf
                                </p>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Admin;