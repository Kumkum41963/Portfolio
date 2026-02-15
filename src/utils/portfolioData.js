import {
    Terminal, Globe, Search, Mail, Phone, MapPin, Activity
} from "lucide-react";
import { nanoid } from 'nanoid';

export const portfolioData = {
    banner: {
        badge: "Portfolio",
        title: "Crafting digital experiences with calm precision.",
        subtitle: "I build thoughtfully designed, production-ready interfaces—clean architecture, crisp typography, and motion that feels intentional.",
        pills: ["Full Stack", "Design engineering", "Performance"]
    },

    about: {
        badge: "About Me",
        heading: {
            regular: "Curious about the",
            italic: "full cycle",
            suffix: "of development."
        },
        bio: "I am an aspiring software engineer focused on the fundamentals. Rather than just making things 'look pretty', I enjoy understanding how the server talks to the database and how to write code that other developers can actually read.",
        principles: [
            "Build it once to learn it, rebuild it to optimize it.",
            "Clear documentation is as important as clear code.",
            "Never stop asking 'why' a specific tool is being used.",
        ],
        focusItems: [
            { icon: Terminal, title: "Logic & Scripting", desc: "Focusing on clean, readable JavaScript and understanding how data flows through the backend.", testId: "about-focus-logic" },
            { icon: Globe, title: "Full Stack Flow", desc: "Connecting databases to the UI, ensuring that APIs are reliable and easy to consume.", testId: "about-focus-flow" },
            { icon: Search, title: "Problem Solving", desc: "A dedication to deep-diving into documentation and debugging until the root cause is found.", testId: "about-focus-debugging" },
        ],
        growth: {
            stackDesc: "Currently deepening my knowledge in Node.js runtime, exploring Relational Database Design, and learning how to deploy robust applications using modern CI/CD workflows.",
            stats: [
                { label: "Daily", sub: "Commits & Learning", value: "Daily" },
                { label: "100%", sub: "Commitment to Growth", value: "100%" }
            ]
        }
    },

    skills: {
        badge: "Skills and Technologies",
        title: "Technical Arsenal",
        subtitle: "Focusing on modern frameworks and reliable backend practices.",
        learning: "System Design · PostgreSQL Optimization",
        categories: [
            {
                title: "Development",
                description: "Building the core logic and user interfaces.",
                items: [
                    { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
                    { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
                    { name: "TailwindCSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
                    { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" }
                ]
            },
            {
                title: "Data & Ops",
                description: "Managing persistence and reliability.",
                items: [
                    { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
                    { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
                    { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
                    { name: "Vite", logo: "https://cdn.simpleicons.org/vite/646CFF" }
                ]
            },
            {
                title: "Design",
                description: "Bridging concepts and code.",
                items: [
                    { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
                    { name: "Design Systems", logo: "custom-ui-icon" }, // Fallback for non-brand icons
                    { name: "UI Systems", logo: "custom-ui-icon" }
                ]
            },
        ]
    },

    projects: [
        {
            id: nanoid(),
            title: "RESTful Task Engine",
            description: "A Node.js backend exploring CRUD operations.",
            tags: ["Node.js", "Express", "PostgreSQL"],
            links: { live: "#", source: "#" }, // Matches your component
        },
        {
            id: nanoid(),
            title: 'Nexus - Social Media Engine',
            description: 'A real-time social networking platform featuring instant messaging and post interactions.',
            tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
            links: {
                live: 'https://nexus-demo.com',
                source: 'https://github.com/yourusername/nexus'
            },
        },
        {
            id: nanoid(),
            title: 'CryptoVault Dashboard',
            description: 'A sleek cryptocurrency tracking dashboard using live API data.',
            tags: ['TypeScript', 'Next.js', 'Chart.js', 'Tailwind CSS'],
            links: {
                live: 'https://cryptovault-live.com',
                source: 'https://github.com/yourusername/cryptovault'
            },
        },
        {
            id: nanoid(),
            title: 'EcoStore E-Commerce',
            description: 'A full-stack sustainable shopping platform with Stripe payment integration.',
            tags: ['PostgreSQL', 'Express', 'React', 'Stripe API'],
            links: {
                live: 'https://ecostore-shop.com',
                source: 'https://github.com/yourusername/ecostore'
            },
        }
    ],

    contact: {
        badge: "Connect",
        title: "Contact",
        subtitle: "If you’re building something thoughtful and need design-forward engineering, I’d love to hear about it.",
    }
};