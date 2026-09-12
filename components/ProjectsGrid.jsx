"use client";

import { useState } from "react";
import { projects, projectCategories } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "./LanguageProvider";

const accentById = Object.fromEntries(projectCategories.map((c) => [c.id, c.accent]));

export default function ProjectsGrid() {
  const [active, setActive] = useState("all");
  const { lang, t } = useLanguage();

  const filters = [
    { id: "all", label: t.projects.filters.all },
    ...projectCategories.map((c) => ({ id: c.id, label: t.projects.filters[c.id] })),
  ];

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);
  const isCarousel = filtered.length > 1;

  return (
    <div>
      {/* Filtro por categoría */}
      <div className="mt-10 flex flex-wrap items-center gap-3">
        <span className="font-mono text-xs text-muted">{t.projects.filterLabel}</span>
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            aria-pressed={active === f.id}
            className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
              active === f.id
                ? "border-amber bg-amber text-ink"
                : "border-border text-muted hover:border-amber hover:text-amber"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid en desktop / carrusel horizontal con scroll-snap en móvil */}
      <div
        className={
          isCarousel
            ? "mt-8 -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3"
            : "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        }
      >
        {filtered.map((project) => (
          <div
            key={project.title}
            className={isCarousel ? "w-[80%] shrink-0 snap-center sm:w-[60%] md:w-auto" : ""}
          >
            <ProjectCard project={project} accent={accentById[project.category]} lang={lang} t={t.projects} />
          </div>
        ))}
      </div>
    </div>
  );
}
