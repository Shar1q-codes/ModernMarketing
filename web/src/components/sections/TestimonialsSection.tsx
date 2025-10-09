type TestimonialEntry = {
  name: string;
  location: string;
  productLabel: string | null;
  product: string | null;
  review: string;
  rating?: number;
};

type TestimonialsSectionProps = {
  heading: string;
  summary: string;
  entries: TestimonialEntry[];
};

export function TestimonialsSection({
  heading,
  summary,
  entries,
}: TestimonialsSectionProps) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
            {heading}
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-zinc-900">
            {summary}
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {entries.map((entry) => (
            <article
              key={entry.name + entry.location}
              className="flex h-full flex-col rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {entry.name}
                  </h3>
                  <p className="text-sm text-zinc-500">{entry.location}</p>
                </div>
                <div
                  className="flex items-center gap-0.5 text-[#FF5C5C]"
                  aria-label={`${entry.rating ?? 5} out of 5 stars`}
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>{index < (entry.rating ?? 5) ? "★" : "☆"}</span>
                  ))}
                </div>
              </div>
              {entry.productLabel && entry.product && (
                <div className="mt-6 space-y-2 text-sm text-zinc-600">
                  <p className="font-semibold uppercase tracking-[0.2em] text-teal-500">
                    {entry.productLabel}
                  </p>
                  <p>{entry.product}</p>
                </div>
              )}
              <p className="mt-6 text-sm leading-relaxed text-zinc-600">
                {entry.review}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
