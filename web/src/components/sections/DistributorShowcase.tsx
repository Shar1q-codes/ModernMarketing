import { siteContent } from "@/data/siteContent";

const intro = siteContent.home.distributorsIntro;
const detailSections = siteContent.home.distributorDetails;

export function DistributorShowcase() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="text-center">
          <h2 className="mt-4 text-3xl font-semibold text-zinc-900">
            {intro.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-zinc-600">
            {intro.description}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {intro.categories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-6 text-center shadow-sm"
            >
              <h3 className="text-base font-semibold text-zinc-800">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {detailSections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-sky-100 bg-sky-50/70 p-8"
            >
              <h3 className="text-lg font-semibold text-zinc-900">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                {section.distributors.map((distributor) => (
                  <li key={distributor} className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-teal-500" />
                    {distributor}
                  </li>
                ))}
              </ul>
              <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-emerald-600">
                {section.rangeTitle}
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                {section.products.map((product) => (
                  <li key={product} className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-zinc-900" />
                    {product}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
