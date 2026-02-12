import * as React from "react";
import { ActionBtn } from "@/components";
import { FileX2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ambient grain flex items-center justify-center p-6">
      {/* Glass Card Container */}
      <div 
        className={cn(
          "relative w-full max-w-md overflow-hidden rounded-[2.5rem] border border-white/10 p-12 text-center",
          "bg-white/[0.03] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]",
          "elevate"
        )}
      >
        {/* Ambient Glow behind glass */}
        <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-primary/10 blur-[80px]" />
        
        <div className="relative flex flex-col items-center">
          {/* Icon */}
          <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-white/5 text-primary">
            <FileX2 className="h-8 w-8" />
          </div>

          {/* 404 Kicker */}
          <span className="text-sm font-black tracking-[0.4em] text-primary uppercase mb-2">
            404
          </span>

          <h1 className="text-3xl font-bold tracking-tight text-foreground" data-testid="notfound-title">
            Page not found
          </h1>
          
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed" data-testid="notfound-subtitle">
            The path you’re looking for doesn’t exist. 
            It might have been moved or deleted.
          </p>

          {/* Centered Buttons - Ready for React Router */}
          <div className="mt-10 flex flex-col w-full gap-3">
            {/* Wrap this ActionBtn with <Link to="/"> from react-router-dom later */}
            <ActionBtn 
              variant="primary" 
              className="w-full justify-center" 
              data-testid="notfound-home-btn"
              onClick={() => {}} // Handle navigation here
            >
              Go home
            </ActionBtn>

            <ActionBtn
              variant="secondary"
              className="w-full justify-center"
              // onClick={() => window.history.back()}
              data-testid="notfound-back"
              rightIcon="none"
            >
              Go back
            </ActionBtn>
          </div>
        </div>
      </div>
    </div>
  );
}