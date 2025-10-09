import { siteContent } from "@/data/siteContent";

const materials = siteContent.projects.materialsShowcase;

export function ProductBrandGrid() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
              Trusted Manufacturers
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-zinc-900">
              Brands we stock across every material line
            </h2>
          </div>
          <p className="max-w-xl text-sm text-zinc-600">
            Our partner network keeps procurement predictable—even for fast-track
            projects with parallel work fronts.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {materials.categories.map((category) => (
            <article
              key={category.title}
              className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-zinc-900">
                {category.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2 text-sm text-zinc-700">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-teal-400/60 px-3 py-1 text-xs font-medium text-emerald-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-3xl border border-sky-200 bg-sky-50 p-6 text-center text-emerald-600">
          <p className="text-xs font-semibold uppercase tracking-[0.3em]">
            Bulk Supply Backbone
          </p>
          <p className="mt-3 text-2xl font-semibold">{materials.finalCallout}</p>
        </div>
      </div>
    </section>
  );
}
