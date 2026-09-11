import ProjectsGrid from "./ProjectsGrid";

export default function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-content px-6 py-20 md:py-28">
      <h2 className="font-display text-4xl font-semibold tracking-tight text-text md:text-5xl">
        Proyectos
      </h2>
      <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
        Productos que he construido de principio a fin, y hacia dónde estoy llevando ese trabajo.
      </p>

      <ProjectsGrid />
    </section>
  );
}
