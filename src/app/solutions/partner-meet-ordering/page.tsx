import dynamic from "next/dynamic";
import LazySection from "@/components/common/LazySection";

/** Above-the-fold — loaded immediately for LCP */
const Intro = dynamic(() => import("@/components/parnter/sections/1Intro"));
const DashboardPage = dynamic(() => import("@/components/parnter/sections/2DashboardPage"));

/** Below-the-fold — code-split; mounted when scrolled near */
const WhyOVENTRA = dynamic(
  () => import("@/components/parnter/sections/3WhyOVENTRA")
);

const PartnerMeetChallenges = dynamic(
  () => import("@/components/parnter/sections/4Partnermeetchallenges")
);

const PartnerMeet = dynamic(
  () => import("@/components/parnter/sections/5Partnermeet")
);

const PartnerAppShowcase = dynamic(
  () => import("@/components/parnter/sections/6Partnerappshowcase")
);

const QRCodeOrderingSection = dynamic(
  () => import("@/components/parnter/sections/7Qrcodeorderingsection")
);

const Benefits = dynamic(
  () => import("@/components/parnter/sections/8Benifits")
);

const PowerfulFeatures = dynamic(
  () => import("@/components/parnter/sections/9Powerfulfeaturespage")
);

const WhyChooseOVENTRA = dynamic(
  () => import("@/components/parnter/sections/10WhyChooseOVENTRA")
);

export default function PartnerMeetOrderingPage() {
  return (
    <>
      <section id="intro">
        <Intro />
      </section>

      <DashboardPage />

      <section id="why-OVENTRA">
        <WhyOVENTRA />
      </section>

      <section id="challenges">
        <PartnerMeetChallenges />
      </section>

      <section id="partner-meet">
        <PartnerMeet />
      </section>

      
      <section id="workflow">
        <PartnerAppShowcase />
      </section>

      <section id="qr-ordering">
        <QRCodeOrderingSection />
      </section>

      <section id="benefits">
        <Benefits />
      </section>

      <section id="features">
        <PowerfulFeatures />
      </section>

      <section id="why-choose-OVENTRA">
        <WhyChooseOVENTRA />
      </section>
    </>
  );
}