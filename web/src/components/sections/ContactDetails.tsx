import { siteContent } from "@/data/siteContent";

const contact = siteContent.contact;

export function ContactDetails() {
  return (
    <div className="grid gap-4">
      {contact.details.map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sky-100 shadow-lg backdrop-blur"
        >
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            {item.title}
          </h3>
          <div className="mt-4 space-y-2 text-sm text-sky-100/90">
            {item.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
