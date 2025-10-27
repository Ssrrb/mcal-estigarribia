"use client";

import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { TimelineContent } from "@/components/ui/timeline-animation";
import Image from "next/image";
import { RefObject } from "react";
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
        {/* Paraguay Flag */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-shrink-0">
            <Image
              src="/Flag_of_Paraguay.svg"
              alt="Bandera de Paraguay"
              width={48}
              height={32}
              className="rounded-sm shadow-md"
            />
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
