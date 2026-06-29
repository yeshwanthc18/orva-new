


"use client";

import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Process from "@/components/Process";
import Values from "@/components/Values";
import Reach from "@/components/Reach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useLenis } from "@/hooks/useLenis";
import ZoomParallax from "@/components/ZoomParallax";
import Badge from "@/components/Badge";
import AnnouncementBar from "@/components/AnnouncementBar";
import EventPreheader from "@/components/PreHeader";
import { useState } from "react";
import HomeNewPage from "./home/page";

export default function Page() {
  useLenis();
  const [isPreheaderOpen, setIsPreheaderOpen] = useState(true);

  return (
    <>

      {/* <Cursor />
      <Trail />
      <Loader />
   
      <EventPreheader onClose={setIsPreheaderOpen} />
      <Navbar isPreheaderOpen={isPreheaderOpen} />
      <main>
        <Hero />
        <ZoomParallax />
        <Story />
        <Process />
        <Values />
        <Reach />
        <Badge />
        <Contact />
      </main>
      <Footer /> */}
      <HomeNewPage />
    </>
  );
}
