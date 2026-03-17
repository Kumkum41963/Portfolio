import * as React from "react";
import { cn } from "@/lib/utils";
import profileImg from "@/assets/profile.png";
import { Sparkles } from 'lucide-react';

const innerSkills = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
];

const outerSkills = [
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Render", icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/render.svg" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" }
];

function ProfileCard() {
    return (
        <div className="group/main relative flex h-[500px] w-[450px] items-center justify-center overflow-visible">
            
            <div className="absolute h-[300px] w-[300px] rounded-full border border-turquoise/20 pointer-events-none" />
            <div className="absolute h-[500px] w-[500px] rounded-full border border-turquoise/10 pointer-events-none" />

            <div className="absolute inset-0 animate-[spin_25s_linear_infinite] group-hover/main:[animation-play-state:paused] pointer-events-none z-30">
                {innerSkills.map((skill, i) => {
                    const angle = (i * 360) / innerSkills.length;
                    return (
                        <div
                            key={skill.name}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={{
                                transform: `rotate(${angle}deg) translateY(-150px) rotate(-${angle}deg)`
                            }}
                        >
                            <div className="relative group/icon animate-[spin_25s_linear_infinite_reverse] group-hover/main:[animation-play-state:paused] pointer-events-auto">
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 rounded bg-slate-900 px-2 py-1 text-[10px] text-turquoise border border-turquoise/30 transition-all group-hover/icon:scale-100 z-[100] whitespace-nowrap shadow-xl">
                                    {skill.name}
                                </span>
                                
                                <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/30 p-2 backdrop-blur-md transition-all hover:scale-125 hover:border-turquoise hover:bg-white/40 shadow-lg cursor-pointer">
                                    <img src={skill.icon} alt={skill.name} className="h-full w-full object-contain brightness-90 contrast-125" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="absolute inset-0 animate-[spin_45s_linear_infinite_reverse] group-hover/main:[animation-play-state:paused] pointer-events-none z-20">
                {outerSkills.map((skill, i) => {
                    const angle = (i * 360) / outerSkills.length;
                    return (
                        <div
                            key={skill.name}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={{
                                transform: `rotate(${angle}deg) translateY(-250px) rotate(-${angle}deg)`
                            }}
                        >
                            <div className="relative group/icon animate-[spin_45s_linear_infinite] group-hover/main:[animation-play-state:paused] pointer-events-auto">
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 rounded bg-slate-800 px-2 py-1 text-[10px] text-white border border-white/20 transition-all group-hover/icon:scale-100 z-[100] whitespace-nowrap shadow-xl">
                                    {skill.name}
                                </span>

                                <div className="h-10 w-10 rounded-lg bg-white/10 border border-white/20 p-2 backdrop-blur-sm transition-all hover:scale-125 hover:border-turquoise hover:bg-white/30 shadow-md cursor-pointer">
                                    <img src={skill.icon} alt={skill.name} className="h-full w-full object-contain brightness-90 contrast-125" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="relative h-44 w-44 rounded-full border border-turquoise/20 z-40 bg-slate-900 shadow-[0_0_60px_-15px_rgba(64,224,208,0.3)] flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover/main:scale-105">
                <div className="h-32 w-32 rounded-full overflow-hidden border border-white/5 bg-black/40 shadow-inner">
                    <img src={profileImg} alt="Profile" className="h-full w-full object-cover" />
                </div>
            </div>

            {/* --- THREE SPARKLES --- */}
            <div className="absolute top-[15%] left-[20%] animate-pulse pointer-events-none">
                <Sparkles className="h-5 w-5 text-turquoise" />
            </div>
            <div className="absolute bottom-[20%] right-[15%] animate-pulse delay-700 pointer-events-none">
                <Sparkles className="h-4 w-4 text-white opacity-70" />
            </div>
            <div className="absolute top-[50%] -right-4 animate-bounce delay-300 pointer-events-none">
                <Sparkles className="h-3 w-3 text-turquoise opacity-60" />
            </div>
        </div>
    );
}

export default ProfileCard;