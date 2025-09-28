export default function ProjectsPage() {
  const projects = [
    {
      title: "Rajiv Gandhi International Airport Expansion",
      description: "Night-shift logistics and structural materials for critical airside upgrades."
    },
    {
      title: "Google Hyderabad Campus",
      description: "Coordinated AAC and tiling deliveries across multi-tower phases with zero downtime."
    },
    {
      title: "Amazon Fit-outs",
      description: "End-to-end adhesives, sanitary ware, and drywall supply for fast-track buildouts."
    },
    {
      title: "IIT Hyderabad",
      description: "Long-term partner for lab expansions with compliance-ready materials and approvals."
    }
  ];

  return (
    <main className="section section--concrete projects-page">
      <div className="container">
        <div className="section-head">
          <p className="section-label">Projects</p>
          <h1>Trusted by Hyderabad&apos;s fastest moving build-outs</h1>
          <p className="section-lead">
            Logistics discipline, installer coordination, and on-call brand support help these sites deliver without surprises.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
