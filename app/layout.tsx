import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Victória Belli — Escritório Contábil",
  description:
    "Escritório contábil especializado em assessoria e consultoria empresarial. Escrituração contábil, fiscal e trabalhista com ética, qualidade e responsabilidade. Sorocaba-SP.",
  openGraph: {
    title: "Victória Belli — Escritório Contábil",
    description: "A contabilidade personalizada para a sua empresa. Sorocaba-SP.",
    url: "https://victoria-belli.vercel.app",
    siteName: "Victória Belli",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victória Belli — Escritório Contábil",
    description: "A contabilidade personalizada para a sua empresa. Sorocaba-SP.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
