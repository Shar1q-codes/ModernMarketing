type PageHeroProps = {
  title: string;
  breadcrumbs: string[];
};

export function PageHero({ title, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-300 py-20 text-white">
      <div className="absolute inset-0 opacity-20 mix-blend-overlay">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,white,transparent_60%)]" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-4 px-6">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-teal-950/70">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb} className="flex items-center gap-2">
                {index > 0 && <span className="text-teal-900/50">/</span>}
                {crumb}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="text-4xl font-semibold drop-shadow-lg md:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
