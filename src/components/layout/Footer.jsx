// import * as React from "react";
// import { Github, Linkedin, Mail } from "lucide-react";

// export default function Footer() {
//   const year = new Date().getFullYear();

//   // Open link in new window with security measures
//   const open = (url) => window.open(url, "_blank", "noopener,noreferrer");

//   return (
//     <footer className="relative" data-testid="footer">
//       <div className="container-pad py-12 sm:py-14">
//         <div className="rounded-3xl border border-border/60 bg-white/3 p-6 sm:p-7">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
//             <div>
//               <div className="text-sm font-semibold" data-testid="footer-brand">
//                 Calmfolio
//               </div>
//               <div
//                 className="mt-2 text-sm text-muted-foreground max-w-xl leading-relaxed"
//                 data-testid="footer-description"
//               >
//                 A static, design-forward portfolio layout with premium motion,
//                 depth, and strong typography hierarchy.
//               </div>
//               <div className="mt-4 text-xs text-muted-foreground" data-testid="footer-copyright">
//                 © {year} · All rights reserved
//               </div>
//             </div>

//             <div className="flex items-center gap-2" data-testid="footer-social">
//               <button
//                 onClick={() => open("https://github.com/")}
//                 className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-white/3 hover:bg-white/6 focus-ring transition-all duration-300"
//                 data-testid="footer-github"
//                 aria-label="GitHub"
//               >
//                 <Github className="h-5 w-5" />
//               </button>
//               <button
//                 onClick={() => open("https://www.linkedin.com/")}
//                 className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-white/3 hover:bg-white/6 focus-ring transition-all duration-300"
//                 data-testid="footer-linkedin"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin className="h-5 w-5" />
//               </button>
//               <button
//                 onClick={() => {
//                   window.location.href = "mailto:hello@example.com";
//                 }}
//                 className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-white/3 hover:bg-white/6 focus-ring transition-all duration-300"
//                 data-testid="footer-email"
//                 aria-label="Email"
//               >
//                 <Mail className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


import * as React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

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
              A design-forward portfolio layout with premium motion and depth. 
              Built for developers who value aesthetics and performance.
            </p>
          </div>

          {/* Social Links & Copyright */}
          <div className="flex flex-col gap-4 md:items-end md:justify-between">
            <div className="flex items-center gap-3" data-testid="footer-social">
              <SocialLink 
                href="https://github.com/" 
                icon={<Github className="h-5 w-5" />} 
                label="GitHub" 
                testId="footer-github"
              />
              <SocialLink 
                href="https://twitter.com/" 
                icon={<Twitter className="h-5 w-5" />} 
                label="Twitter" 
                testId="footer-twitter"
              />
              <SocialLink 
                href="https://linkedin.com/" 
                icon={<Linkedin className="h-5 w-5" />} 
                label="LinkedIn" 
                testId="footer-linkedin"
              />
              <SocialLink 
                href="mailto:hello@example.com" 
                icon={<Mail className="h-5 w-5" />} 
                label="Email" 
                testId="footer-email"
                isMail
              />
            </div>
            
            <div className="text-xs text-muted-foreground/60 font-medium" data-testid="footer-copyright">
              © {year} Kumkum · Made With Love and Back Pain.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/**
 * Sub-component for Social Links with hover logic
 */
function SocialLink({ href, icon, label, testId, isMail = false }) {
  return (
    <a
      href={href}
      target={isMail ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-xl",
        "border border-border/50 bg-white/3 text-muted-foreground",
        "transition-all duration-300 ease-out",
        "hover:border-primary/50 hover:bg-primary/5 hover:text-primary hover:-translate-y-1",
        "focus-ring"
      )}
      data-testid={testId}
      aria-label={label}
    >
      {icon}
    </a>
  );
}

export default  Footer