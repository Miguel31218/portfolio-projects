import { profile } from "@/lib/data";
import Nav from "./Nav";
import ShuffleGrid from "./ShuffleGrid";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-content px-6">
      <Nav />

      <div className="grid grid-cols-1 items-center gap-10 py-10 md:grid-cols-2 md:gap-8 md:py-16">
        <div className="animate-fade-up">
          <span className="mb-4 block font-body text-sm font-medium text-[#6765FF] md:text-base">
            {profile.greeting}
          </span>

          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] sm:text-5xl md:text-6xl">
            {profile.role}
          </h1>

          <p className="my-4 max-w-lg text-base leading-relaxed text-[#314158] md:my-6 md:text-lg">
            {profile.bio}
          </p>

          <a
            href="#contacto"
            className="inline-block rounded bg-[#4F39F6] px-4 py-2 font-body text-sm font-medium text-white transition-all hover:opacity-90 active:scale-95"
          >
            Contact
          </a>
        </div>

        <ShuffleGrid />
      </div>
    </section>
  );
}
