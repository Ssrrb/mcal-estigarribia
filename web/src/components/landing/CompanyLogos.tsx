"use client";

import { TimelineContent } from "@/components/ui/timeline-animation";
import Image from "next/image";
import { RefObject } from "react";
import { companyLogos } from "./constants";

interface CompanyLogosProps {
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

export function CompanyLogos({
  timelineRef,
  revealVariants,
}: CompanyLogosProps) {
  return (
    <TimelineContent
      as="div"
      animationNum={5}
      timelineRef={timelineRef}
      customVariants={revealVariants}
      className="mt-28 xl:px-0 px-5 mb-12 text-white max-w-7xl mx-auto relative z-10"
    >
      <div className="flex flex-wrap items-center justify-between gap-8">
        <div className="flex items-center space-x-2">
          <span className="text-lg">4.5</span>
          <span className="">en Google Maps</span>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
            ))}
          </div>
        </div>
        {companyLogos.map((company) => (
          <div key={company.id} className="relative">
            <Image
              src={company.src}
              alt={company.name}
              width={company.width}
              height={company.height}
              className="object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </TimelineContent>
  );
}
