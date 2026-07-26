"use client";

/**
 * OVENTRA — Partner Meet Ordering (premium pass)
 * 
 * Palette: --void #080808  --maroon #741A34  --signal #A82242
 *          --cobalt #113F7C  --paper #F3EEE6  --ash #9C948C
 * Type: Fraunces (display) / Inter (body) / IBM Plex Mono (data, ledger fields)
 */

import DashboardPage  from "@/components/sections/DashboardPage";
import Partnermeetchallenges from "@/components/sections/Partnermeetchallenges";
import Intro from "@/components/sections/Intro";
import Partnerappshowcase from "@/components/sections/Partnerappshowcase";
import Powerfulfeaturespage from "@/components/sections/Powerfulfeaturespage";
import Qrcodeorderingsection from "@/components/sections/Qrcodeorderingsection";

import Footer from "@/components/home/Footer";
import Whyoventra from "@/components/sections/Whyoventra";
import EventTypes from "@/components/sections/Partnermeet";
import Benifits from "@/components/sections/Benifits";
import WhyChooseOventra from "@/components/sections/WhyChooseOventra";
import Partnermeet from "@/components/sections/Partnermeet";

export default function PartnerMeetOrderingPage() {
  return (
    <>
    
    <section id="intro">

        <Intro />
      </section>
      <DashboardPage />

      <section id="challenges">
        <Partnermeetchallenges />
      </section>

      

      <section id="features">
        <Powerfulfeaturespage />
      </section>

      <section id="workflow">
        <EventTypes />
      </section>

      <section id="screens">
        <Partnerappshowcase />
      </section>
      
      

      <Whyoventra/>
      <section id="reports">
        <Qrcodeorderingsection />
      </section>

      <section id="benefits">
        <Benifits />
      </section>

      <section id="why-oventra">
        <WhyChooseOventra />
      </section>
    </>
  );
}