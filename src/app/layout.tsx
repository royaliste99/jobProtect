import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Estelle Dupont",
  description: "Site de Estelle Dupont",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.svg" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
        />
        {/* Charger le script de manière asynchrone */}
        <script
          src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"
          async
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

