"use client";

import NaNvbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import PricingSection from "@/components/plans/PricingSection";
import CTASection from "@/components/plans/CTASection";
import FAQSection from "@/components/plans/FAQSection";
import { theme } from "@/components/plans/data";

export default function PricingPage() {
  return (
    <main className="min-h-screen w-full bg-white" style={{ color: theme.heading }}>
      <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16">
        <NaNvbar />
        <PricingSection />
        <CTASection />
        <FAQSection />
      </div>
      <Footer />
    </main>
  );
}