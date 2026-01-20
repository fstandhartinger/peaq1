import Link from "next/link";

type FooterProps = {
  address: string;
  email: string;
  popularPosts: { title: string; date: string; href: string }[];
  supportUrl: string;
  copyright: string;
};

export function Footer({ address, email, popularPosts, supportUrl, copyright }: FooterProps) {
  return (
    <footer className="footer">
      <div>
        <h4>Contact</h4>
        <p className="address">{address.split("\n").map((line) => (<span key={line}>{line}</span>))}</p>
        <a className="email" href={`mailto:${email}`}>{email}</a>
      </div>
      <div>
        <h4>Support</h4>
        <a href={supportUrl} target="_blank" rel="noreferrer">Service Desk</a>
      </div>
      <div>
        <h4>Popular Posts</h4>
        <ul>
          {popularPosts.map((post) => (
            <li key={post.href}>
              <Link href={post.href}>{post.title}</Link>
              <span>{post.date}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-meta">
        <span>{copyright}</span>
      </div>
    </footer>
  );
}
