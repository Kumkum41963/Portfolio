import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, FileText } from "lucide-react";
import { ActionBtn } from "..";
import { href, useNavigate } from "react-router-dom";

// Only internal scroll sections
const navItems = [
  { label: "About", href: "#about", testId: "nav-about" },
  { label: "Github", href: "#github", testId: "nav-github" },
  { label: "Skills", href: "#skills", testId: "nav-skills" },
  { label: "Projects", href: "#projects", testId: "nav-projects" },
  { label: "Contact", href: "#contact", testId: "nav-contact" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false); // tracks the state oof mobile menu
  const [scrolled, setScrolled] = useState(false); // tracks if scrolling has been done  by comparing with some threshold (100px here)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setOpen(false)

    const isHomePage = window.location.pathname === '/';

    if (isHomePage) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } else {
      navigate(`/${href}`)
    }
  }


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
        <div className="flex items-center justify-between py-4 md:py-5">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick("#banner")}
            className="group inline-flex items-center gap-3 focus-ring rounded-2xl"
          >
            <span className="relative grid h-10 w-10 place-items-center rounded-2xl border border-border/60 bg-[linear-gradient(180deg,hsl(var(--card)/0.9),hsl(var(--card)/0.55))] shadow-lg group-hover:border-primary/50 transition-colors">
              {/* The Brackets Label */}
              <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-40 transition-opacity">
                <span className="text-[14px] font-mono font-bold tracking-tighter text-foreground">
                  {"</>"}
                </span>
              </div>
            </span>
            <div className="leading-tight text-left">
              <div className="font-semibold tracking-tight text-foreground">Kumkum</div>
              <div className="text-xs text-muted-foreground">Aspiring Software Engineer</div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="rounded-2xl px-4 py-2 text-sm font-semibold text-foreground/80 hover:text-foreground hover:bg-white/5 transition-all duration-300"
              >
                {item.label}
              </button>
            ))}

            {/* The Dedicated Resume Button */}
            <button
              onClick={() => navigate('/resume')}
              className="flex items-center gap-2 ml-2 bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-xl text-xs font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <FileText size={14} />
              Resume
            </button>
          </nav>

          {/* Restored Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <ActionBtn
              variant="secondary"
              onClick={handleSecondary}
              rightIcon="none"
            >
              Get in touch
            </ActionBtn>

            <ActionBtn
              variant="primary"
              onClick={handlePrimary}
            >
              View work
            </ActionBtn>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-card/40 backdrop-blur"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {open && (
          <div className="md:hidden pb-5 animate-reveal">
            <div className="glass rounded-3xl p-3">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="rounded-2xl px-4 py-3 text-left text-sm font-semibold text-foreground/90 hover:bg-white/5"
                  >
                    {item.label}
                  </button>
                ))}
                {/* Mobile Resume Link */}
                <button
                  onClick={() => { setOpen(false); navigate('/resume'); }}
                  className="flex items-center gap-2 rounded-2xl px-4 py-3 text-left text-sm font-bold text-primary hover:bg-primary/5"
                >
                  <FileText size={16} />
                  View Resume
                </button>
              </div>

              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <ActionBtn variant="secondary" onClick={handleSecondary} rightIcon="none">
                  Get in touch
                </ActionBtn>
                <ActionBtn variant="primary" onClick={handlePrimary}>
                  View work
                </ActionBtn>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}