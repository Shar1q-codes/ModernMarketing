import { siteContent } from "@/data/siteContent";

const projects = siteContent.projects.completedProjects;

export function ProjectsOverview() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[2fr_1fr]">
        <div>
          <h2 className="text-3xl font-semibold text-zinc-900">
            {projects.heading}
          </h2>
          <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">
            {projects.subheading}
          </h3>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-700">
            {projects.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div>
          <ul className="mt-4 space-y-3 text-sm text-zinc-700">
            {projects.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-teal-500" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
