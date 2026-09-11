"use client";

import { Github, ExternalLink } from "lucide-react";
import MockupPreview from "./MockupPreview";

const accentClasses = {
  amber: {
    border: "hover:border-amber",
    badge: "border-amber/40 text-amber",
    button: "hover:border-amber hover:text-amber",
  },
  mint: {
    border: "hover:border-mint",
    badge: "border-mint-dim text-mint",
    button: "hover:border-mint hover:text-mint",
  },
};

export default function ProjectCard({ project, accent = "amber" }) {
  const { title, description, tech, github, demo, featured, status } = project;
  const styles = accentClasses[accent] ?? accentClasses.amber;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-md border border-border bg-surface transition-colors ${styles.border}`}
    >
      {/* Mockup con efecto zoom en hover */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-105">
          <MockupPreview title={title} accent={accent} />
        </div>

        {/* Capa oscura translúcida: fade-in en hover (solo desktop, donde el hover es real) */}
        <div className="absolute inset-0 hidden flex-col items-center justify-center gap-4 bg-ink/90 p-5 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 ease-out group-hover:opacity-100 md:flex">
          <ul className="flex flex-wrap justify-center gap-2">
            {tech.map((t) => (
              <li
                key={t}
                className={`rounded-sm border px-2 py-1 font-mono text-[11px] ${styles.badge}`}
              >
                {t}
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 rounded-sm border border-border px-3 py-1.5 font-body text-sm text-text transition-colors ${styles.button}`}
              >
                <Github size={15} /> GitHub
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 rounded-sm border border-border px-3 py-1.5 font-body text-sm text-text transition-colors ${styles.button}`}
              >
                <ExternalLink size={15} /> Demo
              </a>
            )}
            {!github && !demo && (
              <span className="font-mono text-xs text-muted">Aún sin publicar</span>
            )}
          </div>
        </div>
      </div>

      {/* Info siempre visible: título, estado, descripción */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-base font-semibold text-text">{title}</h3>
          {featured && (
            <span className="shrink-0 rounded-sm border border-amber/40 px-2 py-0.5 font-mono text-[11px] text-amber">
              principal
            </span>
          )}
          {status && (
            <span
              className={`shrink-0 rounded-sm border px-2 py-0.5 font-mono text-[11px] ${styles.badge}`}
            >
              {status}
            </span>
          )}
        </div>
        <p className="text-sm leading-relaxed text-muted">{description}</p>

        {/* Fallback táctil: en móvil no hay hover, así que dejamos accesos
            directos visibles siempre. En desktop el overlay ya los cubre. */}
        <div className="mt-auto flex gap-4 pt-3 md:hidden">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-amber"
            >
              <Github size={16} /> Código
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-amber"
            >
              <ExternalLink size={16} /> Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
