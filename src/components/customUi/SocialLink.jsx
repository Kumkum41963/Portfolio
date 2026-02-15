import { cn } from "@/lib/utils";

function SocialLink({ href, icon, label, testId, isMail = false }) {
    return (
        <a
            href={href}
            target={isMail ? "_self" : "_blank"} // opens link in same tab : in other tab
            rel="noopener noreferrer" // security protocol incase hacker tries to access our page from window
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

export default SocialLink