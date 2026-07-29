import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Features from "@/components/home/Features";
import Integrations from "@/components/home/Integrations";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import ClientLogos from "@/components/home/ClientLogos";
import BlogSection from "@/components/home/BlogSection";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";
import ScrollToTop from "@/components/home/ScrollToTop";
import DemoPage from "@/components/home/demo";

import Whatsapp from "@/components/home/whatsapp";
export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Stats />
        <Integrations />
        <Features />
        <Process />
        <Testimonials />
        {/* <ClientLogos /> */}
        <BlogSection />
        
        <CTA />
        
      </main>
      <DemoPage/>
      <Whatsapp />
    </>
  );
}
