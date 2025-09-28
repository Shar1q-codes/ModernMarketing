export default function ProductsPage() {
  const products = [
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

  return (
    <main className="section section--sand products-page">
      <div className="container">
        <div className="section-head">
          <p className="section-label">Products</p>
          <h1>Every critical material your site depends on</h1>
          <p className="section-lead">
            Authorised distribution backed by brand compliance, transparent pricing, and logistics that match your pour schedule.
          </p>
        </div>
        <div className="card-grid">
          {products.map((product) => (
            <article className="card" key={product.title}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}