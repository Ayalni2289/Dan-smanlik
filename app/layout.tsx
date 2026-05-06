import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meryem Yalnız Sağlık — Kişisel Danışmanlık",
  description: "Klinik olarak test edilmiş, doğal içerikli sağlık ürünleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
        
      </body>
    </html>
  );
}
