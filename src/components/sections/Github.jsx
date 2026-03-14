import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { Badge } from "@/components/ui/badge";
import { Github as GithubIcon } from 'lucide-react';

export default function Github() {
  const turquoiseTheme = {
    dark: ['#1d1f27', '#0d2d2d', '#065d5d', '#00a3a3', '#22d3ee'],
  };

  return (
    <section id="github" className="container-pad py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 reveal">
        <Badge
          className="rounded-full border-border/70 bg-white/5 text-foreground/90 px-4 py-1.5"
        >
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_#40e0d0]" />
            Contributions Graph
          </span>
        </Badge>

        {/* GitHub Profile Button */}
        <a
          href="https://github.com/Kumkum41963"
          target="_blank"
          rel="noopener noreferrer"
          className="glass px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 hover:border-primary/50 transition-all elevate-hover"
        >
          <GithubIcon size={14} className="text-primary" />
          <span>Follow on GitHub</span>
        </a>
      </div>

      <div className="w-full flex justify-center items-center overflow-x-auto pb-4 custom-scrollbar">
        <div className="min-w-[800px] lg:min-w-full flex justify-center px-4">
          <GitHubCalendar
            username="Kumkum41963"
            blockSize={17}
            blockMargin={5}
            colorScheme="dark"
            fontSize={13}
            theme={turquoiseTheme}
            style={{
              width: '80%',
            }}
          />
        </div>
      </div>

      <div className="mt-6 w-full pt-6 border-t border-border/40 flex justify-between items-center text-[10px] text-muted-foreground uppercase tracking-widest">
        <span>Jan 2025</span>
        <span>Dec 2026</span>
      </div>
    </section>
  );
}