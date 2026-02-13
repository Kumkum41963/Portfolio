import * as React from "react";
import { SkillCard } from "..";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { portfolioData } from "@/utils/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="relative overflow-hidden scroll-mt-10">
      <div className="container-pad py-14 sm:py-16 md:py-20">

        {/* Badge Section */}
        <div className="mb-8 reveal">
          <Badge
            className="rounded-full border-border/70 bg-white/5 text-foreground/90 px-4 py-1.5"
            data-testid="hero-kicker"
          >
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {skills.badge}
            </span>
          </Badge>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
          <div>
            <h2 className="text-3xl sm:text-4xl font-medium" data-testid="skills-title">
              {skills.title}
            </h2>
            <p
              className="mt-3 max-w-2xl text-muted-foreground leading-relaxed"
              data-testid="skills-subtitle"
            >
              {skills.subtitle}
            </p>
          </div>

          {/* Current Learning Callout */}
          <div
            className="rounded-2xl border border-border/60 bg-white/3 px-5 py-4 hidden md:block"
            data-testid="skills-callout"
          >
            <div className="text-[10px] uppercase tracking-widest text-primary font-bold">
              Current Learning
            </div>
            <div className="mt-1 text-sm font-semibold italic text-foreground/70">
              {skills.learning}
            </div>
          </div>
        </div>

        {/* Skills Grid - Mapping through categories from portfolioData */}
        <div
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
          data-testid="skills-grid"
        >
          {skills.categories.map((card, idx) => {
            const delayClass =
              idx === 0 ? "reveal-delayed-1" :
                idx === 1 ? "reveal-delayed-2" :
                  "reveal-delayed-3";

            return (
              <div key={card.title} className={cn("reveal", delayClass)}>
                {/* Spreading the card object: title, description, and items */}
                <SkillCard {...card} />
              </div>
            );
          })}
        </div>

        <div className="mt-12 hairline opacity-50" data-testid="skills-divider" />
      </div>
    </section>
  );
}