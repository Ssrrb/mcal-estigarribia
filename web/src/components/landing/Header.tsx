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
          <Drawer.Trigger className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white/90 shadow-[0_1px_0_rgba(255,255,255,0.15)_inset] backdrop-blur-md transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">
            <span className="sr-only">Abrir menú de navegación</span>
            <AlignJustify className="h-5 w-5" />
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />
            <Drawer.Content
              className="fixed left-3 top-3 bottom-3 z-50 flex w-[min(20rem,calc(100%-1.5rem))] outline-none"
              style={drawerStyle}
            >
              <div className="flex h-full w-full grow flex-col rounded-[22px] border border-white/15 bg-white/10 p-4 text-white shadow-[0_0_1px_rgba(255,255,255,0.4)_inset,0_16px_60px_-20px_rgba(15,23,42,0.6)] backdrop-blur-2xl">
                <div className="flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/5 px-4 py-3 shadow-inner">
                  <Drawer.Title className="flex items-center gap-3 text-base font-semibold text-white">
                    <Image
                      src="/logo-mcalesti.svg"
                      alt="Logotipo del Colegio Mariscal Estigarribia"
                      width={655}
                      height={567}
                      sizes={LOGO_SIZES}
                      className="w-16 h-auto"
                    />
                    <span className="hidden text-sm font-medium uppercase tracking-[0.2em] sm:inline">
                      Navegación
                    </span>
                  </Drawer.Title>
                  <Drawer.Close
                    className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white/90 transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                    aria-label="Cerrar menú de navegación"
                  >
                    <X className="h-4 w-4" />
                  </Drawer.Close>
                </div>
                <Drawer.Description className="sr-only">
                  Enlaces de navegación principal del sitio.
                </Drawer.Description>
                <nav className="mt-6 grow overflow-y-auto">
                  <ul className="space-y-1.5">
                    {siteNavigationLinks.map((link) => (
                      <li key={link.href}>
                        <Drawer.Close asChild>
                          <a
                            href={link.href}
                            className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base font-medium text-white/95 transition hover:border-white/30 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                          >
                            {link.label}
                          </a>
                        </Drawer.Close>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      )}
    </TimelineContent>
  );
}
