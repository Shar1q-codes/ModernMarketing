export default function NotFound() {
  return (
    <main className="section">
      <div className="container" style={{ textAlign: "center" }}>
        <p className="section-label">404</p>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Page not found</h1>
        <p style={{ color: "var(--text-muted)", maxWidth: "480px", margin: "0 auto 2rem" }}>
          We couldn’t locate that page. Head back to the homepage or reach out to our coordination desk for immediate
          assistance.
        </p>
        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <a className="btn primary" href="/">
            Return home
          </a>
          <a className="btn ghost" href="tel:+919392995580">
            Call operations
          </a>
        </div>
      </div>
    </main>
  );
}