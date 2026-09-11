import { profile } from "@/lib/data";
import FloatingIcons from "./FloatingIcons";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-content px-6 pb-16 pt-16 md:pb-24 md:pt-24">
      <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-4">
        <div className="max-w-2xl animate-fade-up">
          <p className="font-mono text-xs text-muted">{profile.location}</p>

          <p className="mt-4 font-mono text-sm font-medium tracking-wide text-pink">
            {profile.greeting}
          </p>

          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-text sm:text-5xl md:text-6xl">
            {profile.role}
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">{profile.bio}</p>

          <div className="mt-8 flex flex-wrap gap-4">
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

        <FloatingIcons />
      </div>
    </section>
  );
}
