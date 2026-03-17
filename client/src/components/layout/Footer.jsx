import * as React from "react";
import { SocialLinksBar } from "..";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      data-testid="footer"
    >
      <div className="container-pad py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Brand & Description */}
          <div className="flex flex-col gap-4">
            <div className="text-lg font-bold tracking-tight text-foreground" data-testid="footer-brand">
              Kumkum
            </div>
            <p
              className="text-sm text-muted-foreground max-w-sm leading-relaxed"
              data-testid="footer-description"
            >
              Full-stack developer specializing in modern web technologies, performance, and clean architecture.
              Open to opportunities where design meets scalable engineering.
            </p>
          </div>

          {/* Social Links & Copyright */}
          <div className="flex flex-col gap-4 md:items-end md:justify-between">
            <SocialLinksBar />
            <div className="text-xs text-muted-foreground/60 font-medium" data-testid="footer-copyright">
              © {year} Kumkum · Made With Love and Eye Pain.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer