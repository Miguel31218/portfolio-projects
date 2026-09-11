import ProjectCard from "./ProjectCard";

export default function ProjectSection({ label, accent, projects }) {
  if (projects.length === 0) return null;

  const isCarouselCandidate = projects.length > 1;

  return (
    <div>
      <h3 className="font-mono text-sm text-amber">
        <span className={accent === "mint" ? "text-mint" : "text-amber"}>{label}</span>
      </h3>

      <div
        className={
          isCarouselCandidate
            ? "mt-4 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3"
            : "mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        }
      >
        {projects.map((project) => (
          <div
            key={project.title}
            className={
              isCarouselCandidate
                ? "w-[80%] shrink-0 snap-center sm:w-[60%] md:w-auto"
                : ""
            }
          >
            <ProjectCard project={project} accent={accent} />
          </div>
        ))}
      </div>
    </div>
  );
}
