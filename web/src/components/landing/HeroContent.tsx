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
       Colegio Nac. EMD Mariscal. José Félix Estigarribia{" "}
        <span className="text-gray-200">
          Educamos con valores para transformar el futuro de nuestra comunidad.
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
        Averiguar más
      </TimelineContent>
    </div>
  );
}
