import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const categories = ["Frontend", "Backend", "Datos", "Herramientas"];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-content px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Sobre mí"
        title="Skills"
        description="Tecnologías con las que trabajo día a día, organizadas por área."
      />

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="font-mono text-sm text-amber">{category}</h3>
            <ul className="mt-3 space-y-2 border-l border-border pl-4">
              {skills
                .filter((s) => s.category === category)
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
