"use client";

import { tap } from "@/lib/haptics";

interface LinkCardProps {
  readonly icon: string;
  readonly label: string;
  readonly description?: string;
  readonly href?: string;
  readonly onClick?: () => void;
  readonly comingSoon?: boolean;
  readonly featured?: boolean;
}

export function LinkCard({
  icon,
  label,
  description,
  href,
  onClick,
  comingSoon = false,
  featured = false,
}: LinkCardProps) {
  const content = (
    <>
      <span className="text-2xl" role="img" aria-hidden="true">
        {icon}
      </span>
      <div className="flex flex-1 flex-col gap-0.5 text-left">
        <span className={`font-semibold leading-tight ${featured ? "text-primary-foreground" : "text-card-foreground"}`}>
          {label}
        </span>
        {description && (
          <span className={`text-sm ${featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{description}</span>
        )}
      </div>
      {comingSoon ? (
        <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground">
          Soon
        </span>
      ) : (
        <svg
          className={`h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5 ${featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      )}
    </>
  );

  const baseClass = featured
    ? "group flex items-center gap-4 rounded-2xl border-2 border-primary/30 bg-gradient-to-r from-primary to-[#e84e8a] p-4 transition-all hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] animate-pulse-glow"
    : "group flex items-center gap-4 rounded-2xl border-2 border-border bg-card p-4 transition-all hover:border-foreground/30 hover:shadow-lg active:translate-y-0 hover-lift";

  if (comingSoon) {
    return (
      <div className={`${baseClass} cursor-default opacity-70`}>{content}</div>
    );
  }

  if (onClick) {
    return (
      <button type="button" className={baseClass} onClick={() => { tap(); onClick(); }}>
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      className={baseClass}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      onClick={() => tap()}
    >
      {content}
    </a>
  );
}
