"use client";

import React from "react";
import DistributorIntro from "@/components/parnter/distributor/DistributorIntro";
import DistributorDashboardPage from "@/components/parnter/distributor/DistributorDashboardPage";
import DistributorFeatures from "@/components/parnter/distributor/DistributorFeatures";
import DistributorBenefits from "@/components/parnter/distributor/DistributorBenefits";
import DistributorWorkflow from "@/components/parnter/distributor/DistributorWorkflow";
import DistributorScreens from "@/components/parnter/distributor/DistributorScreens";
import DistributorReports from "@/components/parnter/distributor/DistributorReports";
import WhyOventra from "@/components/parnter/distributor/WhyDistributor";
import WhyChooseOventra from "@/components/parnter/distributor/WhyChooseDistributor";
import Partnermeetchallenges from "@/components/parnter/distributor/DistributorChallenges";
import Qrcodeorderingsection from "@/components/parnter/distributor/DistributorQRSection";
import Partnermeet from "@/components/parnter/distributor/DistributorMeetTypes";

export default function DistributorOrderingPage() {
  return (
    <main>
  <section id="intro">
    <DistributorIntro />
  </section>

  
  <DistributorDashboardPage />


  <section id="features">
    <DistributorFeatures />
  </section>

  <section id="benefits">
    <DistributorBenefits />
  </section>

  <section id="workflow">
    <DistributorWorkflow />
  </section>

  <section id="screens">
    
    {/* <DistributorScreens /> */}
  </section>

  <section id="reports">
    <DistributorReports />
  </section>

  <WhyOventra />

  <section id="why-oventra">
    <WhyChooseOventra />
  </section>

  <Partnermeetchallenges />

  <Qrcodeorderingsection />

  <Partnermeet />
</main>
  );
}