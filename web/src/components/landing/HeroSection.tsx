"use client";

import { TimelineContent } from "@/components/ui/timeline-animation";
import VerticalCutReveal from "@/components/ui/vertical-cut-reveal";
import { RefObject } from "react";

interface HeroSectionProps {
  timelineRef: RefObject<HTMLDivElement>;
  revealVariants: {
    visible: (i: number) => {
      y: number;
      opacity: number;
      filter: string;
      transition: {
        delay: number;
        duration: number;
      };
    };
    hidden: {
      filter: string;
      y: number;
      opacity: number;
    };
  };
}

export function HeroSection({ timelineRef, revealVariants }: HeroSectionProps) {
  return (
        <article className="max-w-2xl text-white space-y-4 pt-14 lg:pt-8">
      {/* Metric Badge */}
      <TimelineContent
        as="div"
        animationNum={1}
        timelineRef={timelineRef}
        customVariants={revealVariants}
        className="flex items-center space-x-3"
      >
        <span className="relative flex size-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75"></span>
          <span className="relative inline-flex size-4 rounded-full bg-blue-600"></span>
        </span>
        <span className="sm:text-lg text-sm">
          Colegio Nacional EMD Mcal. Estigarribia
        </span>
      </TimelineContent>

      {/* Main Headline */}
      <h1 className="sm:text-5xl text-3xl lg:text-6xl font-semibold leading-tight">
        <VerticalCutReveal
          splitBy="words"
          staggerDuration={0.15}
          staggerFrom="first"
          reverse={true}
          containerClassName="justify-start"
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 40,
            delay: 0.8,
          }}
        >
          Al servicio de la educación carapegueña desde 1929
        </VerticalCutReveal>
      </h1>
    </article>
  );
}
