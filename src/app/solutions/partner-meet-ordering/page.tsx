import dynamic from "next/dynamic";
import LazySection from "@/components/common/LazySection";

/** Above-the-fold — loaded immediately for LCP */
const Intro = dynamic(() => import("@/components/sections/Intro"));
const DashboardPage = dynamic(() => import("@/components/sections/DashboardPage"));

/** Below-the-fold — code-split; mounted when scrolled near */
const PartnerMeetChallenges = dynamic(
  () => import("@/components/sections/Partnermeetchallenges"),
);
const PowerfulFeatures = dynamic(
  () => import("@/components/sections/Powerfulfeaturespage"),
);
const EventTypes = dynamic(() => import("@/components/sections/Partnermeet"));
const PartnerAppShowcase = dynamic(
  () => import("@/components/sections/Partnerappshowcase"),
);
const WhyOventra = dynamic(() => import("@/components/sections/Whyoventra"));
const QRCodeOrderingSection = dynamic(
  () => import("@/components/sections/Qrcodeorderingsection"),
);
const BusinessBenefits = dynamic(() => import("@/components/sections/Benifits"));
const WhyChooseOventra = dynamic(
  () => import("@/components/sections/WhyChooseOventra"),
);

export default function PartnerMeetOrderingPage() {
  return (
    <>
      <section id="intro">
        <Intro />
      </section>

      <DashboardPage />

      <LazySection minHeight="100vh">
        <section id="challenges">
          <PartnerMeetChallenges />
        </section>
      </LazySection>

      <LazySection minHeight="100vh">
        <section id="features">
          <PowerfulFeatures />
        </section>
      </LazySection>

      <LazySection minHeight="80vh">
        <section id="workflow">
          <EventTypes />
        </section>
      </LazySection>

      <LazySection minHeight="80vh">
        <section id="screens">
          <PartnerAppShowcase />
        </section>
      </LazySection>

      <LazySection minHeight="80vh">
        <WhyOventra />
      </LazySection>

      <LazySection minHeight="60vh">
        <section id="reports">
          <QRCodeOrderingSection />
        </section>
      </LazySection>

      <LazySection minHeight="80vh">
        <section id="benefits">
          <BusinessBenefits />
        </section>
      </LazySection>

      <LazySection minHeight="60vh">
        <section id="why-oventra">
          <WhyChooseOventra />
        </section>
      </LazySection>
    </>
  );
}
