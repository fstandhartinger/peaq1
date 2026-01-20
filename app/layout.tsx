import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { getSiteContent } from "../lib/sanity";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: "peaq GmbH · Analytics & automation",
  description: "Storage automation, analytics, and performance monitoring for Hitachi environments."
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const content = await getSiteContent();
  return (
    <html lang="en" className={`${bodoni.variable} ${manrope.variable}`}>
      <body>
        <div className="page">
          <Nav items={content.nav} />
          <main>{children}</main>
          <Footer
            address={content.site.address}
            email={content.site.email}
            popularPosts={content.popularPosts}
            supportUrl={content.site.supportUrl}
            copyright={content.site.copyright}
          />
        </div>
      </body>
    </html>
  );
}
