"use client";

import { useState } from "react";
import { Menu, X, ImagePlus, BadgeCheck } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "#proyectos", label: "proyectos", number: "01" },
  { href: "#skills", label: "skills", number: "02" },
  { href: "#contacto", label: "contacto", number: "03" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          {/* Placeholder circular para tu foto. Cuando tengas una,
              reemplaza este div por:
              <Image src="/avatar.jpg" alt={profile.name} width={40} height={40}
                     className="rounded-full object-cover" /> */}
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-muted">
            <ImagePlus size={16} />
          </span>
          <span className="flex items-center gap-1.5">
            <span className="font-display text-sm font-semibold tracking-tight text-text">
              {profile.name}
            </span>
            <BadgeCheck size={16} className="text-verified" aria-label="Verificado" />
          </span>
        </a>

        <ul className="hidden gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href} className="text-center">
              <a href={link.href} className="group block">
                <span className="block font-mono text-[10px] leading-none text-muted/70">
                  {link.number}
                </span>
                <span className="mt-1 block font-mono text-sm text-muted transition-colors group-hover:text-amber">
                  {"// "}
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="text-text md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-2 py-2 font-mono text-sm text-muted transition-colors hover:text-amber"
              >
                <span className="text-[10px] text-muted/70">{link.number}</span>
                {"// "}
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
