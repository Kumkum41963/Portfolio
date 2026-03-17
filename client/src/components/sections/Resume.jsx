import React, { useEffect, useState } from 'react';
import { Download, Printer, FileText, ExternalLink, Loader2 } from 'lucide-react';
import { ActionBtn } from '..';
import { toast } from 'sonner';
import { usePortfolio } from '@/services/PortfolioContext';

const Resume = () => {
    const { triggerResumeAction } = usePortfolio();
    const [pdfUrl, setPdfUrl] = useState(null);
    const [isPreparing, setIsPreparing] = useState(true);

    // Initial Load to fetch url and set for most part
    useEffect(() => {
        const initResume = async () => {
            console.log('🔍 [Resume View] Initializing source fetch...');
            try {
                // 'view' is passed as a string to target the /api/sarkare/view endpoint
                const response = await triggerResumeAction('view');

                // Log what we got back (should be the Cloudinary URL)
                console.log('✅ [Resume View] URL received:', response?.url || response);

                // If your triggerResumeAction returns the whole object, use response.url
                // If it returns just the string, use response
                setPdfUrl(response?.url || response);

            } catch (error) {
                console.error('🔥 [Resume View] Initialization failed:', error.message);
                toast.error("Failed to load resume source");
            } finally {
                console.log('🏁 [Resume View] Setup complete.');
                setIsPreparing(false);
            }
        };
        initResume();
    }, []);

    // In below setPdfUrl was not added because same url has been added in useEffect when view was inititated, it will create redundancy and so we try to just trigger the action so server can increment count without any ui expectations
    const handlePrint = async () => {
        if (!pdfUrl) return;
        toast.info('Opening print dialog...');
        await triggerResumeAction('print'); // Track print in Admin

        // Best practice for printing remote PDFs: use a hidden iframe
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = pdfUrl;
        document.body.appendChild(iframe);
        iframe.onload = () => {
            iframe.contentWindow.print();
        };
    };

    const handleDownload = async () => {
        if (!pdfUrl) return;
        toast.success('Downloading Resume...');
        await triggerResumeAction('download'); // Track download in Admin

        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Resume.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Loading State (Prevents UI Flicker)
    if (isPreparing) {
        return (
            <div className="min-h-screen bg-ambient flex flex-col items-center justify-center gap-4">
                <Loader2 className="animate-spin text-primary" size={40} />
                <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">Initialising Document...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-ambient flex flex-col pt-5 px-6 lg:px-12 text-slate-200">
            {/* Header Section */}
            <div className="max-w-[1200px] mx-auto w-full mb-6 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <h1 className="text-4xl font-display font-bold tracking-tight mb-2">
                        View <span className="text-primary italic">Resume</span>
                    </h1>
                    <p className="text-slate-500 text-sm">Cloud-Synced Official Document</p>
                </div>

                <div className="flex items-center gap-4">
                    {/* Print Button */}
                    <button
                        onClick={handlePrint}
                        className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all border border-white/5 text-slate-400 hover:text-white"
                        title="Print Resume"
                    >
                        <Printer size={20} />
                    </button>

                    {/* Download Button */}
                    <button
                        onClick={handleDownload}
                        className="flex items-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-2xl font-bold transition-all hover:scale-[1.02] shadow-lg shadow-primary/20"
                    >
                        <Download size={20} />
                        <span>Download PDF</span>
                    </button>
                </div>
            </div>

            {/* Viewport Section */}
            <main className="max-w-[1000px] mx-auto w-full flex-1 mb-12">
                <div className="h-[78vh] w-full glass rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl bg-black/20">
                    {pdfUrl ? (
                        <object
                            data={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                            type="application/pdf"
                            className="w-full h-full"
                        >
                            {/* Fallback for browsers that don't support inline PDFs (like some mobile browsers) */}
                            <div className="flex flex-col items-center justify-center h-full text-center p-12">
                                <FileText size={48} className="text-slate-700 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Mobile Preview</h3>
                                <p className="text-slate-500 text-sm mb-6 max-w-xs">
                                    For the best experience on mobile, please open the document directly.
                                </p>
                                <ActionBtn onClick={() => window.open(pdfUrl, '_blank')}>
                                    <ExternalLink size={16} className="mr-2" />
                                    Open Fullscreen
                                </ActionBtn>
                            </div>
                        </object>
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <p className="text-slate-500 italic">Document source not found.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Resume;