import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samsur Sekh - Digital Marketing Consultant",
  description:
    "Data-driven growth strategies, precision media buying, and conversion optimization for high-scale e-commerce and SaaS brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Space+Grotesk:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased selection:bg-primary-container selection:text-on-primary-container bg-[#050505] text-on-surface">
        {children}
      </body>
    </html>
  );
}
