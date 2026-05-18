import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "பாாவை பாரம்பரியம் | Paavai Paarambariyam | 100% Natural Homemade Products",
  description: "ஆரோக்கியம் நம் பாரம்பரியம் - Pure homemade, 100% natural, chemical-free spices, ghee, jaggery, and masalas from Erode, Tamil Nadu.",
  keywords: ["Paavai Paarambariyam", "organic food", "homemade ghee Erode", "natural jaggery", "traditional masalas Tamil Nadu", "sattu maavu", "sambar powder", "பாாவை பாரம்பரியம்"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${cormorantGaramond.variable}`}>
      <body>{children}</body>
    </html>
  );
}

