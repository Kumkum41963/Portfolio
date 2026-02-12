import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Loader2 } from "lucide-react";

/**
 * @typedef {'primary' | 'secondary' | 'ghost'} ActionBtnVariant
 */

/**
 * @typedef {Object} ActionBtnProps
 * @property {ActionBtnVariant} [variant='primary'] - Button style variant
 * @property {boolean} [isPending=false] - Shows loading spinner when true
 * @property {'arrow' | 'none'} [rightIcon='arrow'] - Right icon style
 */

export function ActionBtn({
    className,
    variant = "primary",
    isPending,
    disabled,
    children, // the passed text
    rightIcon = "arrow",
    // when a parent passes anything except for above it gets passed here and causes no future issue
    ...props
}) {

    const base =
        "group relative inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm sm:text-[0.95rem] font-semibold tracking-tight " +
        "transition-all duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/15 " +
        "disabled:opacity-55 disabled:cursor-not-allowed disabled:transform-none";

    // Style variants for different button types - provides consistent UI patterns
    const variants = {
        primary:
            "text-primary-foreground bg-[linear-gradient(135deg,hsl(var(--primary))_0%,hsl(190_95%_48%)_38%,hsl(261_84%_70%)_100%)] " +
            "shadow-[0_18px_50px_hsl(var(--primary)/0.14)] " +
            "hover:shadow-[0_22px_70px_hsl(var(--primary)/0.20)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_14px_45px_hsl(var(--primary)/0.14)]",
        secondary:
            "text-foreground bg-[linear-gradient(180deg,hsl(var(--card)/0.86),hsl(var(--card)/0.62))] " +
            "border border-border/70 shadow-[0_18px_50px_hsl(228_60%_4%/0.45)] " +
            "hover:border-border hover:-translate-y-0.5 hover:shadow-[0_26px_90px_hsl(228_60%_4%/0.55)] active:translate-y-0",
        ghost:
            "text-foreground/90 bg-transparent border border-transparent hover:bg-white/5 hover:border-border/70 active:bg-white/7",
    };

    return (
        <button
            data-testid={props["data-testid"]}
            className={cn(base, variants[variant], className)}
            disabled={disabled || isPending}
            {...props}
        >
            {isPending ? (
                // Loading State
                <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Working…</span>
                </>
            ) : (
                <>
                    <span className="relative">{children}</span>
                    {rightIcon === "arrow" ? (
                        <ArrowUpRight className="h-4 w-4 opacity-90 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    ) : null}
                </>
            )}
        </button>
    );
}

export default ActionBtn