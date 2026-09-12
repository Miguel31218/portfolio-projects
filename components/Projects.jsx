"use client";

import ProjectsGrid from "./ProjectsGrid";
import { useLanguage } from "./LanguageProvider";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="proyectos" className="mx-auto max-w-content px-6 py-20 md:py-28">
      <h2 className="font-display text-4xl font-semibold tracking-tight text-text md:text-5xl">
        {t.projects.heading}
      </h2>
      <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">{t.projects.description}</p>

      <ProjectsGrid />
    </section>
  );
}
