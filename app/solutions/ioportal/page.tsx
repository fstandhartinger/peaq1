import { getSiteContent } from "../../../lib/sanity";

export default async function IoportalPage() {
  const content = await getSiteContent();
  const data = content.ioportal;

  return (
    <div>
      <section className="hero">
        <div>
          <span className="tagline">IOportal</span>
          <h1>{data.heroTitle}</h1>
          <p>{data.heroSubtitle}</p>
          <p>{data.intro}</p>
        </div>
        <div className="hero-card">
          <h3>Proactive Service</h3>
          <p>{data.healthCheck}</p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Capabilities</h2>
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
          <h2 className="section-title">Built for scale</h2>
          <p>{data.detail}</p>
        </div>
        <div className="card">
          <h3>Up and running within a few hours</h3>
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
        <h2 className="section-title">Customer stories</h2>
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
