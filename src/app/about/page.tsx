import HeroSection from "@/components/about/HeroSection";
import { VisionSection } from "@/components/about/VisionSection";
import { OriginSection } from "@/components/about/OriginSection";
import { AdvantageGrid } from "@/components/about/AdvantageGrid";
import { IndustriesSection } from "@/components/about/IndustriesSection";
import { PromiseSection } from "@/components/about/PromiseSection";
import { FooterCTA } from "@/components/about/FooterCTA";

export default function AboutPage() {
  return (
    <main className="relative bg-[#FFFBFC] text-[#201A1B] overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Mesh Background Effect */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#7A1428]/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-[#4A0E1A]/10 blur-[100px]" />
      </div>

      <HeroSection />
      <VisionSection />
      <OriginSection />
      <AdvantageGrid />
      <IndustriesSection />
      <PromiseSection />
      <FooterCTA />
    </main>
  );
}