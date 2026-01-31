import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Chatbot from "@/components/Chatbot";
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
  description: "Transform your home with NextGen Interior. Best Interior Designers in Bangalore for Modular Kitchens, Luxury Wardrobes, and 3BHK/Villa Interiors. Budget-friendly & Premium Turnkey Solutions.",
  metadataBase: new URL("https://nextgen-interior.vercel.app"),
  alternates: {
    canonical: "/",
  },
  applicationName: "NextGen Interior Bangalore",
  authors: [{ name: "NextGen Interior Team", url: "https://nextgen-interior.vercel.app" }],
  keywords: [
    "Interior Designers in Bangalore",
    "Best Home Interior Designers Bangalore",
    "Budget Friendly Interior Designers Bangalore",
    "Modular Kitchen Dealers in Bangalore",
    "Luxury Interior Designers Bangalore",
    "Turnkey Interior Contractors Bangalore",
    "3BHK Interior Design Cost in Bangalore",
    "Villa Interior Designers in Bengaluru",
    "Office Interior Decorators Bangalore",
    "False Ceiling Designers in Bangalore",
    "Living Room Interior Design Bangalore",
    "Top 10 Interior Designers in Bangalore",
    "Home Decor",
    "Wardrobes",
    "Profile Lighting Specialists"
  ],
  openGraph: {
    title: "NextGen Interior - Top Interior Designers in Bangalore",
    description: "Innovative Ideas, Stylish Designs. Transform your space with NextGen Interior. Expert solutions for Kitchens, Wardrobes, and Living spaces in Bengaluru.",
    url: "https://nextgen-interior.vercel.app",
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
    title: "NextGen Interior | Best in Bangalore",
    description: "Premium Interior Design Services in Bangalore for Homes and Offices.",
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
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    google: "googlef0b4e609528543be",
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bangalore",
    "geo.position": "12.9716;77.5946",
    "ICBM": "12.9716, 77.5946"
  }
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
              "image": "https://nextgen-interior.vercel.app/hero_bg.png",
              "@id": "https://nextgen-interior.vercel.app",
              "url": "https://nextgen-interior.vercel.app",
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
          <Chatbot />
          <FloatingWhatsApp />
          <FloatingContact />
          <Footer />
        </div>
      </body>
    </html>
  );
}
