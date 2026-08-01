import dynamic from "next/dynamic";
import LazySection from "@/components/common/LazySection";

/** Above-the-fold — loaded immediately for LCP */
const Intro = dynamic(() => import("@/components/parnter/sections/Intro"));
const DashboardPage = dynamic(() => import("@/components/parnter/sections/DashboardPage"));

/** Below-the-fold — code-split; mounted when scrolled near */
const PartnerMeetChallenges = dynamic(
  () => import("@/components/parnter/sections/Partnermeetchallenges"),
);
const PowerfulFeatures = dynamic(
  () => import("@/components/parnter/sections/Powerfulfeaturespage"),
);
const EventTypes = dynamic(() => import("@/components/parnter/sections/Partnermeet"));
const PartnerAppShowcase = dynamic(
  () => import("@/components/parnter/sections/Partnerappshowcase"),
);
const WhyOventra = dynamic(() => import("@/components/parnter/sections/Whyoventra"));
const QRCodeOrderingSection = dynamic(
  () => import("@/components/parnter/sections/Qrcodeorderingsection"),
);
const BusinessBenefits = dynamic(() => import("@/components/parnter/sections/Benifits"));
const WhyChooseOventra = dynamic(
  () => import("@/components/parnter/sections/WhyChooseOventra"),
);

export default function PartnerMeetOrderingPage() {
  return (
    <>
      <section id="intro">
        <Intro />
      </section>

      <DashboardPage />

     <section id="features">
  <PowerfulFeatures />
</section>

      <section id="challenges">
  <PartnerMeetChallenges />
</section>


<section id="workflow">
  <EventTypes />
</section>

<section id="screens">
  <PartnerAppShowcase />
</section>

<section>
  <WhyOventra />
</section>

<section id="reports">
  <QRCodeOrderingSection />
</section>

<section id="benefits">
  <BusinessBenefits />
</section>

<section id="why-oventra">
  <WhyChooseOventra />
</section>
    </>
  );
}
