import * as React from "react";
import { ProjectCard } from "..";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/utils/portfolioData";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="relative overflow-hidden scroll-mt-5">
      <div className="container-pad py-14 sm:py-16 md:py-20">

        {/* Badge Section */}
        <div className="mb-6 reveal">
          <Badge className="rounded-full border-border/70 bg-white/5 text-foreground/90 px-4 py-1.5">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_#40e0d0]" />
              Projects
            </span>
          </Badge>
        </div>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
          <div>
            <h2 className="text-3xl sm:text-4xl font-medium uppercase tracking-tight">
              My Work
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
              Practical applications built to explore specific technologies.
              Each project represents a step forward in my journey to mastering full-stack engineering.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            // Logic for staggered reveal animation
            const delayIndex = (idx % 3) + 1;

            return (
              <div
                key={project.id}
                className={`reveal reveal-delayed-${delayIndex}`}
              >
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>

        <div className="mt-12 hairline opacity-30" />
      </div>
    </section>
  );
}