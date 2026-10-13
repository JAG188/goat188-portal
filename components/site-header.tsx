"use client";

import { useEffect, useState } from "react";
import { Flame, Menu, X } from "lucide-react";
import { NAV_LINKS, VIP_ACCESS_HREF } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-void/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#portal-vip" className="flex shrink-0 items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-gold via-gold-deep to-fire shadow-[0_0_18px_rgba(239,68,68,0.65)]">
            <Flame className="size-5 text-void" aria-hidden="true" />
          </span>
          <span className="font-display text-lg font-bold tracking-wide metal-text sm:text-xl">
            GOAT188
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Utama">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-300 transition hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={VIP_ACCESS_HREF}
            className="animate-gold-pulse inline-flex min-h-11 items-center justify-center rounded-full border border-gold px-3 py-2 text-[11px] font-bold tracking-wide text-gold sm:px-4 sm:text-xs"
          >
            AKSES VIP 2027
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-lg border border-white/10 text-zinc-100 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Tutup menu" : "Buka menu"}</span>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div className="border-t border-white/5 px-4 py-2 sm:px-6 lg:px-8">
        <p className="flex items-center justify-center gap-2 text-center text-[11px] leading-snug text-zinc-300 sm:text-xs">
          <span className="relative flex size-2.5 shrink-0" aria-hidden="true">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
          </span>
          Server Node Status: ONLINE 24/7 (Latensi &lt; 3ms)
        </p>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 bg-panel/95 px-4 py-4 backdrop-blur-xl lg:hidden"
          aria-label="Seluler"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-sm text-zinc-100 hover:bg-white/5 hover:text-gold"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
