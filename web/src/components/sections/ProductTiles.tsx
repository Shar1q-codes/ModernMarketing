import { siteContent } from "@/data/siteContent";

const overview = siteContent.services.productOverview;
const products = siteContent.services.productTiles;

export function ProductTiles() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-zinc-900">
            {overview.heading}
          </h2>
          <p className="mt-3 text-sm text-zinc-600">{overview.description}</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.title}
              className="flex h-full flex-col justify-between rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <h3 className="text-xl font-semibold text-zinc-900">
                  {product.title}
                </h3>
                <p className="mt-4 text-sm text-zinc-600">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
