
import * as React from "react";
import { cn } from "@/lib/utils";
import profileImg from "@/assets/profile.png";
import {Sparkles} from 'lucide-react'

function ProfileCard() {
    const rings = [0, 45, 90, 135]; // Angles for the 4 ovals

    return (
        <div className="group relative flex h-[500px] w-[500px] items-center justify-center">

            {/* --- THE 4 TURQUOISE OVALS --- */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {rings.map((angle, i) => (
                    <div
                        key={i}
                        className={cn(
                            "absolute h-[115%] w-[38%] rounded-[100%] border border-turquoise/30",
                            "transition-all duration-700 group-hover:border-turquoise group-hover:shadow-[0_0_20px_rgba(64,224,208,0.5)]",
                            i % 2 === 0 ? "animate-[orbit_10s_linear_infinite]" : "animate-[orbit_12s_linear_infinite_reverse]",
                            "group-hover:animate-[orbit_4s_linear_infinite]"
                        )}
                        style={{ transform: `rotate(${angle}deg)` }}
                    />
                ))}
            </div>

            {/* --- 3 FLOATING SPARKLES WITH SHADOWS --- */}
            {/* Sparkle 1: Top Left */}
            <div className="absolute top-16 left-24 animate-bounce">
                <Sparkles className="h-6 w-6 text-gray-300 drop-shadow-md" />
                <div className="mt-2 h-1 w-4 bg-black/20 blur-[2px] rounded-full animate-float-shadow" />
            </div>

            {/* Sparkle 2: Mid Right */}
            <div className="absolute top-1/2 -right-2 animate-bounce [animation-delay:0.5s]">
                <Sparkles className="h-5 w-5 text-gray-300 drop-shadow-md" />
                <div className="mt-2 h-1 w-3 bg-black/20 blur-[2px] rounded-full animate-float-shadow" />
            </div>

            {/* Sparkle 3: Bottom Left */}
            <div className="absolute bottom-20 left-10 animate-bounce [animation-delay:1s]">
                <Sparkles className="h-7 w-7 text-white/80 drop-shadow-md" />
                <div className="mt-2 h-1 w-5 bg-black/20 blur-[2px] rounded-full animate-float-shadow" />
            </div>

            {/* --- THE NUCLEUS (Central Image) --- */}
            <div
                className={cn(
                    "relative h-56 w-56 rounded-full border border-turquoise/20",
                    "bg-[linear-gradient(180deg,hsl(var(--card)/0.9),hsl(var(--card)/0.6))]",
                    "shadow-[0_0_80px_-20px_rgba(64,224,208,0.4)] flex items-center justify-center overflow-hidden",
                    "transition-all duration-500 group-hover:scale-105 group-hover:border-turquoise/40",
                    "z-10"
                )}
            >
                {/* Glow behind photo */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(7, 8, 8, 0.2),transparent_70%)]" />

                <div className="h-40 w-40 rounded-full border border-white/10 overflow-hidden shadow-2xl bg-black/20">
                    <img
                        src={profileImg}
                        alt="Profile"
                        className="h-full w-full object-cover"
                        onError={(e) => (e.currentTarget.src = "https://avatar.vercel.sh/user")}
                    />
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(26, 24, 24, 0.1),transparent)] pointer-events-none" />
            </div>
        </div>
    );
}

export default ProfileCard