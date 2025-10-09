import Image from "next/image";
import { siteContent } from "@/data/siteContent";

const gallery = siteContent.projects.constructionGallery;

export function ProjectConstructionGallery() {
  if (!gallery || !gallery.sites?.length) {
    return null;
  }

  return (
    <section className="bg-zinc-100 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
            Field Progress
          </p>
          <h2 className="text-3xl font-semibold text-zinc-900">
            {gallery.heading}
          </h2>
          <p className="text-sm text-zinc-600 md:text-base">{gallery.intro}</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {gallery.sites.map((site) => (
            <article
              key={site.name}
              className="flex h-full flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="space-y-4">
                <div className="grid gap-3">
                  {site.images.map((image) => (
                    <div
                      key={image.src}
                      className="overflow-hidden rounded-2xl border border-zinc-100"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={640}
                        height={480}
                        className="h-44 w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-400">
                    {site.location}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                    {site.name}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-600">{site.summary}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
