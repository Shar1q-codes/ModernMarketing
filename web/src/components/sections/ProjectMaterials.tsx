import { siteContent } from "@/data/siteContent";

const materials = siteContent.projects.materialsShowcase;

export function ProjectMaterials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-teal-800 text-white">
      <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_60%)] blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Material Ecosystem
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">{materials.heading}</h2>
          <p className="text-sm text-sky-100/80 md:text-base">{materials.intro}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {materials.categories.map((category) => (
            <article
              key={category.title}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur"
            >
              <div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
                <div className="mt-4 space-y-2 text-sm text-sky-100/90">
                  {category.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="inline-block h-2 w-2 rounded-full bg-teal-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 h-1 w-full rounded-full bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400 opacity-60" />
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-white/15 bg-white/10 p-8 text-center shadow-lg backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Bulk Supply Backbone
          </p>
          <p className="mt-3 text-2xl font-semibold md:text-3xl">
            {materials.finalCallout}
          </p>
        </div>
      </div>
    </section>
  );
}
