import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export function Nav({ items }: { items: NavItem[] }) {
  return (
    <nav className="nav">
      <Link href="/" className="brand">
        <span className="brand-mark" aria-hidden>
          ◐
        </span>
        <span>peaq</span>
      </Link>
      <div className="nav-links">
        {items.map((item) =>
          item.external ? (
            <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ) : (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          )
        )}
      </div>
    </nav>
  );
}
