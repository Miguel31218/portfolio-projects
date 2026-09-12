"use client";

import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";

const categoryIds = ["frontend", "backend", "data", "tools"];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="mx-auto max-w-content px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow={t.skills.eyebrow}
        title={t.skills.title}
        description={t.skills.description}
      />

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {categoryIds.map((categoryId) => (
          <div key={categoryId}>
            <h3 className="font-mono text-sm text-accent">{t.skills.categories[categoryId]}</h3>
            <ul className="mt-3 space-y-2 border-l border-border pl-4">
              {skills
                .filter((s) => s.category === categoryId)
                .map((s) => (
                  <li key={s.name} className="text-sm text-text">
                    {s.name}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
