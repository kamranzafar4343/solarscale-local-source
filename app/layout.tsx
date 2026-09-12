import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SolarScale — Digital Growth Systems for Solar Companies",
  description: "SolarScale is a specialized solar digital agency building high-performance websites, SEO systems, lead-generation experiences and conversion infrastructure for solar companies.",
  keywords: ["solar web design","solar marketing agency","solar website design","solar lead generation","solar SEO","solar digital agency"],
  openGraph: { title: "SolarScale — Digital Growth Systems for Solar Companies", description: "High-performance websites, search systems and digital experiences built specifically for solar companies.", type: "website" },
  twitter: { card: "summary", title: "SolarScale", description: "Digital growth systems for solar companies." },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"ProfessionalService","name":"SolarScale","description":"Digital growth systems for solar companies.","areaServed":"US","serviceType":["Solar web design","Solar SEO","Solar lead generation","Conversion optimization"]})}}/>
    </html>
  );
}
