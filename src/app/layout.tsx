import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextGen Interior - Top Interior Designers in Bangalore",
  description: "Innovative Ideas, Stylish Designs. Modern Living Room Sets, Modular Kitchens, and more. Best Interior Design Studio in Bangalore.",
  keywords: ["Interior Designers", "Bangalore", "Home Decor", "Modular Kitchen", "Living Room Designs", "Wardrobes", "Office Interiors", "Luxury Interiors"],
  openGraph: {
    title: "NextGen Interior - Top Interior Designers in Bangalore",
    description: "Innovative Ideas, Stylish Designs. Transform your space with NextGen Interior.",
    url: "https://nextgeninterior.in",
    siteName: "NextGen Interior",
    images: [
      {
        url: "/hero_bg.png",
        width: 1200,
        height: 630,
        alt: "NextGen Interior Luxury Living Room",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextGen Interior",
    description: "Best Interior Designers in Bangalore",
    images: ["/hero_bg.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InteriorDesigner",
              "name": "NextGen Interior",
              "image": "https://nextgeninterior.in/hero_bg.png",
              "@id": "https://nextgeninterior.in",
              "url": "https://nextgeninterior.in",
              "telephone": "9580591558",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Thanisandra Main Road, near Medina Tea Corner",
                "addressLocality": "Bangalore",
                "addressRegion": "KA",
                "postalCode": "560045",
                "addressCountry": "IN",
              },
              "sameAs": [
                "https://www.facebook.com/share/1C8B2cknN1/",
                "https://www.instagram.com/zaidmalik55?igsh=aHkxNWhlaWtsYTFp",
              ],
            }),
          }}
        />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <FloatingContact />
          <Footer />
        </div>
      </body>
    </html>
  );
}
