import React from 'react';
import { Download, Printer, FileText, ExternalLink } from 'lucide-react';
import { ActionBtn } from '..';
import { cn } from '@/lib/utils';

const Resume = () => {
    const pdfUrl = "/My_Resume_2026.pdf";

    const handleDownloadResume = () => {
        console.log("Resume is being downloaded...");
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Resume_Kumkum.pdf';
        link.click();
    };

    return (
        <div className="min-h-screen bg-ambient flex flex-col pt-24 px-6 lg:px-12">
            {/* Header Area */}
            <div className="max-w-[1200px] mx-auto w-full mb-8 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <h1 className="text-4xl font-display font-bold tracking-tight mb-2">
                        Resume <span className="text-primary italic">Viewer</span>
                    </h1>
                    <p className="text-muted-foreground text-[10px] uppercase tracking-[0.3em] font-bold">
                        Software Engineering Portfolio • 2026
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => window.print()}
                        className="p-3 hover:bg-white/5 rounded-2xl transition-all text-muted-foreground hover:text-primary border border-white/5"
                    >
                        <Printer size={20} />
                    </button>

                    <ActionBtn
                        variant="primary"
                        onClick={handleDownloadResume}
                        className="px-8"
                    >
                        <div className="flex items-center gap-2">
                            <Download size={16} />
                            Download Resume
                        </div>
                    </ActionBtn>
                </div>
            </div>

            {/* Viewport Area */}
            <main className="max-w-[1200px] mx-auto w-full flex-1 mb-12">
                <div className="h-[85vh] w-full glass rounded-[2rem] border border-border/40 overflow-hidden shadow-2xl">
                    <object
                        data={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                        type="application/pdf"
                        className="w-full h-full block"
                    >
                        {/* Fallback UX */}
                        <div className="flex flex-col items-center justify-center h-full text-center p-12 space-y-6">
                            <FileText size={48} className="text-primary/40" />
                            <div>
                                <h3 className="text-xl font-bold mb-2">Preview Unavailable</h3>
                                <p className="text-muted-foreground text-sm mb-6">Your browser doesn't support inline PDF viewing.</p>
                                <ActionBtn variant="secondary" onClick={() => window.open(pdfUrl, '_blank')}>
                                    <ExternalLink size={16} className="mr-2" />
                                    Open PDF in New Tab
                                </ActionBtn>
                            </div>
                        </div>
                    </object>
                </div>
            </main>
        </div>
    );
};

export default Resume;