"use client";

import { TimelineContent } from "@/components/ui/timeline-animation";
import { RefObject } from "react";

interface HeroContentProps {
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

export function HeroContent({ timelineRef, revealVariants }: HeroContentProps) {
  return (
    <div className="space-y-8 sm:pt-0 pt-4">
      {/* Subheading */}
      <TimelineContent
        as="p"
        animationNum={2}
        timelineRef={timelineRef}
        customVariants={revealVariants}
        className="sm:text-xl text-lg text-white leading-relaxed max-w-lg"
      >
        We turn your vision into a product, site or brand that actually
        converts,{" "}
        <span className="text-gray-200">
          so you grow faster and scale with confidence.
        </span>
      </TimelineContent>

      {/* CTA Button */}
      <TimelineContent
        as="button"
        animationNum={3}
        timelineRef={timelineRef}
        customVariants={revealVariants}
        className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg"
      >
        Book your free strategy call
      </TimelineContent>
    </div>
  );
}
