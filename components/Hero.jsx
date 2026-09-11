import { ArrowDown } from "lucide-react";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-content px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-8">
        <div className="animate-fade-up">
          <p className="mb-4 font-mono text-sm text-amber">{profile.location}</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-text md:text-5xl">
            {profile.role}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            {profile.bio}
          </p>
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

        <Terminal />
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

function Terminal() {
  return (
    <div className="animate-fade-up rounded-md border border-border bg-surface shadow-2xl shadow-black/40 [animation-delay:150ms] [animation-fill-mode:backwards]">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#4B4F5B]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4B4F5B]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4B4F5B]" />
        <span className="ml-2 font-mono text-xs text-muted">zsh — 80x24</span>
      </div>
      <div className="space-y-2 px-5 py-5 font-mono text-sm leading-relaxed">
        {profile.terminalLines.map((line, i) =>
          line.cmd ? (
            <p key={i}>
              <span className="text-mint">{line.prompt}</span>{" "}
              <span className="text-amber">$</span>{" "}
              <span className="text-text">{line.cmd}</span>
            </p>
          ) : (
            <p key={i} className="pl-1 text-muted">
              {line.output}
            </p>
          )
        )}
        <p>
          <span className="text-mint">~</span> <span className="text-amber">$</span>{" "}
          <span className="animate-blink text-text">▍</span>
        </p>
      </div>
    </div>
  );
}
