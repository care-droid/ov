import type { Metadata } from "next";

import DealerHero from "@/components/parnter/dealer/DashboardPage";
import DealerChallenges from "@/components/parnter/dealer/Partnermeetchallenges";
import DealerIntro from "@/components/parnter/dealer/Intro";
import DealerHowItWorks from "@/components/parnter/dealer/Partnerappshowcase";
import DealerChooseVariants from "@/components/parnter/dealer/Qrcodeorderingsection";
import DealerPowerfulFeatures from "@/components/parnter/dealer/Powerfulfeaturespage";
import DealerBenefitsForDealers from "@/components/parnter/dealer/Partnermeet";
import DealerBenefitsForManufacturers from "@/components/parnter/dealer/Whyoventra";
import DealerBusinessBenefits from "@/components/parnter/dealer/Benifits";
import DealerWhyOventra from "@/components/parnter/dealer/WhyChooseOventra";
import PartnerMeet from "@/components/parnter/dealer/Partnermeet";
import PartnerMeetChallenges from "@/components/parnter/dealer/Partnermeetchallenges";

export const metadata: Metadata = {
  title: "Dealer Ordering | OVENTRA",
  description:
    "Empower your dealers with smart digital ordering. OVENTRA connects dealers, distributors, and manufacturers on a single mobile-first platform for faster, more accurate B2B ordering.",
};

export default function DealerOrderingPage() {
  return (
    <main className="w-full overflow-x-hidden">
      
      <DealerIntro />
      <DealerHero />

<div id="features" className="scroll-mt-24">
        <DealerPowerfulFeatures />
      </div>
      <PartnerMeetChallenges />
      <PartnerMeet/>


      <div id="workflow" className="scroll-mt-24">
        <DealerHowItWorks />
      </div>

      <div id="screens" className="scroll-mt-24">
        <DealerChooseVariants />
      </div>

      

      <div id="benefits" className="scroll-mt-24">
        <DealerBenefitsForDealers />
      </div>


      <div id="reports" className="scroll-mt-24">
        <DealerBusinessBenefits />
      </div>

      {/* Section 12 — Why OVENTRA? */}
      <DealerWhyOventra />
    </main>
  );
}