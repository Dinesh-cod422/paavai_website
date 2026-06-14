import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
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
  metadataBase: new URL("https://paavaiwebsite.vercel.app"),
  title: {
    default: "பாவை பாரம்பரியம் | Paavai Paarampariyam | 100% Natural Homemade Products",
    template: "%s | Paavai Paarampariyam",
  },
  description: "ஆரோக்கியம் நம் பாரம்பரியம் - Pure homemade, 100% natural, chemical-free spices, ghee, jaggery, and masalas from Erode, Tamil Nadu. Experience the authentic taste of South Indian heritage.",
  keywords: ["Paavai Paarambariyam", "organic food online", "homemade ghee Erode", "natural jaggery online", "traditional masalas Tamil Nadu", "sattu maavu online", "pure sambar powder", "பாவை பாரம்பரியம்", "chemical free spices india"],
  authors: [{ name: "Paavai Paarampariyam" }],
  creator: "Paavai Paarampariyam",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: "Paavai Paarampariyam | 100% Natural Homemade Products",
    description: "Experience the authentic taste of South Indian heritage with our pure, chemical-free traditional food products.",
    siteName: "Paavai Paarampariyam",
    images: [
      {
        url: "/images/ghee.jpeg", // Using ghee as default OG image
        width: 1200,
        height: 630,
        alt: "Paavai Paarampariyam Traditional Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paavai Paarampariyam",
    description: "Pure homemade, 100% natural, chemical-free spices, ghee, and masalas.",
    images: ["/images/ghee.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${cormorantGaramond.variable}`}>
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

