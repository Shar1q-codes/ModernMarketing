import { siteContent } from "@/data/siteContent";

const collections = siteContent.services.collections;

export function ProductCollections() {
  return (
    <section className="bg-zinc-950 py-16 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {collections.map((highlight) => (
            <article
              key={highlight.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-2xl font-semibold text-white">
                {highlight.title}
              </h3>
              <p className="mt-4 text-sm text-zinc-200">
                {highlight.notes}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}




