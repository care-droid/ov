"use client"
import React from 'react';
import { bodyFont } from '@/components/why-oventra/Shared';
import { Hero } from '@/components/why-oventra/Hero';
import { Story } from '@/components/why-oventra/Story';
import { Challenges } from '@/components/why-oventra/Challenges';
import { MissionVision } from '@/components/why-oventra/MissionVision';
import { CoreValues } from '@/components/why-oventra/CoreValues';
import { Trust } from '@/components/why-oventra/Trust';
import { FinalCTA } from '@/components/why-oventra/FinalCTA';

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap');`;

export default function WhyOventraPage() {
  return (
    <div style={bodyFont} className="bg-white text-[#0A0A0A] selection:bg-[#5B0E14] selection:text-white overflow-x-hidden">
      <style>{FONT_IMPORT}</style>
      
      <Hero />
      <Story />
      <Challenges />
      <MissionVision />
      <Trust />
      <CoreValues />
      <FinalCTA />
    </div>
  );
};