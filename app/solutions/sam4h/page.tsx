import { getSiteContent } from "../../../lib/sanity";

export default async function Sam4hPage() {
  const content = await getSiteContent();
  const data = content.sam4h;

  return (
    <div>
      <section className="hero">
        <div>
          <span className="tagline">SAM4H</span>
          <h1>{data.heroTitle}</h1>
          <p>{data.heroSubtitle}</p>
          <p>{data.intro}</p>
        </div>
        <div className="hero-card">
          <h3>{data.cta.title}</h3>
          <p>{data.cta.description}</p>
          <a className="button primary" href="/contact">{data.cta.action}</a>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Why SAM4H works</h2>
        <div className="grid cols-3">
          {data.valueProps.map((item) => (
            <div key={item.title} className="card">
              <h3>{item.title}</h3>
              <p><strong>{item.subtitle}</strong></p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <h2 className="section-title">Up and running within a few hours</h2>
          <p>Start with a guided setup and move to production quickly.</p>
        </div>
        <div className="card">
          <div className="list">
            {data.quickStart.map((step) => (
              <div key={step.title}>
                <strong>{step.title}</strong> — {step.detail}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Features</h2>
        <div className="grid cols-3">
          {data.features.map((feature) => (
            <div key={feature} className="card">
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">What customers say</h2>
        <div className="grid cols-3">
          {data.quotes.map((quote) => (
            <blockquote key={quote.author} className="quote">
              <p>“{quote.quote}”</p>
              <strong>{quote.author}</strong>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Screenshots</h2>
        <div className="gallery">
          {data.screenshots.map((shot) => (
            <figure key={shot.title}>
              <img src={shot.image} alt={shot.title} />
              <figcaption>
                <strong>{shot.title}</strong>
                <p>{shot.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
