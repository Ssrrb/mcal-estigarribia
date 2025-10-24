"use client";

import { TimelineContent } from "@/components/ui/timeline-animation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { AlignJustify, Send, X } from "lucide-react";
import Image from "next/image";
import { RefObject, useState } from "react";
import { Drawer } from "vaul";
import { mobileNavigationLinks, navigationLinks } from "./constants";

interface HeaderProps {
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

export function Header({ timelineRef, revealVariants }: HeaderProps) {
  const isMobile = useMediaQuery("(max-width: 992px)");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TimelineContent
      as="header"
      animationNum={0}
      timelineRef={timelineRef}
      customVariants={revealVariants}
      className="relative z-50 xl:px-0 px-5 py-6 max-w-7xl mx-auto"
    >
      {!isMobile ? (
        <nav className="flex items-center justify-between">
          <div className="flex gap-10 items-center">
            <Image
              src="/logo-mcalesti.svg"
              alt="Municipal College Logo"
              width={120}
              height={80}
              className="h-12 w-auto"
            />
            <NavigationMenu className="hidden md:flex" viewport={false}>
              <NavigationMenuList>
                {navigationLinks.map((link) => (
                  <NavigationMenuItem key={link.id}>
                    {link.items ? (
                      <>
                        <NavigationMenuTrigger className="text-gray-50 hover:text-white hover:bg-white/10 data-[state=open]:bg-white/10 data-[state=open]:text-white backdrop-blur-lg bg-transparent border-none shadow-none h-10">
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-black/95 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/50">
                          <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2">
                            {link.items.map((item) => (
                              <li key={item.href}>
                                <NavigationMenuLink asChild>
                                  <a
                                    href={item.href}
                                    className={cn(
                                      "block select-none space-y-1.5 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200",
                                      "hover:bg-white/15 hover:text-white focus:bg-white/15 focus:text-white text-gray-100",
                                      "border border-transparent hover:border-white/10"
                                    )}
                                  >
                                    <div className="text-sm font-semibold leading-none">
                                      {item.title}
                                    </div>
                                    {item.description && (
                                      <p className="line-clamp-2 text-xs leading-snug text-gray-400">
                                        {item.description}
                                      </p>
                                    )}
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        href={link.href}
                        className="text-gray-50 hover:text-white hover:bg-white/10 backdrop-blur-lg px-4 py-2 inline-flex items-center h-10 rounded-lg transition-colors duration-200 bg-transparent border-none shadow-none"
                      >
                        {link.label}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-blue-500 p-2 text-white rounded-full">
              <Send className="w-5 h-5" />
            </div>
            <button className="bg-linear-to-t from-blue-500 to-blue-600 text-white backdrop-blur-sm border border-blue-500 shadow-md shadow-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 transition-all duration-200">
              Llamar
            </button>
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
              style={
                {
                  "--initial-transform": "calc(100% + 8px)",
                } as React.CSSProperties
              }
            >
              <div className="bg-linear-to-t from-black via-neutral-800 to-neutral-950 border border-neutral-700 text-white p-2 h-full w-full grow flex flex-col rounded-2xl">
                <Drawer.Title className="sr-only">
                  Menú de navegación
                </Drawer.Title>
                <div className="w-full flex justify-between">
                  <div className="flex gap-2 px-4 shrink-0 items-center">
                    <Image
                      src="/logo-mcalesti.svg"
                      alt="Municipal College Logo"
                      width={100}
                      height={60}
                      className="h-10 w-auto"
                    />
                  </div>
                  <button
                    className="rounded-md w-fit bg-neutral-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    <X />
                  </button>
                </div>
                <div className="rounded-b-md py-2 px-3 overflow-y-auto">
                  <ul className="space-y-1">
                    {mobileNavigationLinks.map((link) => (
                      <li key={link.id}>
                        {link.items ? (
                          <div className="space-y-1">
                            <div className="text-gray-50 font-semibold p-2 px-3">
                              {link.label}
                            </div>
                            <ul className="ml-2 space-y-1">
                              {link.items.map((item) => (
                                <li
                                  key={item.href}
                                  className="hover:bg-neutral-800 cursor-pointer p-1.5 px-3 rounded-md"
                                >
                                  <a
                                    href={item.href}
                                    className="text-gray-300 text-sm"
                                  >
                                    {item.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <div className="hover:bg-neutral-800 cursor-pointer p-2 px-3 rounded-md">
                            <a href={link.href} className="text-gray-50">
                              {link.label}
                            </a>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center space-x-4 pt-4 mt-4 border-t border-neutral-700">
                    <div className="bg-blue-500 p-2 text-white rounded-full">
                      <Send className="w-5 h-5" />
                    </div>
                    <button className="bg-linear-to-t from-blue-500 to-blue-600 text-white backdrop-blur-sm border border-blue-500 shadow-md shadow-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 transition-all duration-200">
                      Llamar
                    </button>
                  </div>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      )}
    </TimelineContent>
  );
}
