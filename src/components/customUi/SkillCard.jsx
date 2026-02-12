import * as React from "react";
import { cn } from "@/lib/utils";
import { 
  SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, 
  SiPostgresql, SiVite, SiDocker, SiGit, SiFigma 
} from "react-icons/si";

// Helper to map text to icons
const getIcon = (item) => {
  const iconMap = {
    "React": <SiReact className="text-[#61DAFB]" />,
    "TypeScript": <SiTypescript className="text-[#3178C6]" />,
    "TailwindCSS": <SiTailwindcss className="text-[#06B6D4]" />,
    "Node.js": <SiNodedotjs className="text-[#339933]" />,
    "PostgreSQL": <SiPostgresql className="text-[#4169E1]" />,
    "Vite": <SiVite className="text-[#646CFF]" />,
    "Docker": <SiDocker className="text-[#2496ED]" />,
    "Git": <SiGit className="text-[#F05032]" />,
    "Figma": <SiFigma className="text-[#F24E1E]" />,
  };
  return iconMap[item] || null;
};

export default function SkillCard({ title, description, items, testId }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border/65 bg-[linear-gradient(180deg,hsl(var(--card)/0.92),hsl(var(--card)/0.56))] p-6",
        "elevate elevate-hover shadow-xl",
      )}
      data-testid={testId}
    >
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight uppercase text-primary/90" data-testid={`${testId}-title`}>
          {title}
        </h3>
        <span
          className="rounded-full border border-border/60 bg-white/4 px-3 py-1 text-[10px] font-bold uppercase text-muted-foreground"
          data-testid={`${testId}-count`}
        >
          {items.length} Techs
        </span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed" data-testid={`${testId}-description`}>
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2" data-testid={`${testId}-chips`}>
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/3 px-3 py-2 text-xs font-medium text-foreground/85 hover:bg-white/8 hover:border-primary/30 transition-all duration-300"
            data-testid={`${testId}-chip-${item.replace(/\s+/g, "-").toLowerCase()}`}
          >
            {/* Renders the logo if found */}
            <span className="text-base">{getIcon(item)}</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}