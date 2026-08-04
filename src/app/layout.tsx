import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "OVENTRA — Orchestrate every tool, one calm surface",
  description:
    "OVENTRA unifies your team's tools, signals, and workflows into a single premium control surface. Connect everything. Chase nothing.",
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
  className={cn(
    "h-full",
    "antialiased",
    inter.variable,
    "font-sans"
  )}
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
