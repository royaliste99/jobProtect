import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Meta description globale pour tout le site
export const metadata: Metadata = {
  title: "Estelle EPI - Équipements de protection à Beauvais",
  description:
    "Estelle EPI, dirigée par Estelle Dupont, fournit des équipements de protection individuelle (EPI), vêtements de travail personnalisés et chaussures de sécurité à Beauvais (60 000) pour les entreprises et les particuliers.",
  keywords:
    "Estelle Dupont, EPI, équipements de protection, vêtements de travail, chaussures de sécurité, Beauvais, 60000, vêtements personnalisés, protection professionnelle",
  authors: [{ name: "Estelle Dupont" }],
  openGraph: {
    title: "Estelle EPI - Équipements de protection à Beauvais",
    description:
      "Découvrez la large gamme d'équipements de protection et de vêtements de travail personnalisés proposés par Estelle EPI à Beauvais (60 000).",
    images: [
      {
        url: "/images/social-preview.jpg",
        alt: "Équipements de protection Estelle EPI",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content="Estelle EPI - Équipements de protection à Beauvais" />
        <meta property="og:description" content="Découvrez les équipements de protection professionnelle et vêtements de travail personnalisés de Estelle EPI." />
        <meta property="og:image" content="/images/social-preview.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://estelle-epi.com" />

        {/* Lien vers Swiper (CDN) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
        />

        {/* Script Swiper (chargé de manière asynchrone) */}
        <script
          src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"
          defer
        />
      </head>
      <body className={inter.className}>
        {children}

        
      </body>
    </html>
  );
}
