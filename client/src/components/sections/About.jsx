import * as React from "react";
import { GraduationCap, User, Target, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/utils/portfolioData";

export default function About() {
  const { about, education, interests } = portfolioData;

  return (
    <section id="about" className="relative overflow-hidden scroll-mt-10">
      <div className="container-pad py-12">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6 reveal">
          <Badge className="rounded-full border-border/70 bg-white/5 text-foreground/90 px-4 py-1.5">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {about.badge}
            </span>
          </Badge>
          
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold uppercase tracking-wider animate-pulse-100">
            <div className="h-1 w-1 rounded-full bg-emerald-500" />
            Open to Work
          </div>
        </div>

        {/* Main Dossier Card */}
        <div className="glass rounded-[1.25rem] border-border/60 overflow-hidden reveal shadow-2xl bg-gradient-to-b from-white/[0.003] to-transparent">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border/40">
            
            {/* Left Column: Profile & Beyond the Code */}
            <div className="lg:col-span-6 p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8 text-primary/80">
                <User size={18} />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Profile</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-6">
                {about.heading.regular} <br />
                <span className="text-primary italic">{about.heading.italic}</span>
              </h2>
              
              <div className="space-y-8">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {about.bio}
                </p>
                
                <div className="pt-6 border-t border-border/40">
                  <div className="flex items-center gap-2 mb-3">
                    <Target size={14} className="text-primary" />
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground">Beyond the Code</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {interests.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Refined Education Timeline */}
            <div className="lg:col-span-6 p-8 md:p-12 bg-white/[0.003]">
              <div className="flex items-center gap-3 mb-8 text-primary/80">
                <GraduationCap size={18} />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Educational Journey</span>
              </div>

              <div className="space-y-10 relative before:absolute before:inset-0 before:ml-1 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/40 before:via-border/40 before:to-transparent">
                {(education || []).map((edu, idx) => (
                  <div key={idx} className="relative pl-8 group">
                    {/* Timeline Node */}
                    <div className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background group-hover:scale-125 transition-transform" />
                    
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between items-start gap-4">
                        <h4 className="text-[13px] font-bold text-foreground group-hover:text-primary transition-colors">
                          {edu.institution}
                        </h4>
                        <span className="text-[9px] font-mono text-muted-foreground bg-white/5 px-2 py-0.5 rounded border border-border/40">
                          {edu.duration}
                        </span>
                      </div>
                      
                      <p className="text-xs text-muted-foreground">{edu.degree}</p>
                      
                      <div className="flex justify-between items-center mt-3">
                        <div className="flex items-center gap-1 text-[10px] text-muted-foreground/50">
                          <MapPin size={10} />
                          {edu.location}
                        </div>
                        {/* Grade Label with offset shade */}
                        <div className="text-[11px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-md border border-primary/20">
                          {edu.result}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Minimal Footer Icons */}
          <div className="px-8 py-5 bg-white/[0.003] border-t border-border/40 flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {interests.items.map((item, i) => (
                <div key={i} className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                    <item.icon size={14} className="text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-foreground">
                        {item.label}
                    </span>
                </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}