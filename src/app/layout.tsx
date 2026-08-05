import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/home/whatsapp";
import Navbar from "@/components/universal/Navbar";
import Footer from "@/components/universal/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const siteUrl = "https://www.oventra.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "OVENTRA | Footwear B2B Order Management & Partner Meet Solution",
    template: "%s | OVENTRA",
  },
  description:
    "OVENTRA is a cloud-based B2B ordering platform built for the footwear industry. Digitize partner meets, exhibitions, dealer ordering, digital catalogs, assortments, and order management with a single smart solution.",
  keywords: [
    "OVENTRA",
    "Footwear ERP",
    "Footwear Ordering Software",
    "B2B Ordering Platform",
    "Dealer Ordering App",
    "Partner Meet Solution",
    "Exhibition Order Booking",
    "Digital Catalog",
    "Order Management System",
    "Footwear Distributor Software",
    "Dealer Management",
    "Footwear CRM",
    "Sales Ordering",
    "Footwear Technology",
    "SaaS Ordering Platform",
  ],
  authors: [{ name: "Giga Soft Systems Pvt. Ltd." }],
  creator: "Giga Soft Systems Pvt. Ltd.",
  publisher: "Giga Soft Systems Pvt. Ltd.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  applicationName: "OVENTRA",
  appleWebApp: {
    title: "OVENTRA",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "OVENTRA",
    url: siteUrl,
    title: "OVENTRA | Smart B2B Ordering Platform for the Footwear Industry",
    description:
      "Digitize footwear partner meets, dealer ordering, exhibitions, digital catalogs, assortments, and order management with OVENTRA.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OVENTRA - Smart B2B Ordering Platform for the Footwear Industry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OVENTRA | Smart B2B Ordering Platform for the Footwear Industry",
    description:
      "Digitize footwear partner meets, dealer ordering, exhibitions, digital catalogs, assortments, and order management with OVENTRA.",
    images: ["/images/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C62828",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "OVENTRA",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Android",
  url: `${siteUrl}/`,
  image: `${siteUrl}/images/og-image.jpg`,
  description:
    "OVENTRA is a cloud-based B2B ordering platform built for the footwear industry. Digitize partner meets, exhibitions, dealer ordering, digital catalogs, assortments, and order management with a single smart solution.",
  publisher: {
    "@type": "Organization",
    name: "Giga Soft Systems Pvt. Ltd.",
    url: "https://www.gigasoft.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn("h-full", "antialiased", inter.variable, "font-sans")}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}