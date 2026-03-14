import React from 'react';
import { Download, Printer, FileText, ExternalLink } from 'lucide-react';
import { ActionBtn } from '..';
import { toast } from 'sonner'
import { cn } from '@/lib/utils';

const Resume = () => {
    const pdfUrl = "/Resume.pdf";

    const handlePrintResume = () => {
        console.log('Printing Initiated!!!')
        toast('Opening Print Dialog..')
        window.print(pdfUrl)
        toast('Closing Print Dialog..')
        console.log('Resume Printed!!!')
    }

    const handleDownloadResume = () => {
        console.log("Resume is being downloaded...");
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Resume_Kumkum.pdf';
        link.click();
    };

    return (
        <div className="min-h-screen bg-ambient flex flex-col pt-5 px-6  lg:px-12">
            {/* Header Area */}
            <div className="max-w-[1200px] mx-auto w-full mb-3 flex flex-col md:flex-row justify-between items-end gap-6">
                {/* Header */}
                <div>
                    <h1 className="text-4xl font-display font-bold tracking-tight mb-2">
                        View <span className="text-primary italic">Resume</span>
                    </h1>
                </div>

{/* Print and Download */}
                <div className="flex items-center gap-4">
                    {/* Print Button Wrapper */}
                    <div className="group relative flex flex-col items-center">
                        <button
                            onClick={handlePrintResume}
                            className="p-4 hover:bg-white/5 rounded-2xl transition-all text-muted-foreground hover:text-primary border border-white/5 bg-white/2"
                        >
                            <Printer size={20} />
                        </button>
                        {/* Hover Text */}
                        <span className="absolute -top-5 scale-0 group-hover:scale-100 transition-all duration-200 bg-white/10 backdrop-blur-md border border-white/10 text-[10px] py-1 px-3 rounded-lg text-white pointer-events-none">
                            Print
                        </span>
                    </div>

                    {/* Download Button Wrapper */}
                    <div className="group relative flex flex-col items-center">
                        <button
                            onClick={handleDownloadResume}
                            className="p-4 bg-primary/10 hover:bg-primary/20 text-primary rounded-2xl transition-all border border-primary/20"
                        >
                            <Download size={20} />
                        </button>
                        {/* Hover Text */}
                        <span className="absolute -top-5 scale-0 group-hover:scale-100 transition-all duration-200 bg-white/10 backdrop-blur-md border border-white/10 text-[10px] py-1 px-3 rounded-lg text-white pointer-events-none">
                            Download
                        </span>
                    </div>
                </div>
            </div>

            {/* Viewport Area */}
            <main className="max-w-[1000px] mx-auto w-full flex-1 mb-12">
                <div className="h-[75vh] w-full glass rounded-[1rem] border border-border/40 overflow-hidden shadow-6xl">
                {/* tag  to view pdfs svgs or so */}
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