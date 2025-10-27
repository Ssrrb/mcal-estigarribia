"use client";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { RefObject } from "react";
import { people } from "./constants";

interface TestimonialCardProps {
  timelineRef: RefObject<HTMLDivElement>;
  opacityVariants: {
    visible: (i: number) => {
      opacity: number;
      transition: {
        delay: number;
        duration: number;
      };
    };
    hidden: {
      opacity: number;
    };
  };
}

export function TestimonialCard({
  timelineRef,
  opacityVariants,
}: TestimonialCardProps) {
  return (
    <TimelineContent
      as="div"
      animationNum={4}
      timelineRef={timelineRef}
      customVariants={opacityVariants}
      className="lg:mt-24"
    >
      <LiquidGlassCard
        glowIntensity="md"
        shadowIntensity="sm"
        borderRadius="12px"
        blurIntensity="sm"
        className="p-4 ml-auto sm:w-md w-full"
      >
        {/* Avatar Stack */}
        <div className="flex items-center gap-10 mb-6">
          <div className="flex flex-row items-center justify-start">
            <AnimatedTooltip items={people} />
          </div>
          <span className="text-white font-medium text-sm">
            Confiado y Respaldado por el Gobierno del Paraguay
          </span>
        </div>

        <div className="p-4 rounded-lg bg-white/10">
          {/* Testimonial */}
          <blockquote className="text-white text-sm leading-relaxed">
            {'"'}La educación es el arma más poderosa que puedes usar para cambiar el mundo.{'"'}
          </blockquote>

          {/* Attribution */}
          <cite className="text-white pt-2 inline-block font-semibold">
            Nelson Mandela
          </cite>
        </div>
      </LiquidGlassCard>
    </TimelineContent>
  );
}
