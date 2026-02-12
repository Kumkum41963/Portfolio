import * as React from "react";
import {
  CheckCircle2,
  Terminal,
  Globe,
  Search,
  Activity,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const focusItems = [
  {
    icon: Terminal,
    title: "Logic & Scripting",
    desc: "Focusing on clean, readable JavaScript and understanding how data flows through the backend.",
    testId: "about-focus-logic",
  },
  {
    icon: Globe,
    title: "Full Stack Flow",
    desc: "Connecting databases to the UI, ensuring that APIs are reliable and easy to consume.",
    testId: "about-focus-flow",
  },
  {
    icon: Search,
    title: "Problem Solving",
    desc: "A dedication to deep-diving into documentation and debugging until the root cause is found.",
    testId: "about-focus-debugging",
  },
];

const principles = [
  "Build it once to learn it, rebuild it to optimize it.",
  "Clear documentation is as important as clear code.",
  "Never stop asking 'why' a specific tool is being used.",
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="container-pad py-14 sm:py-16 md:py-20">

        {/* Section Header */}
        <div className="mb-8 reveal">
          <Badge
            className="rounded-full border-border/70 bg-white/5 text-foreground/90 px-4 py-1.5"
            data-testid="hero-kicker"
          >
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              About Me
            </span>
          </Badge>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">

          {/* Left Column */}
          <div className="lg:col-span-5 reveal">
            <h2 className="text-3xl sm:text-4xl leading-tight font-medium">
              Curious about the <br />
              <span className="text-primary italic">full cycle</span> of development.
            </h2>

            <p className="mt-2 text-muted-foreground leading-relaxed max-w-md">
              <p> I am an aspiring software engineer focused on the fundamentals.
                Rather than just making things "look pretty", I enjoy understanding
                how the server talks to the database and how to write code that
                other developers can actually read.</p>
            </p>

            {/* Principles Box */}
            <div className="mt-2 rounded-3xl border border-border/65 bg-white/3 p-6 elevate elevate-hover">
              <div className="text-sm font-semibold tracking-wide text-foreground/90 uppercase">
                Learning Mindset
              </div>
              <ul className="mt-4 space-y-3">
                {principles.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 reveal reveal-delayed-2">

            {/* Focus Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {focusItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-3xl border border-border/65 bg-card/40 p-5 hover:border-primary/40 transition-colors">
                    <div className="grid h-10 w-10 place-items-center rounded-xl border border-border/60 bg-white/5 mb-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-sm font-semibold mb-2">{item.title}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Growth Footer */}
            <div className="mt-8 rounded-3xl border border-border/60 bg-white/3 p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div>
                  <div className="text-xs font-bold uppercase tracking-tighter flex items-center gap-2 text-primary">
                    <Activity className="h-3 w-3" />
                    <p>Current Stack</p> <p>&</p> <p>Learning</p>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Currently deepening my knowledge in Node.js runtime,
                    exploring Relational Database Design, and learning how to
                    deploy robust applications using modern CI/CD workflows.
                  </p>
                </div>

                {/* Growth Stats */}
                <div className="grid grid-cols-2 gap-3 min-w-[240px]">
                  <div className="rounded-2xl border border-border/60 bg-card/40 p-4">
                    <div className="text-xl font-bold text-primary">Daily</div>
                    <div className="text-[10px] uppercase font-medium text-muted-foreground">Commits & Learning</div>
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-card/40 p-4">
                    <div className="text-xl font-bold text-primary">100%</div>
                    <div className="text-[10px] uppercase font-medium text-muted-foreground">Commitment to Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}