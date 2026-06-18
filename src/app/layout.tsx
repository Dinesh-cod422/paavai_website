import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Cormorant_Garamond } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import BottomNav from "@/components/BottomNav";
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
    default: "பாவை பாரம்பரியம் | Paavai Paarampariyam | Authentic Chemical-Free Homemade Products",
    template: "%s | Paavai Paarampariyam",
  },
  description: "ஆரோக்கியம் நம் பாரம்பரியம் - Pure homemade, chemical-free spices, ghee, jaggery, and masalas from Erode, Tamil Nadu. Experience the authentic taste of South Indian heritage without any artificial mixing.",
  keywords: ["Paavai Paarambariyam", "homemade food online", "homemade ghee Erode", "chemical-free jaggery online", "traditional masalas Tamil Nadu", "sattu maavu online", "pure sambar powder", "பாவை பாரம்பரியம்", "chemical free spices india"],
  authors: [{ name: "Paavai Paarampariyam" }],
  creator: "Paavai Paarampariyam",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: "Paavai Paarampariyam | Authentic Chemical-Free Homemade Products",
    description: "Experience the authentic taste of South Indian heritage with our pure, chemical-free, and traditionally prepared homemade food products.",
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
    description: "Pure homemade, chemical-free spices, ghee, and masalas without artificial additives.",
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
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Paavai",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#fdfbf7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${cormorantGaramond.variable}`}>
      <body>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-7GER5CZHE3`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7GER5CZHE3');
          `}
        </Script>
        
        <CartProvider>
          {children}
          <BottomNav />
        </CartProvider>
      </body>
    </html>
  );
}

