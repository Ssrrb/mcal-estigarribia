"use client";

import {
  CompanyLogos,
  Header,
  HeroContent,
  HeroSection,
  TestimonialCard,
} from "@/components/landing";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { useRef } from "react";

function AgencyHero() {
  const heroRef = useRef<HTMLDivElement>(null!);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const opacityVariants = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      opacity: 0,
    },
  };

  return (
    <section
      className="min-h-screen relative pb-10 bg-cover bg-center bg-no-repeat"
      ref={heroRef}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/School_Entrance_Cinematic_Video.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>

      {/* Header */}
      <Header timelineRef={heroRef} revealVariants={revealVariants} />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto xl:px-0 px-5">
        <HeroSection timelineRef={heroRef} revealVariants={revealVariants} />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-end mt-8 lg:mt-6">
          {/* Left Content */}
          <HeroContent timelineRef={heroRef} revealVariants={revealVariants} />

          {/* Right Content - Testimonial Card */}
          <TestimonialCard
            timelineRef={heroRef}
            opacityVariants={opacityVariants}
          />
        </div>
      </div>

      {/* Company Logos Section */}
      <CompanyLogos timelineRef={heroRef} revealVariants={revealVariants} />

      {/* Progressive Blur Effect */}
      <ProgressiveBlur
        className="pointer-events-none absolute bottom-0 left-0 h-[25%] w-full"
        blurIntensity={0.5}
      />
    </section>
  );
}

export default AgencyHero;
