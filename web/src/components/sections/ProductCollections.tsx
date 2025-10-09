import { siteContent } from "@/data/siteContent";

const collections = siteContent.services.collections;

export function ProductCollections() {
  return (
    <section className="bg-zinc-950 py-16 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {collections.map((collection) => (
            <article
              key={collection.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-2xl font-semibold text-white">
                {collection.title}
              </h3>
              <p className="mt-4 text-sm text-zinc-200">
                {collection.notes}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {collection.brands.map((brand) => (
                  <li
                    key={brand}
                    className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-cyan-200"
                  >
                    {brand}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}





