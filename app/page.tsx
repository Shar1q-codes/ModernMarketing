const highlightLinks = [
  {
    title: "Product Catalogue",
    description: "AAC blocks, cement, tiles, plumbing, and consumables with brand certifications.",
    href: "/products"
  },
  {
    title: "Project Playbook",
    description: "See how airports, campuses, and infra sites rely on our dispatch discipline.",
    href: "/projects"
  },
  {
    title: "Client Voices",
    description: "Site leads explain how personal support keeps their milestones calm.",
    href: "/reviews"
  },
  {
    title: "Talk To Operations",
    description: "One call for quotes, BOQ reviews, dispatch tracking, and installer coordination.",
    href: "/contact"
  }
];

const productHighlights = [
  {
    title: "AAC Blocks",
    description: "Breathable, lightweight walling for faster schedules and thermal comfort."
  },
  {
    title: "Cement & Plaster",
    description: "Trusted bag-by-bag quality for slabs, renders, and final skim coats."
  },
  {
    title: "Tiles & Adhesives",
    description: "Flooring and wall systems that stay aligned long after handover."
  },
  {
    title: "Plumbing Materials",
    description: "Leak-proof piping, fixtures, and on-call installers for risers and restrooms."
  },
  {
    title: "M-Sand & Aggregates",
    description: "Ready trucks of sand, aggregates, and site consumables synced with pour plans."
  },
  {
    title: "Operations Support",
    description: "Dispatch tracking, site coordination, and brand-certified installation crews."
  }
];

const projectSpotlights = [
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

const testimonialHighlights = [
  {
    quote: "Blocks landed at 6 AM exactly like promised. Irfan checked with our site lead before every truck rolled out.",
    author: "A. Ramesh",
    location: "Gachibowli - AAC Blocks"
  },
  {
    quote: "Mixing ratios explained over a call; that small gesture kept the lobby handover on track.",
    author: "Priya Das",
    location: "Kukatpally - Tiles & Adhesives"
  },
  {
    quote: "Installers arrived with the delivery and matched every valve to our pressure requirements. Zero leaks after testing.",
    author: "S. Ahmed",
    location: "Shamirpet - Plumbing Materials"
  }
];

const contactPreview = {
  phoneDisplay: "+91 9392995580",
  phoneHref: "tel:+919392995580",
  whatsappHref: "https://wa.me/919392995580?text=Hello%20Modern%20Marketing%2C%20I%27d%20like%20to%20chat%20about%20materials.",
  emailDisplay: "modern78665@gmail.com",
  emailHref: "mailto:modern78665@gmail.com",
  serviceNotes: [
    {
      label: "Service window",
      detail: "Dawn-to-dusk dispatch tracking with overnight check-ins"
    },
    {
      label: "Coordination desk",
      detail: "Installer roster, rate cards, routing, and BOQ reviews"
    }
  ],
  addresses: [
    {
      label: "Head Office",
      lines: ["16-8-240/3, Mani Homes Apartments", "Malakpet, Hyderabad"],
      mapHref: "https://www.google.com/maps/place/16-8-240/3,+Mani+Homes+Apartments,+Malakpet,+Hyderabad"
    },
    {
      label: "Logistics Yard",
      lines: ["22-6-669, Modern Complex, Opp. Mir Chowki PS", "Mandi Mir Alam, Hyderabad 50002"],
      mapHref: "https://www.google.com/maps/place/22-6-669,+Modern+Complex,+Opp.Mir+Chowki+PS,+Mandi+Mir+Alam,+Hyderabad+50002"
    }
  ]
};

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="hero-kicker">Hyderabad-based supply partners since 2001</p>
            <h1>Materials that feel personal. Logistics that feel effortless.</h1>
            <p>
              Family-run distributors partnering with project teams across Telangana with warm check-ins, transparent
              pricing, and dawn-to-dusk dispatch windows.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="/contact">
                Request a quote
              </a>
              <a
                className="btn whatsapp"
                href="https://wa.me/919392995580?text=Hello%20Modern%20Marketing%2C%20I%27d%20like%20to%20chat%20about%20materials."
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
              <a className="btn ghost" href="tel:+919392995580">
                Call +91 9392995580
              </a>
            </div>
            <dl className="hero-stats">
              <div>
                <dt>23+</dt>
                <dd>Years delivering materials</dd>
              </div>
              <div>
                <dt>36h</dt>
                <dd>Rapid dispatch across Telangana</dd>
              </div>
              <div>
                <dt>5-member</dt>
                <dd>Trusted, small-team responsiveness</dd>
              </div>
            </dl>
          </div>
          <div>
            <svg viewBox="0 0 320 240" role="img" aria-labelledby="heroGraphicTitle" width="100%" height="100%">
              <title id="heroGraphicTitle">Logistics coordination illustration</title>
              <defs>
                <linearGradient id="heroGradient" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <rect width="320" height="240" rx="28" fill="url(#heroGradient)" />
              <g stroke="#F9F7FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <rect x="48" y="58" width="224" height="112" rx="18" fill="#F9F7FF" opacity="0.85" />
                <path d="M96 96h128M96 124h88M96 152h64" stroke="#FF5C8A" strokeOpacity="0.7" />
              </g>
              <circle cx="92" cy="188" r="26" fill="#F9F7FF" opacity="0.92" stroke="#FF5C8A" strokeWidth="3" />
              <circle cx="220" cy="188" r="26" fill="#F9F7FF" opacity="0.92" stroke="#FF5C8A" strokeWidth="3" />
              <path d="M118 188h86" stroke="#1E1B4B" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>

      <section className="section section--cream about-section">
        <div className="container">
          <div className="section-head" style={{ marginBottom: "2.5rem" }}>
            <p className="section-label">Explore</p>
            <h2>Your project toolkit, at a glance</h2>
            <p className="section-lead">
              Preview the materials we keep ready, the projects we support, how site leads rate us, and the desk that keeps it all moving.
            </p>
          </div>
          <div className="card-grid">
            {highlightLinks.map((item) => (
              <article className="card" key={item.href}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a className="btn ghost" href={item.href} style={{ justifySelf: "start" }}>
                  Open page
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--sand home-products">
        <div className="container">
          <div className="section-head">
            <p className="section-label">Materials</p>
            <h2>Every critical material your site depends on</h2>
            <p className="section-lead">
              Authorised distribution backed by brand compliance, transparent pricing, and logistics that match your pour schedule.
            </p>
          </div>
          <div className="card-grid">
            {productHighlights.map((product) => (
              <article className="card" key={product.title}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "2rem" }}>
            <a className="btn ghost" href="/products">
              Browse the full catalogue
            </a>
          </div>
        </div>
      </section>

      <section className="section section--concrete home-projects">
        <div className="container">
          <div className="section-head">
            <p className="section-label">Projects</p>
            <h2>Trusted by Hyderabad's fastest moving build-outs</h2>
            <p className="section-lead">
              Logistics discipline, installer coordination, and on-call brand support help these sites deliver without surprises.
            </p>
          </div>
          <div className="project-grid">
            {projectSpotlights.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "2rem" }}>
            <a className="btn ghost" href="/projects">
              See more project notes
            </a>
          </div>
        </div>
      </section>

      <section className="section section--cream home-reviews">
        <div className="container">
          <div className="section-head">
            <p className="section-label">Reviews</p>
            <h2>What site leads say about working with us</h2>
            <p className="section-lead">
              Procurement heads, project engineers, and fit-out coordinators share how a personal logistics desk keeps their milestones calm.
            </p>
          </div>
          <div className="review-grid">
            {testimonialHighlights.map((item) => (
              <article className="review" key={item.author}>
                <p>{item.quote}</p>
                <footer>
                  <strong>{item.author}</strong>
                  <span>{item.location}</span>
                </footer>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "2rem" }}>
            <a className="btn ghost" href="/reviews">
              Read every client voice
            </a>
          </div>
        </div>
      </section>

      <section className="section section--dark home-contact">
        <div className="container">
          <div className="section-head">
            <p className="section-label">Operations</p>
            <h2>Talk directly to our operations team</h2>
            <p className="section-lead">
              Share the BOQ or drawing and we will line up material options, lead times, and last-mile crews on a single call.
            </p>
          </div>

          <div className="cta-card">
            <div>
              <h3>Let's plan your next milestone</h3>
              <p>
                We coordinate dispatches dawn-to-dusk, send installer crews, and keep site leads updated with polite, proactive check-ins.
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn primary" href={contactPreview.emailHref}>
                Email the team
              </a>
              <a className="btn whatsapp" href={contactPreview.whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp operations
              </a>
              <a className="btn ghost" href={contactPreview.phoneHref}>
                Call {contactPreview.phoneDisplay}
              </a>
            </div>
            <ul className="cta-meta">
              {contactPreview.serviceNotes.map((note) => (
                <li key={note.label}>
                  <strong>{note.label}:</strong> {note.detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="map-grid" style={{ marginTop: "2.5rem" }}>
            {contactPreview.addresses.map((address) => (
              <article className="map-card" key={address.label}>
                <div>
                  <h3>{address.label}</h3>
                  <p className="map-address">
                    {address.lines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </p>
                </div>
                <a className="btn ghost" href={address.mapHref} target="_blank" rel="noreferrer">
                  View on Google Maps
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
