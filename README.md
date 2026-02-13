<<<<<<< HEAD
=======
/**
 * Tailwind CSS Configuration
 * 
 * Defines design tokens and theme customization:
 * - Dark mode setup
 * - Custom border radius scale
 * - Color system with CSS variables
 * - Typography scales
 * - Animation definitions
 */

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: ".5625rem", /* 9px */
        md: ".375rem", /* 6px */
        sm: ".1875rem", /* 3px */
      },
      colors: {
        // Flat / base colors (regular buttons)

        turquoise: {
          DEFAULT: "#40e0d0",
          glow: "rgba(64, 224, 208, 0.4)",
        },

        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
          border: "hsl(var(--card-border) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
          border: "hsl(var(--popover-border) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
          border: "var(--primary-border)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
          border: "var(--secondary-border)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
          border: "var(--muted-border)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
          border: "var(--accent-border)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
          border: "var(--destructive-border)",
        },
        ring: "hsl(var(--ring) / <alpha-value>)",
        chart: {
          "1": "hsl(var(--chart-1) / <alpha-value>)",
          "2": "hsl(var(--chart-2) / <alpha-value>)",
          "3": "hsl(var(--chart-3) / <alpha-value>)",
          "4": "hsl(var(--chart-4) / <alpha-value>)",
          "5": "hsl(var(--chart-5) / <alpha-value>)",
        },
        sidebar: {
          ring: "hsl(var(--sidebar-ring) / <alpha-value>)",
          DEFAULT: "hsl(var(--sidebar) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-foreground) / <alpha-value>)",
          border: "hsl(var(--sidebar-border) / <alpha-value>)",
        },
        "sidebar-primary": {
          DEFAULT: "hsl(var(--sidebar-primary) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-primary-foreground) / <alpha-value>)",
          border: "var(--sidebar-primary-border)",
        },
        "sidebar-accent": {
          DEFAULT: "hsl(var(--sidebar-accent) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-accent-foreground) / <alpha-value>)",
          border: "var(--sidebar-accent-border)"
        },
        status: {
          online: "rgb(34 197 94)",
          away: "rgb(245 158 11)",
          busy: "rgb(239 68 68)",
          offline: "rgb(156 163 175)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};





@import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300,400,600,700&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

/* =========================================================
   Dark, professional, editorial-tech palette with depth
   ========================================================= */
:root {
  --font-sans: "Plus Jakarta Sans", ui-sans-serif, system-ui, -apple-system,
    Segoe UI, sans-serif;
  --font-display: "Fraunces", ui-serif, Georgia, serif;

  /* Core */
  --background: 228 26% 8%;
  --foreground: 210 40% 98%;

  /* Surfaces */
  --card: 228 24% 10%;
  --card-foreground: 210 40% 98%;
  --popover: 228 24% 10%;
  --popover-foreground: 210 40% 98%;

  /* Muted */
  --muted: 230 20% 14%;
  --muted-foreground: 218 14% 72%;

  /* Borders / rings */
  --border: 229 18% 18%;
  --input: 229 18% 18%;
  --ring: 190 95% 55%;

  /* Brand */
  --primary: 190 95% 55%;
  --primary-foreground: 228 26% 8%;

  --secondary: 230 20% 14%;
  --secondary-foreground: 210 40% 98%;

  --accent: 261 84% 70%;
  --accent-foreground: 240 10% 7%;

  --destructive: 0 84% 60%;
  --destructive-foreground: 210 40% 98%;

  /* Charts (kept for template compatibility) */
  --chart-1: 190 95% 55%;
  --chart-2: 261 84% 70%;
  --chart-3: 38 92% 62%;
  --chart-4: 158 84% 45%;
  --chart-5: 0 84% 60%;

  --radius: 1rem;

  --shadow-ambient: 0 24px 80px hsl(228 60% 4% / 0.55);
  --shadow-soft: 0 18px 50px hsl(228 60% 4% / 0.45);
  --shadow-lift: 0 12px 30px hsl(228 60% 4% / 0.35);
  --shadow-ring: 0 0 0 1px hsl(var(--border) / 0.7);

  --noise-opacity: 0.08;
}

.dark {
  /* identical (site is dark-first) */
  --background: 228 26% 8%;
  --foreground: 210 40% 98%;
  --card: 228 24% 10%;
  --card-foreground: 210 40% 98%;
  --border: 229 18% 18%;
  --muted: 230 20% 14%;
  --muted-foreground: 218 14% 72%;
  --ring: 190 95% 55%;
  --primary: 190 95% 55%;
  --primary-foreground: 228 26% 8%;
  --accent: 261 84% 70%;
  --accent-foreground: 240 10% 7%;
  --secondary: 230 20% 14%;
  --secondary-foreground: 210 40% 98%;
  --input: 229 18% 18%;
}

@layer base {
  * {
    @apply border-border;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-background text-foreground antialiased;
    font-family: var(--font-sans);
    text-rendering: geometricPrecision;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-display);
    @apply tracking-tight;
  }

  ::selection {
    background: hsl(var(--primary) / 0.25);
  }
}

/* =========================================================
   Ambient background: gradient mesh + subtle grain
   ========================================================= */
@layer utilities {
  .bg-ambient {
    background:
      radial-gradient(1200px 700px at 20% 10%, hsl(190 95% 55% / 0.18), transparent 55%),
      radial-gradient(900px 560px at 85% 20%, hsl(261 84% 70% / 0.16), transparent 58%),
      radial-gradient(900px 700px at 70% 90%, hsl(38 92% 62% / 0.10), transparent 60%),
      linear-gradient(180deg, hsl(228 26% 8%), hsl(228 26% 7%));
  }

  .grain::before {
    content: "";
    pointer-events: none;
    position: fixed;
    inset: 0;
    z-index: 0;
    opacity: var(--noise-opacity);
    mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='260' height='260' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E");
    background-size: 260px 260px;
  }

  .container-pad {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  .glass {
    background: linear-gradient(
      180deg,
      hsl(var(--card) / 0.78),
      hsl(var(--card) / 0.62)
    );
    border: 1px solid hsl(var(--border) / 0.65);
    box-shadow: var(--shadow-soft);
    backdrop-filter: blur(14px);
  }

  .hairline {
    background: linear-gradient(
      90deg,
      transparent,
      hsl(var(--border) / 0.9),
      transparent
    );
    height: 1px;
  }

  .text-balance {
    text-wrap: balance;
  }

  .focus-ring {
    @apply focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/15 focus-visible:border-primary/50;
  }

  .elevate {
    box-shadow: var(--shadow-ring), var(--shadow-lift);
  }

  .elevate-hover {
    transition: transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1),
      box-shadow 260ms cubic-bezier(0.2, 0.8, 0.2, 1),
      border-color 260ms cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .elevate-hover:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-ring), var(--shadow-ambient);
    border-color: hsl(var(--border) / 0.9);
  }

  .reveal {
    animation: reveal 700ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
  }

  .reveal-delayed-1 {
    animation-delay: 90ms;
  }
  .reveal-delayed-2 {
    animation-delay: 180ms;
  }
  .reveal-delayed-3 {
    animation-delay: 270ms;
  }
  .reveal-delayed-4 {
    animation-delay: 360ms;
  }

  @keyframes reveal {
    from {
      opacity: 0;
      transform: translateY(10px);
      filter: blur(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0);
    }
  }
}



well umm so i had merge conflicts because previously i had gitignore and readme files initiated when i created the repo now when new state came that caused conflicts because i didnt pull origin main previously 
>>>>>>> dc3f3f193a7658f096ac1bcc858b615213521090
