import { nanoid } from "nanoid";

export const projectsList = [
    {
        id: nanoid(),
        title: 'Nexus - Social Media Engine',
        description: 'A real-time social networking platform featuring instant messaging, post interactions, and a global activity feed.',
        skills: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
        timestamp: 'Jan 2026',
        github: 'https://github.com/yourusername/nexus',
        demo: 'https://nexus-demo.com',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: nanoid(),
        title: 'CryptoVault Dashboard',
        description: 'A sleek cryptocurrency tracking dashboard using live API data to visualize market trends and portfolio performance.',
        skills: ['TypeScript', 'Next.js', 'Chart.js', 'Tailwind CSS'],
        timestamp: 'Dec 2025',
        github: 'https://github.com/yourusername/cryptovault',
        demo: 'https://cryptovault-live.com',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: nanoid(),
        title: 'EcoStore E-Commerce',
        description: 'A full-stack sustainable shopping platform with Stripe payment integration and an admin inventory management system.',
        skills: ['PostgreSQL', 'Express', 'React', 'Stripe API'],
        timestamp: 'Nov 2025',
        github: 'https://github.com/yourusername/ecostore',
        demo: 'https://ecostore-shop.com',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop'
    }
];