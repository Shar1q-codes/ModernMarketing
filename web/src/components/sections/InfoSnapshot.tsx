import { siteContent } from "@/data/siteContent";

const snapshot = siteContent.home.snapshot;

export function InfoSnapshot() {
  return (
    <section id="snapshot" className="bg-zinc-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <h2 className="max-w-sm text-3xl font-semibold text-zinc-900">
            {snapshot.heading}
          </h2>
          <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
            <dl className="divide-y divide-zinc-100">
              {snapshot.rows.map((row) => (
                <div key={row.label} className="grid gap-6 px-6 py-5 md:grid-cols-[240px_1fr]">
                  <dt className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                    {row.label}
                  </dt>
                  <dd className="space-y-2 text-sm text-zinc-800">
                    {row.values.length === 1 ? (
                      <p>{row.values[0]}</p>
                    ) : (
                      <ul className="-ml-1 list-disc space-y-2 pl-5">
                        {row.values.map((value) => (
                          <li key={value}>{value}</li>
                        ))}
                      </ul>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
