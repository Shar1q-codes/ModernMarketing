export default function ReviewsPage() {
  const testimonials = [
    {
      quote: "Blocks landed at 6 AM exactly like promised. Irfan checked with our site lead before every truck rolled out.",
      author: "A. Ramesh",
      location: "Gachibowli • AAC Blocks"
    },
    {
      quote: "Mixing ratios explained over a call; that small gesture kept the lobby handover on track.",
      author: "Priya Das",
      location: "Kukatpally • Tiles & Adhesives"
    },
    {
      quote: "Installers arrived with the delivery and matched every valve to our pressure requirements. Zero leaks after testing.",
      author: "S. Ahmed",
      location: "Shamirpet • Plumbing Materials"
    }
  ];

  return (
    <main className="section section--cream reviews-page">
      <div className="container">
        <div className="section-head">
          <p className="section-label">Reviews</p>
          <h1>What site leads say about working with us</h1>
          <p className="section-lead">
            Procurement heads, project engineers, and fit-out coordinators share how a personal logistics desk keeps their milestones calm.
          </p>
        </div>
        <div className="review-grid">
          {testimonials.map((item) => (
            <article className="review" key={item.author}>
              <p>{item.quote}</p>
              <footer>
                <strong>{item.author}</strong>
                <span>{item.location}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}