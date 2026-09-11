import { Github, ExternalLink } from "lucide-react";

const accentStyles = {
  amber: {
    gradient: "from-amber-dim to-ink",
    badge: "border-amber/30 text-amber-dim",
    link: "hover:text-amber",
  },
  mint: {
    gradient: "from-mint to-ink",
    badge: "border-mint-dim text-mint",
    link: "hover:text-mint",
  },
};

export default function ProjectCard({ project, accent = "amber" }) {
  const { title, description, tech, github, demo, featured, status } = project;
  const styles = accentStyles[accent] ?? accentStyles.amber;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-white transition-shadow hover:shadow-lg hover:shadow-black/5">
      {/* Miniatura: reemplaza el div de degradado por tu imagen o video real
          cuando lo tengas, por ejemplo:
          <Image src={project.image} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
          o
          <video src={project.video} autoPlay muted loop playsInline className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /> */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div
          className={`h-full w-full bg-gradient-to-br ${styles.gradient} transition-transform duration-500 ease-out group-hover:scale-105`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />

        {(featured || status) && (
          <span className="absolute right-3 top-3 rounded-full border border-white/30 bg-white/10 px-2.5 py-1 font-mono text-[11px] text-white backdrop-blur-sm">
            {featured ? "principal" : status}
          </span>
        )}

        <h3 className="absolute bottom-0 left-0 p-4 font-display text-lg font-semibold text-white">
          {title}
        </h3>
      </div>

      {/* Info siempre visible — no depende de hover, así funciona igual en
          desktop y en móvil (donde no existe el hover). */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <p className="text-sm leading-relaxed text-muted">{description}</p>

        <ul className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <li
              key={t}
              className={`rounded-full border px-2.5 py-1 font-mono text-[11px] ${styles.badge}`}
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex gap-4 border-t border-border pt-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-sm text-muted transition-colors ${styles.link}`}
            >
              <Github size={15} /> Código
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-sm text-muted transition-colors ${styles.link}`}
            >
              <ExternalLink size={15} /> Demo
            </a>
          )}
          {!github && !demo && (
            <span className="font-mono text-xs text-muted">Aún sin publicar</span>
          )}
        </div>
      </div>
    </article>
  );
}
