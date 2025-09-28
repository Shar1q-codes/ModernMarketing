export default function ContactPage() {
  const addresses = [
    {
      label: "Head Office",
      lines: ["16-8-240/3, Mani Homes Apartments", "Malakpet, Hyderabad"],
      mapSrc:
        "https://www.google.com/maps?q=16-8-240/3,+Mani+Homes+Apartments,+Malakpet,+Hyderabad&output=embed"
    },
    {
      label: "Logistics Yard",
      lines: ["22-6-669, Modern Complex, Opp. Mir Chowki PS", "Mandi Mir Alam, Hyderabad 50002"],
      mapSrc:
        "https://www.google.com/maps?q=22-6-669,+Modern+Complex,+Opp.Mir+Chowki+PS,+Mandi+Mir+Alam,+Hyderabad+50002&output=embed"
    }
  ];

  return (
    <main className="section section--dark contact-page">
      <div className="container">
        <div className="section-head">
          <p className="section-label">Contact</p>
          <h1>Talk directly to our operations team</h1>
          <p className="section-lead">
            Share the BOQ or drawing and we will line up material options, lead times, and last-mile crews on a single call.
          </p>
        </div>

        <div className="cta-card" style={{ marginBottom: '3.5rem' }}>
          <div>
            <h2>Let&apos;s plan your next milestone</h2>
            <p>
              We coordinate dispatches dawn-to-dusk, send installer crews, and keep site leads updated with polite, proactive check-ins.
            </p>
          </div>
          <div className="cta-actions">
            <a className="btn primary" href="mailto:modern78665@gmail.com">Email the team</a>
            <a className="btn whatsapp" href="https://wa.me/919392995580" target="_blank" rel="noreferrer">
              WhatsApp operations
            </a>
            <a className="btn ghost" href="tel:+919392995580">
              Call +91 9392995580
            </a>
          </div>
          <ul className="cta-meta">
            <li>
              <strong>Service window:</strong> Dawn-to-dusk dispatch tracking with overnight check-ins
            </li>
            <li>
              <strong>Coordination desk:</strong> Installer roster, rate cards, routing, and BOQ reviews
            </li>
          </ul>
        </div>

        <div className="map-grid">
          {addresses.map((address) => (
            <article className="map-card" key={address.label}>
              <div>
                <h2>{address.label}</h2>
                <p className="map-address">
                  {address.lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </p>
              </div>
              <iframe
                className="map-frame"
                src={address.mapSrc}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title={`${address.label} map`}
              />
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
