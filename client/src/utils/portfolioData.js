import {
    Terminal, Globe, Search, Mail, Phone, MapPin, Activity,
    Dumbbell, BookOpen, Music, MonitorPlay
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
            regular: "Engineering with",
            italic: "Curiosity",
            suffix: "& Intent"
        },
        bio: "I am an aspiring software engineer focused on the fundamentals. Rather than just making things 'look pretty', I enjoy understanding how the server talks to the database and how to write code that other developers can actually read.",
    },

    education: [
        {
            institution: "Indira Gandhi Delhi Technical University For Women",
            degree: "B. Tech in Electronics and Communication Engineering",
            duration: "2023 – 2027",
            location: "Delhi, India",
            result: "CGPA: 8.34"
        },
        {
            institution: "Greenway Modern Sr. Sec, XII",
            degree: "CBSE Senior Secondary",
            duration: "2022 – 2023",
            location: "Delhi, India",
            result: "Grade: 91%"
        },
        {
            institution: "Greenway Modern Sr. Sec, X",
            degree: "CBSE Secondary Education",
            duration: "2020 – 2021",
            location: "Delhi, India",
            result: "Grade: 95%"
        }
    ],

    interests: {
        description: "Outside the technical realm, I maintain a disciplined lifestyle focused on physical fitness and continuous learning. I am an avid reader and writer, finding balance through literature and music. My creative downtime is often spent exploring visual storytelling through anime and graphic novels, which fuels my appreciation for complex narratives and character design.",
        items: [
            { icon: Dumbbell, label: "Fitness" },
            { icon: BookOpen, label: "Literature" },
            { icon: Music, label: "Acoustics" },
            { icon: MonitorPlay, label: "Visual Media" }
        ]
    },

    growth: {
        stats: [
            { label: "Daily", sub: "Commits & Learning", value: "Daily" },
            { label: "100%", sub: "Available", value: "100%" }
        ]
    },

    skills: {
        badge: "Skills and Technologies",
        title: "Technical Arsenal",
        subtitle: "Explore the technicals skills acquired in my journey",
        items: [
            { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
            { name: "Express", logo: "https://cdn.simpleicons.org/express/000000" },
            { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
            { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
            { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
            { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
            { name: "HTML5", logo: "https://cdn.simpleicons.org/html5/E34F26" },
            { name: "CSS3", logo: "https://cdn.simpleicons.org/css3/1572B6" },
            { name: "TailwindCSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
            { name: "Vite", logo: "https://cdn.simpleicons.org/vite/646CFF" },
            { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
            { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
            { name: "GitHub", logo: "https://cdn.simpleicons.org/github/FFFFFF" },
            { name: "Postman", logo: "https://cdn.simpleicons.org/postman/FF6C37" },
            { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/FFFFFF" },
            { name: "Render", logo: "https://cdn.simpleicons.org/render/46E3B7" },
            { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
            { name: "Canva", logo: "https://cdn.simpleicons.org/canva/00C4CC" },
        ]
    },

    projects: [
        {
            id: nanoid(),
            title: "LabSync: AI-Streamlined Lab Support",
            description: "An AI-powered routing system using Gemini API to automate ticket summarization, priority tagging, and task allocation for lab support.",
            image: "/project-labsync.png", 
            tags: ["Node.js", "React", "MongoDB", "Inngest", "Gemini API"],
            links: { live: "#", source: "#" },
        },
        {
            id: nanoid(),
            title: "Camp-Around: Campus Discovery",
            description: "A full-stack platform for discovering and reviewing local hangout spots with real-time tracking and category-based filtering.",
            image: "/project-camp.png", 
            tags: ["Node.js", "Express", "MongoDB", "EJS"],
            links: { live: "#", source: "#" },
        },
        {
            id: nanoid(),
            title: "Dossier Portfolio",
            description: "A minimal, engineering-focused personal portfolio featuring a technical log aesthetic, dynamic GitHub integration, and a sleek dark UI.",
            image: "/project-portfolio.png", 
            tags: ["React", "TailwindCSS", "Framer Motion", "Lucide"],
            links: { live: "#", source: "#" },
        }
    ],

    contact: {
        badge: "Connect",
        title: "Contact",
        subtitle: "If you’re building something thoughtful and need design-forward engineering, I’d love to hear about it.",
    }
};