"use client";

import Nav from "./Nav";
import TechGrid from "./TechGrid";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="mx-auto max-w-content px-6">
      <Nav />

      <div className="grid grid-cols-1 items-center gap-10 py-10 md:grid-cols-2 md:gap-8 md:py-16">
        <div className="animate-fade-up">
          <span className="mb-4 block font-body text-sm font-medium text-[#6765FF] md:text-base">
            {t.hero.greeting}
          </span>

          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] sm:text-5xl md:text-6xl">
            {t.hero.role}
          </h1>

          <p className="my-4 max-w-lg text-base leading-relaxed text-[#314158] md:my-6 md:text-lg">
            {t.hero.bio}
          </p>

          <a
            href="#contacto"
            className="inline-block rounded bg-[#4F39F6] px-4 py-2 font-body text-sm font-medium text-white transition-all hover:opacity-90 active:scale-95"
          >
            {t.hero.cta}
          </a>
        </div>

        <TechGrid />
      </div>
    </section>
  );
}
