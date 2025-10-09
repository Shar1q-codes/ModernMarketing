import { siteContent } from "@/data/siteContent";

const team = siteContent.about.team;

export function TeamSection() {
  return (
    <section className="bg-zinc-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
            {team.heading}
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-zinc-900">
            {team.summary}
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {team.members.map((member) => (
            <div
              key={member.name}
              className="flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm"
            >
              <div className="relative flex h-64 w-full items-center justify-center bg-gradient-to-br from-sky-400 via-teal-500 to-emerald-600">
                <span className="text-4xl font-semibold text-white">
                  {member.name
                    .split(" ")
                    .map((segment) => segment[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff33,transparent_60%)]" />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {member.name}
                  </h3>
                  <p className="text-sm uppercase tracking-[0.24em] text-teal-500">
                    {member.role}
                  </p>
                </div>
                {member.description && (
                  <p className="text-sm text-zinc-600">{member.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
