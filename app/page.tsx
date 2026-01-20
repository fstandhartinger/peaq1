import Link from "next/link";
import { getSiteContent } from "../lib/sanity";

export default async function HomePage() {
  const content = await getSiteContent();

  return (
    <>
      <section className="hero">
        <div>
          <span className="tagline">{content.site.tagline}</span>
          <h1>{content.site.name}</h1>
          <p>{content.site.heroHeadline}</p>
          <p>{content.home.intro}</p>
          <div className="cta-row">
            <Link className="button primary" href="/contact">{content.site.ctaPrimary}</Link>
            <Link className="button secondary" href="#solutions">{content.site.ctaSecondary}</Link>
          </div>
        </div>
        <div className="hero-card">
          <h2>Automation, clarity, and control for Hitachi storage.</h2>
          <p>
            peaq combines analytics and automation to help storage teams move faster with fewer
            errors. From provisioning to proactive monitoring, every product is designed to
            simplify complex infrastructure.
          </p>
        </div>
      </section>

      <section id="solutions" className="section">
        <h2 className="section-title">Solutions built for storage leaders</h2>
        <div className="grid cols-3">
          {content.home.highlights.map((item) => (
            <article key={item.title} className="card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <Link className="button secondary" href={item.href}>Learn more</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <h2 className="section-title">Analytics & automation for every tier</h2>
          <p>
            peaq helps storage organizations modernize without disrupting operations. Our tooling
            turns raw telemetry into actionable insights and automates repetitive workflows at
            scale.
          </p>
        </div>
        <div className="card">
          <h3>Why teams choose peaq</h3>
          <div className="list">
            <span>• Faster provisioning with policy-driven automation</span>
            <span>• Continuous performance insight with anomaly detection</span>
            <span>• Governance-ready reporting and audit trails</span>
            <span>• Cloud-first delivery with rapid onboarding</span>
          </div>
        </div>
      </section>
    </>
  );
}
