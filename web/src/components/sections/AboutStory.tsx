import { siteContent } from "@/data/siteContent";

const about = siteContent.about;

export function AboutStory() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[3fr_2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
            {about.ourStory.established}
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-zinc-900">
            {about.aboutHeading}
          </h2>
          <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-400">
            {about.ourStory.storyTitle}
          </h3>
          <p className="mt-4 text-base text-zinc-700">{about.storyIntro}</p>
          <ul className="mt-6 space-y-3 text-sm text-zinc-700">
            {about.ourStory.highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                  +
                </span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          {about.ourStory.stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
            >
              <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                {stat.title}
              </h4>
              <p className="mt-3 text-lg font-semibold text-zinc-900">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
