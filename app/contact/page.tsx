import { getSiteContent } from "../../lib/sanity";

export default async function ContactPage() {
  const content = await getSiteContent();

  return (
    <section className="section split">
      <div>
        <h1>Contact Us</h1>
        <p>Address:</p>
        <p className="address">{content.site.address.split("\n").map((line) => (<span key={line}>{line}</span>))}</p>
        <p>eMail:</p>
        <a className="button secondary" href={`mailto:${content.site.email}`}>{content.site.email}</a>
      </div>
      <div className="card">
        <h2>Request additional infos</h2>
        <p>For more information please get in touch using the form below:</p>
        <form className="list" action="#">
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="company" placeholder="Company" />
          <textarea name="message" placeholder="How can we help?" rows={4}></textarea>
          <button className="button primary" type="submit">Send request</button>
        </form>
      </div>
    </section>
  );
}
