import * as React from "react";
import { ActionBtn, ProfileCard } from "..";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";
import { portfolioData } from "@/utils/portfolioData";

function Banner() {
  const { banner } = portfolioData;

  const handlePrimary = () => {
    const el = document.querySelector("#projects");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSecondary = () => {
    const el = document.querySelector("#contact");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleScrollHint = () => {
    const el = document.querySelector("#about");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="banner" className="relative ">
      <div className="container-pad pt-8 sm:pt-10 md:pt-14 lg:pt-16">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">

          {/* Left Content Column */}
          <div className="lg:col-span-7">
            <div className="reveal" data-testid="hero-left">
              <Badge
                className="rounded-full border-border/70 bg-white/5 text-foreground/90 px-4 py-1.5"
                data-testid="hero-kicker"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {banner.badge}
                </span>
              </Badge>

              <h1
                className="mt-6 text-balance text-4xl sm:text-5xl md:text-6xl leading-[1.05]"
                data-testid="hero-headline"
              >
                {banner.title}
              </h1>

              <p
                className="mt-5 max-w-2xl text-pretty text-base sm:text-lg text-muted-foreground leading-relaxed"
                data-testid="hero-subtitle"
              >
                {banner.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center">
                <ActionBtn variant="primary" onClick={handlePrimary}>
                  See my work
                </ActionBtn>
                <ActionBtn variant="secondary" onClick={handleSecondary} rightIcon="none">
                  Contact me
                </ActionBtn>
              </div>

              {/* Pills / Tags Section */}
              <div className="mt-10 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                {banner.pills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/3 px-3 py-1.5 text-white"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              {/* Scroll Hint */}
              <button
                onClick={handleScrollHint}
                className="bg-slate-900 mt-10 inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-semibold text-foreground/70 hover:text-foreground hover:bg-white/5 focus-ring transition-all duration-300"
              >
                <ArrowDown className="h-4 w-4" />
                Explore
              </button>
            </div>
          </div>

          {/* Right Profile Card Column */}
          <div className="lg:col-span-5 reveal reveal-delayed-2">
            <ProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;