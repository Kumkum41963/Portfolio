import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/utils/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="relative overflow-hidden scroll-mt-10">
      <div className="container-pad py-12">
        
        {/* Header Section */}
        <div className="mb-5 reveal">
          <Badge className="rounded-full border-border/70 bg-white/5 text-foreground/90 px-4 py-1.5 mb-5">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_#40e0d0]" />
              {skills.badge}
            </span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4">
            {skills.title}
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
            {skills.subtitle}
          </p>
        </div>

        {/* The Icon Row */}
        <div className="reveal reveal-delayed-1 relative group">
          {/* Fading Edge Masks: Makes the icons "fade out" at the edges for a pro look */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Top Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-border/60 to-transparent mb-5" />
          
          {/* THE CLEAN ROW: Scrollable but no bar */}
          <div className="flex flex-nowrap items-center gap-x-12 md:gap-x-16 overflow-x-auto px-10 pb-4 scrollbar-hide select-none active:cursor-grabbing cursor-grab">
            {skills.items.map((skill, idx) => (
              <div 
                key={`${skill.name}-${idx}`} 
                className="group/icon relative flex flex-col items-center justify-center shrink-0"
              >
                {/* Tooltip */}
                <span className="absolute -top-10 opacity-0 group-hover/icon:opacity-100 group-hover/icon:-top-12 transition-all duration-300 text-primary text-[10px] font-bold tracking-[0.2em] uppercase pointer-events-none whitespace-nowrap z-20">
                  {skill.name}
                </span>

                <div className="relative h-11 w-11 flex items-center justify-center transition-all duration-300 group-hover/icon:scale-125">
                  <img 
                    src={skill.logo} 
                    alt={skill.name} 
                    className="h-full w-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.05)]"
                  />
                  <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full -z-10 opacity-0 group-hover/icon:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-border/60 to-transparent mt-2" />
        {/* Minimal Footer Tag */}
<div className="mt-2 flex flex-col items-center gap-4 reveal reveal-delayed-3">
  {/* The Text: Light shade of white, tiny, and tracked out */}
  <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/30 transition-colors hover:text-primary/60 cursor-default flex items-center gap-3">
    <div className="h-[1px] w-6 bg-white/10" />
    Explore All Skills
    <div className="h-[1px] w-6 bg-white/10" />
  </div>
  
  {/* Subtle indicator dot */}
  <div className="h-1 w-1 rounded-full bg-white/10" />
</div>
        </div>
      </div>
    </section>
  );
}