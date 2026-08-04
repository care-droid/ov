import type { Metadata } from "next";

import DealerIntro from "@/components/parnter/dealer/1Intro";
import DealerHero from "@/components/parnter/dealer/2DashboardPage";
import DealerWhyOVENTRA from "@/components/parnter/dealer/3Whyoventra";
import DealerChallenges from "@/components/parnter/dealer/4Partnermeetchallenges";
import DealerPartnerMeet from "@/components/parnter/dealer/5Partnermeet";
import DealerHowItWorks from "@/components/parnter/dealer/6Partnerappshowcase";
import DealerChooseVariants from "@/components/parnter/dealer/7Qrcodeorderingsection";
import DealerBusinessBenefits from "@/components/parnter/dealer/8Benifits";
import DealerPowerfulFeatures from "@/components/parnter/dealer/9Powerfulfeaturespage";
import DealerWhyChooseOVENTRA from "@/components/parnter/dealer/10WhyChooseOventra";

export const metadata: Metadata = {
  title: "Dealer Ordering | OVENTRA",
  description:
    "Empower your dealers with smart digital ordering. OVENTRA connects dealers, distributors, and manufacturers on a single mobile-first platform for faster, more accurate B2B ordering.",
};

export default function DealerOrderingPage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* 1. Intro */}
      <section id="intro">
        <DealerIntro />
      </section>

      {/* 2. Dashboard */}
      <DealerHero />

   {/* 9. Powerful Features */}
      <section id="features" className="scroll-mt-24">
        <DealerPowerfulFeatures />
      </section>

      {/* 4. Challenges */}
      <section id="challenges">
        <DealerChallenges />
      </section>

      {/* 5. Partner Meet */}
      <section id="partner-meet">
        <DealerPartnerMeet />
      </section>

      {/* 6. Workflow */}
      <section id="workflow" className="scroll-mt-24">
        <DealerHowItWorks />
      </section>

      {/* 7. QR Code Ordering */}
      <section id="screens" className="scroll-mt-24">
        <DealerChooseVariants />
      </section>

      {/* 8. Benefits */}
      <section id="benefits" className="scroll-mt-24">
        {/* <DealerBusinessBenefits /> */}
      </section>

      

      {/* 10. Why Choose OVENTRA */}
      <section id="why-choose-OVENTRA" className="scroll-mt-24">
        <DealerWhyChooseOVENTRA />
      </section>
    </main>
  );
}