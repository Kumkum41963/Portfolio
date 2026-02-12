import * as React from "react";
import { ActionBtn } from "..";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container-pad py-14 sm:py-16 md:py-20">

        {/* Badge kicker */}
        <div className="mb-8 reveal">
          <Badge
            className="rounded-full border-border/70 bg-white/5 text-foreground/90 px-4 py-1.5"
          >
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_#40e0d0]" />
              Connect
            </span>
          </Badge>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Info Cards with Hover Effects */}
          <div className="lg:col-span-5 reveal">
            <h2 className="text-3xl sm:text-4xl">Contact</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed max-w-xl">
              If you’re building something thoughtful and need design-forward
              engineering, I’d love to hear about it.
            </p>

            <div className="mt-7 space-y-3">
              {/* elevat-hover class handles the lift and shadow */}
              <button className="w-full rounded-3xl border border-border/60 bg-white/3 p-5 text-left transition-all duration-300 elevate-hover hover:border-primary/40 focus-ring group">
                <div className="flex items-start gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-border/60 bg-white/4 group-hover:bg-primary/10 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Email</div>
                    <div className="mt-1 text-sm text-muted-foreground">hello@example.com</div>
                    <div className="mt-2 text-xs text-primary/60 font-medium opacity-0 group-hover:opacity-100 transition-opacity">Click to copy</div>
                  </div>
                </div>
              </button>

              <button className="w-full rounded-3xl border border-border/60 bg-white/3 p-5 text-left transition-all duration-300 elevate-hover hover:border-primary/40 focus-ring group">
                <div className="flex items-start gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-border/60 bg-white/4 group-hover:bg-primary/10 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Phone</div>
                    <div className="mt-1 text-sm text-muted-foreground">+1 (555) 010-0200</div>
                    <div className="mt-2 text-xs text-primary/60 font-medium opacity-0 group-hover:opacity-100 transition-opacity">Click to copy</div>
                  </div>
                </div>
              </button>

              <div className="w-full rounded-3xl border border-border/60 bg-white/3 p-5">
                <div className="flex items-start gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-border/60 bg-white/4">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Location</div>
                    <div className="mt-1 text-sm text-muted-foreground">Remote · Flexible time zones</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dark Form with Focus Glows */}
          <div className="lg:col-span-7 reveal reveal-delayed-2 mt-6">
            <div className="rounded-3xl border border-border/65 bg-[linear-gradient(180deg,hsl(var(--card)/0.92),hsl(var(--card)/0.58))] p-6 sm:p-7 elevate">
              <div className="text-sm font-semibold">Send a message</div>
              <p className="mt-2 text-sm text-muted-foreground">Feel free to reach out regarding collaborations.</p>

              <form className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground/80">Name</label>
                    <Input
                      placeholder="Your name"
                      className="bg-black/20 border-border/40 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground/80">Email</label>
                    <Input
                      placeholder="you@company.com"
                      className="bg-black/20 border-border/40 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-foreground/80">Message</label>
                  <Textarea
                    placeholder="Tell me what you're building..."
                    className="min-h-[140px] bg-black/20 border-border/40 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <ActionBtn type="submit" variant="primary">
                    Send message
                  </ActionBtn>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}