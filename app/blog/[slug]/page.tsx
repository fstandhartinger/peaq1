import { notFound } from "next/navigation";
import { getSiteContent } from "../../../lib/sanity";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const content = await getSiteContent();
  const post = content.posts.find((item) => item.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <section className="section">
      <div className="split">
        <div>
          <h1>{post.title}</h1>
          <p>{new Date(post.date).toLocaleDateString("en-GB", { dateStyle: "medium" })}</p>
          <img src={post.heroImage} alt={post.title} />
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
        <div className="card">
          <h3>About the author</h3>
          <img src={post.author.image} alt={post.author.name} />
          <strong>{post.author.name}</strong>
          <p>{post.author.role}</p>
        </div>
      </div>
    </section>
  );
}
