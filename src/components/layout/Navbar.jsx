import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { ActionBtn } from "..";

// Navigation items configuration - defines all portfolio sections
const navItems = [
  { label: "About", href: "#about", testId: "nav-about" },
  { label: "Skills", href: "#skills", testId: "nav-skills" },
  { label: "Projects", href: "#projects", testId: "nav-projects" },
  { label: "Contact", href: "#contact", testId: "nav-contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll position to apply visual changes (blur, background)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll to anchor link and close mobile menu
  const handleNavClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handlePrimary = () => handleNavClick("#projects");
  const handleSecondary = () => handleNavClick("#contact");

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-border/40 transition-all duration-300",
        scrolled ? "bg-background/55 backdrop-blur-xl" : "bg-transparent",
      )}
      data-testid="navbar"
    >
      <div className="container-pad">

        {/* Desktop Navigation */}
        <div className="flex items-center justify-between py-4 md:py-5">
          {/* Banner Btn */}
          <button
            onClick={() => handleNavClick("#banner")}
            className="group inline-flex items-center gap-3 focus-ring rounded-2xl"
            data-testid="brand"
          >
            {/* Lightning Bolt Logo */}
            <span className="relative grid h-10 w-10 place-items-center rounded-2xl border border-border/60 bg-[linear-gradient(180deg,hsl(var(--card)/0.9),hsl(var(--card)/0.55))] shadow-[0_18px_55px_hsl(228_60%_4%/0.45)]">
              <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_0_6px_hsl(var(--primary)/0.12)]" />
            </span>
            <div className="leading-tight text-left">
              <div className="font-semibold tracking-tight">Kumkum</div>
              <div className="text-xs text-muted-foreground">
                Aspiring Software Engineer
              </div>
            </div>
          </button>

          {/* All Nav Items */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="rounded-2xl px-4 py-2 text-sm font-semibold text-foreground/80 hover:text-foreground hover:bg-white/5 focus-ring transition-all duration-300"
                data-testid={item.testId}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Btn for contact and projects */}
          <div className="hidden md:flex items-center gap-3">

            <ActionBtn
              variant="secondary"
              onClick={handleSecondary}
              data-testid="nav-cta-secondary"
              rightIcon="none"
            >
              Get in touch
            </ActionBtn>

            <ActionBtn
              variant="primary"
              onClick={handlePrimary}
              data-testid="nav-cta-primary"
            >
              {/* the passed children to child component */}
              View work
            </ActionBtn>

          </div>

          <button
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-card/40 backdrop-blur focus-ring transition-all duration-300 hover:bg-card/55"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            data-testid="nav-mobile-toggle"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Movile Navigation */}
        {open ?
          (
            <div
              className="md:hidden pb-5"
              data-testid="nav-mobile-panel"
              role="dialog"
              aria-modal="true"
            >
              <div className="glass rounded-3xl p-3">
                <div className="flex flex-col gap-1">
                  {/* Nav Items in Mobile */}
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="rounded-2xl px-4 py-3 text-left text-sm font-semibold text-foreground/90 hover:bg-white/5 focus-ring transition-all duration-300"
                      data-testid={`${item.testId}-mobile`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Action Btn */}
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <ActionBtn
                    variant="secondary"
                    onClick={handleSecondary}
                    data-testid="nav-mobile-cta-secondary"
                    rightIcon="none"
                  >
                    Get in touch
                  </ActionBtn>
                  <ActionBtn
                    variant="primary"
                    onClick={handlePrimary}
                    data-testid="nav-mobile-cta-primary"
                  >
                    View work
                  </ActionBtn>
                </div>
              </div>
            </div>
          )
          : null}

      </div>
    </header>
  );
}
