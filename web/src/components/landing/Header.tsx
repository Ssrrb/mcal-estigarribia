"use client";

import Image from "next/image";

import { TimelineContent } from "@/components/ui/timeline-animation";
import { useMediaQuery } from "@/hooks/use-media-query";
import { AlignJustify, X } from "lucide-react";
import { Drawer } from "vaul";
import type { Variants } from "motion/react";
import { CSSProperties, RefObject, useState } from "react";
import { siteNavigationLinks } from "./constants";
interface HeaderProps {
  timelineRef: RefObject<HTMLDivElement>;
  revealVariants: Variants;
}

const LOGO_SIZES =
  "(min-width: 1280px) 9rem, (min-width: 1024px) 8rem, (min-width: 768px) 7rem, (min-width: 640px) 6rem, 5rem";

export function Header({ timelineRef, revealVariants }: HeaderProps) {
  const isMobile = useMediaQuery("(max-width: 992px)");
  const [isOpen, setIsOpen] = useState(false);

  const drawerStyle = {
    "--initial-transform": "calc(100% + 8px)",
  } as CSSProperties;

  return (
    <TimelineContent
      as="header"
      animationNum={0}
      timelineRef={timelineRef}
      customVariants={revealVariants}
      className="relative z-10 xl:px-0 px-5 py-4 max-w-7xl mx-auto"
    >
      {!isMobile ? (
        <nav className="flex items-center justify-between">
          <div className="flex gap-10 items-center">
            <Image
              src="/logo-mcalesti.svg"
              alt="Logotipo del Colegio Mariscal Estigarribia"
              width={655}
              height={567}
              priority
              sizes={LOGO_SIZES}
              className="w-20 h-auto sm:w-24 md:w-28 lg:w-32 xl:w-36"
            />
            <div className="hidden md:flex items-center space-x-8">
              {siteNavigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-50 hover:text-white hover:bg-white/10 backdrop-blur-lg p-1 px-2 inline-block rounded-lg transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      ) : (
        <Drawer.Root direction="left" open={isOpen} onOpenChange={setIsOpen}>
          <Drawer.Trigger className="px-2 text-white h-9 grid place-content-center bg-neutral-800 w-fit rounded-lg">
            <AlignJustify />
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50" />
            <Drawer.Content
              className="left-2 top-2 bottom-2 fixed z-50 outline-none w-72 flex"
              style={drawerStyle}
            >
              <div className="bg-gradient-to-t from-black via-neutral-800 to-neutral-950 border border-neutral-700 text-white p-2 h-full w-full grow flex flex-col rounded-[16px]">
                <div className="w-full flex justify-between">
                  <div className="flex gap-2 px-4 flex-shrink-0 items-center text-2xl font-semibold">
                    <Image
                      src="/logo-mcalesti.svg"
                      alt="Logotipo del Colegio Mariscal Estigarribia"
                      width={655}
                      height={567}
                      sizes={LOGO_SIZES}
                      className="w-20 h-auto sm:w-24 md:w-28 lg:w-32 xl:w-36"
                    />
                  </div>
                  <button
                    className="rounded-md w-fit bg-neutral-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    <X />
                  </button>
                </div>
                <div className="rounded-b-md py-2 px-3">
                  <ul className="space-y-2">
                    {siteNavigationLinks.map((link) => (
                      <li
                        key={link.href}
                        className="hover:bg-neutral-800 cursor-pointer p-1.5 px-2 rounded-md"
                      >
                        <a href={link.href} className="block w-full">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      )}
    </TimelineContent>
  );
}
