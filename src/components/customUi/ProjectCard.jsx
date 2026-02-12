import * as React from "react";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border/65",
        "bg-[linear-gradient(180deg,hsl(var(--card)/0.94),hsl(var(--card)/0.56))]",
        "transition-all duration-500 hover:scale-[1.02]",
        // The specific White shadow with gray tint on hover
        "hover:shadow-[0_20px_40px_rgba(255,255,255,0.08),0_0_20px_rgba(100,100,100,0.1)] hover:border-white/20"
      )}
    >
      {/* 1. IMAGE HOLDER (Dummy) */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-900/50 border-b border-border/50">
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 italic font-serif">
          Project Preview
        </div>
        <img 
          src={project.image || `https://picsum.photos/seed/${project.id}/600/400`} 
          alt={project.title}
          className="h-full w-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
        />
        {/* Subtle Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
      </div>

      <div className="relative p-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight">
            {project.title}
          </h3>

          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* 2. TECH TAGS */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border/40 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-foreground/70"
            >
              {t}
            </span>
          ))}
        </div>

        {/* 3. DIRECT ACTION ICONS */}
        <div className="mt-6 flex items-center justify-between border-t border-border/40 pt-4">
          <div className="flex gap-4">
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-turquoise transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Live
            </a>
            <a
              href={project.links.source}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-turquoise transition-colors"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          </div>
          
          {/* Visual indicator of "Full Stack" - subtle line */}
          <div className="h-[1px] w-12 bg-gradient-to-r from-turquoise/50 to-transparent" />
        </div>
      </div>
    </div>
  );
}