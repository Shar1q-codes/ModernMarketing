import { siteContent } from "@/data/siteContent";

const maps = siteContent.contact.maps;

export function MapsSection() {
  return (
    <section className="bg-zinc-950 py-16 text-zinc-100">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
        {maps.map((map) => (
          <div
            key={map.title}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg backdrop-blur"
          >
            <div className="space-y-2 px-6 py-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">
                {map.title}
              </h3>
              <p className="text-sm text-sky-100/80">{map.address}</p>
            </div>
            <iframe
              src={map.src}
              title={map.title}
              className="h-[320px] w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
