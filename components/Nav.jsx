"use client";

import { useState } from "react";
import { Menu, X, ImagePlus, BadgeCheck } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "#proyectos", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contacto", label: "Contact" },
];

const linkClasses =
  "relative font-body text-sm text-[#0A0A0A] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#4F39F6] after:transition-transform after:duration-300 hover:after:scale-x-100";

function Brand({ avatarSize = 40, iconSize = 16, textSize = "text-sm" }) {
  return (
    <a href="#top" className="flex items-center gap-3">
      {/* Placeholder circular para tu foto. Cuando tengas una, reemplaza
          este span por: <Image src="/avatar.jpg" alt={profile.name}
          width={avatarSize} height={avatarSize} className="rounded-full object-cover" /> */}
      <span
        style={{ width: avatarSize, height: avatarSize }}
        className="flex shrink-0 items-center justify-center rounded-full border border-border bg-surface text-muted"
      >
        <ImagePlus size={iconSize} />
      </span>
      <span className="flex items-center gap-1.5">
        <span className={`font-display ${textSize} font-semibold tracking-tight text-[#0A0A0A]`}>
          {profile.name}
        </span>
        <BadgeCheck size={iconSize} className="text-verified" aria-label="Verificado" />
      </span>
    </a>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-10">
      {/* Desktop: 3 columnas para que los links queden centrados de verdad
          y el logo quede pegado a la derecha */}
      <nav className="hidden items-center py-6 md:grid md:grid-cols-[1fr_auto_1fr]">
        <div />
        <ul className="flex items-center gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={linkClasses}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="justify-self-end">
          <Brand />
        </div>
      </nav>

      {/* Móvil: hamburguesa a la izquierda, logo a la derecha (misma
          esquina que en desktop) */}
      <div className="flex items-center justify-between py-5 md:hidden">
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="text-[#0A0A0A]"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <Brand avatarSize={36} iconSize={14} textSize="text-sm" />
      </div>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border pb-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 font-body text-sm text-[#0A0A0A]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
