import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function SiteHeader({ right }: { right?: ReactNode }) {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground">
            ▶
          </span>
          <span className="hidden sm:inline">Video Speed Reader</span>
        </Link>
        {right}
      </div>
    </header>
  );
}
