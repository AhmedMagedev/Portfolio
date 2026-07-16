import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.title}`,
  description: site.summary,
  metadataBase: new URL(site.contact.website),
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description: site.summary,
    url: site.contact.website,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [{ url: "/profile.jpg", width: 800, height: 800, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description: site.summary,
    images: ["/profile.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
