import Image from "next/image";
import { siteContent } from "@/data/siteContent";

const hero = siteContent.home.hero;

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-zinc-900 text-white">
      <div className="absolute inset-0">
        <Image
          src={hero.image}
          alt="Construction materials supplied by Modern Marketing Associates"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/80 via-zinc-900/70 to-teal-700/60" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 sm:py-20 md:py-28 md:flex-row md:items-center">
        <div className="md:w-3/5 space-y-6 rounded-3xl bg-black/40 p-8 shadow-lg ring-1 ring-white/10 backdrop-blur">
          {hero.tagline && (
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FDBA74] drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]">
              {hero.tagline}
            </p>
          )}
          <h1 className="text-4xl font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C5C] via-[#DB241C] to-[#F36801] md:text-6xl">
            {hero.heading}
          </h1>
          <div className="space-y-4 text-lg text-white shadow-[0_0_20px_rgba(0,0,0,0.35)] md:text-xl">
            {hero.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="rounded-2xl bg-black/45 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.35)] ring-1 ring-white/10"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <a
            href="#snapshot"
            className="mt-10 inline-flex items-center rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-teal-300"
          >
            {hero.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

