"use client";

import React from "react";

import DistributorIntro from "@/components/parnter/distributor/1DistributorIntro";
import DistributorDashboardPage from "@/components/parnter/distributor/2DistributorDashboardPage";
import WhyDistributor from "@/components/parnter/distributor/3WhyDistributor";
import DistributorChallenges from "@/components/parnter/distributor/4DistributorChallenges";
import DistributorMeetTypes from "@/components/parnter/distributor/5DistributorMeetTypes";
import DistributorWorkflow from "@/components/parnter/distributor/6DistributorWorkflow";
import DistributorQRSection from "@/components/parnter/distributor/7DistributorQRSection";
import DistributorBenefits from "@/components/parnter/distributor/8DistributorBenefits";
import DistributorScreens from "@/components/parnter/distributor/9DistributorScreens";
import DistributorReports from "@/components/parnter/distributor/10DistributorReports";
import DistributorFeatures from "@/components/parnter/distributor/11DistributorFeatures";
import WhyChooseDistributor from "@/components/parnter/distributor/12WhyChooseDistributor";

export default function DistributorOrderingPage() {
  return (
    <main>
      <section id="intro">
        <DistributorIntro />
      </section>

      <DistributorDashboardPage />

      <WhyDistributor />

      <DistributorChallenges />

      <DistributorMeetTypes />

      <section id="workflow">
        <DistributorWorkflow />
      </section>

      <DistributorQRSection />

      <section id="benefits">
        <DistributorBenefits />
      </section>

      <section id="screens">
        {/* <DistributorScreens /> */}
      </section>

      <section id="reports">
        <DistributorReports />
      </section>

      <section id="features">
        <DistributorFeatures />
      </section>

      <section id="why-oventra">
        <WhyChooseDistributor />
      </section>
    </main>
  );
}