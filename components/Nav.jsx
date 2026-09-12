"use client";

import { useState } from "react";
import { Menu, X, ImagePlus, BadgeCheck, Languages } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

function AvatarBadge({ size = 56 }) {
  const badgeSize = Math.round(size * 0.36);
  const badgeIconSize = Math.round(size * 0.3);

  return (
    <a
      href="#top"
      className="relative inline-flex shrink-0 items-center justify-center"
      style={{ width: size, height: size }}
      aria-label="Ir al inicio"
    >
      {/* Placeholder circular para tu foto. Cuando tengas una, reemplaza
          este span por: <Image src="/avatar.jpg" alt="Miguel Chavez"
          width={size} height={size} className="rounded-full object-cover" /> */}
      <span className="flex h-full w-full items-center justify-center rounded-full border border-border bg-surface text-muted">
        <ImagePlus size={size * 0.4} />
      </span>
      <span
        style={{ width: badgeSize, height: badgeSize }}
        className="absolute -bottom-1 -right-1 flex items-center justify-center rounded-full border-2 border-white bg-white"
      >
        <BadgeCheck size={badgeIconSize} className="text-verified" aria-label="Verificado" />
      </span>
    </a>
  );
}

function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();
  const isEn = lang === "en";

  return (
    <button
      onClick={toggleLang}
      role="switch"
      aria-checked={isEn}
      aria-label={isEn ? "Cambiar a español" : "Switch to English"}
      className="relative flex h-8 w-14 shrink-0 items-center rounded-full bg-gradient-to-r from-accent to-accent-dim px-1 transition-colors"
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-white text-accent shadow-md transition-transform duration-300 ${
          isEn ? "translate-x-6" : "translate-x-0"
        }`}
      >
        <Languages size={14} />
      </span>
    </button>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { href: "#proyectos", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#contacto", label: t.nav.contact },
  ];

  const linkClasses =
    "relative font-body text-sm text-[#0A0A0A] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#4F39F6] after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <header className="relative z-10">
      {/* Desktop: 3 columnas — avatar a la izquierda, links centrados,
          toggle de idioma a la derecha */}
      <nav className="hidden items-center py-6 md:grid md:grid-cols-[1fr_auto_1fr]">
        <div className="justify-self-start">
          <AvatarBadge size={88} />
        </div>
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
          <LanguageToggle />
        </div>
      </nav>

      {/* Móvil: hamburguesa, avatar y toggle en una sola fila */}
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 py-5 md:hidden">
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="text-[#0A0A0A]"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className="justify-self-center">
          <AvatarBadge size={44} />
        </div>

        <LanguageToggle />
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
