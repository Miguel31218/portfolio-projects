import { ArrowDown } from "lucide-react";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-content flex-col items-center px-6 pb-20 pt-20 text-center md:pb-28 md:pt-28"
    >
      <div className="animate-fade-up">
        <p className="font-mono text-sm text-amber">{profile.location}</p>

        <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-text sm:text-5xl md:text-6xl">
          {profile.role}
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted">
          {profile.bio}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#proyectos"
            className="rounded-sm bg-amber px-5 py-2.5 font-body text-sm font-medium text-ink transition-colors hover:bg-amber/90"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="rounded-sm border border-border px-5 py-2.5 font-body text-sm font-medium text-text transition-colors hover:border-amber hover:text-amber"
          >
            Hablemos
          </a>
        </div>
      </div>

      <a
        href="#proyectos"
        aria-label="Ir a proyectos"
        className="mt-16 hidden items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-amber md:flex"
      >
        scroll <ArrowDown size={14} />
      </a>
    </section>
  );
}
