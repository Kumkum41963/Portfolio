import * as React from "react";
import { ProjectCard } from "..";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: "personal-api",
    title: "RESTful Task Engine",
    description: "A Node.js backend exploring CRUD operations, JWT auth, and PostgreSQL integration.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
    links: { live: "#", source: "#" },
  },
  {
    id: "dev-dash",
    title: "Developer Utility Hub",
    description: "A React application focused on API consumption, local storage persistence, and clean state management.",
    tags: ["React", "Vite", "Zustand", "Tailwind"],
    links: { live: "#", source: "#" },
  },
  {
    id: "component-lab",
    title: "The UI Playground",
    description: "A dedicated space for building and testing reusable UI components with a focus on accessibility.",
    tags: ["React", "Radix UI", "Framer Motion"],
    links: { live: "#", source: "#" },
  },
];

function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="container-pad py-14 sm:py-16 md:py-20">

        {/* Top Badge */}
        <div className="mb-6 reveal">
          <Badge
            className="rounded-full border-border/70 bg-white/5 text-foreground/90 px-4 py-1.5"
          >
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_#40e0d0]" />
              Projects
            </span>
          </Badge>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
          <div>
            <h2 className="text-3xl sm:text-4xl font-medium uppercase tracking-tight">
              <p>My Work</p>
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
              Practical applications built to explore specific technologies.
              Each project represents a step forward in my journey to mastering full-stack engineering.
            </p>
          </div>
        </div>

        {/* Simplified Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <div key={p.id} className={`reveal reveal-delayed-${idx + 1}`}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>

        <div className="mt-12 hairline opacity-30" />
      </div>
    </section>
  );
}

export default Projects