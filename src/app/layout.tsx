import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/home/whatsapp";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Oventra — Orchestrate every tool, one calm surface",
  description:
    "Oventra unifies your team's tools, signals, and workflows into a single premium control surface. Connect everything. Chase nothing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
       <Navbar />
        {children}
        <WhatsAppButton/>
        <Footer/>
      </body>
    </html>
  );
}
