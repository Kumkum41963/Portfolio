import React, { useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { Badge } from "@/components/ui/badge";
import { Github as GithubIcon, ChevronRight, Activity, Calendar } from 'lucide-react';

export default function Github() {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const years = [currentYear, currentYear - 1, currentYear - 2];

  const turquoiseTheme = {
    dark: ['#1d1f27', '#0d2d2d', '#065d5d', '#00a3a3', '#22d3ee'],
  };

  return (
    <section id="github" className="container-pad py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6 reveal">
        <Badge className="rounded-full border-border/70 bg-white/5 text-foreground/90 px-4 py-1.5">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_#40e0d0]" />
           Github Contributions
          </span>
        </Badge>
        {/* Year Navigation */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Subtle Year Switcher */}
          <div className="flex bg-white/5 border border-border/40 p-1 rounded-xl">
            {years.map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all ${selectedYear === yr
                  ? "bg-primary/20 text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {yr}
              </button>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-border/40 mx-1 hidden sm:block" />

          {/* Follow Button */}
          <a
            href="https://github.com/Kumkum41963"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-4 py-2 rounded-xl text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 hover:border-primary/50 transition-all shadow-sm"
          >
            <GithubIcon size={12} className="text-primary" />
            <span>Follow</span>
          </a>
        </div>
      </div>

      {/* Calendar Area */}
      <div className="w-full flex justify-center items-center overflow-x-auto pb-4 custom-scrollbar">
        <div className="min-w-[800px] lg:min-w-full flex justify-center">
          <GitHubCalendar
            username="Kumkum41963"
            blockSize={16}
            blockMargin={5}
            colorScheme="dark"
            fontSize={12}
            year={selectedYear}
            theme={turquoiseTheme}
          />
        </div>
      </div>



      {/* Technical Footer Strip */}
      <div className="px-8 py-5 bg-white/[0.003] border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            <Activity size={12} className="text-primary" />
            <span>Status: Active</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            <Calendar size={12} className="text-primary" />
            <span>Archive: {selectedYear}</span>
          </div>
        </div>
      </div>
    </section>
  );
}