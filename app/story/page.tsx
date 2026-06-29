"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import { useLenis } from "@/hooks/useLenis";

import { STORY_SECTIONS } from "@/lib/constants";
import StoryHero from "@/components/story/StoryHero";
import StorySectionCard from "@/components/story/StorySectionCard";
import FounderSection from "@/components/story/FounderSection";
import MissionVisionSection from "@/components/story/MissionVisionSection";
import TimelineSection from "@/components/story/TimelineSection";
import StatsSection from "@/components/story/StatsSection";
import TeamValuesSection from "@/components/story/TeamValuesSection";
import StoryCTA from "@/components/story/StoryCTA";
import { useState } from "react";
import EventPreheader from "@/components/PreHeader";

export default function StoryPage() {
  useLenis();
  const [isPreheaderOpen, setIsPreheaderOpen] = useState(true);

  return (
    <>
      <Cursor />
      <Trail />

      <EventPreheader onClose={setIsPreheaderOpen} />
      <Navbar isPreheaderOpen={isPreheaderOpen} />
      <main className="pt-16">
        <StoryHero />
        <FounderSection />
        <MissionVisionSection />
        <div className="relative w-full">
          {STORY_SECTIONS.map((section, index) => (
            <StorySectionCard
              key={section.id}
              section={section}
              index={index}
            />
          ))}
        </div>

        <TimelineSection />
        <StatsSection />
        <TeamValuesSection />
        <StoryCTA />
      </main>
      <Footer />
    </>
  );
}
