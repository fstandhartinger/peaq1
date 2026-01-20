import Link from "next/link";
import { getSiteContent } from "../../lib/sanity";

export default async function BlogPage() {
  const content = await getSiteContent();

  return (
    <section className="section">
      <h1 className="section-title">Blog</h1>
      <div className="grid cols-3">
        {content.posts.map((post) => (
          <article key={post.slug} className="card">
            <img src={post.heroImage} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{new Date(post.date).toLocaleDateString("en-GB", { dateStyle: "medium" })}</p>
            <p>{post.summary}</p>
            <Link className="button secondary" href={`/blog/${post.slug}`}>Read more</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
