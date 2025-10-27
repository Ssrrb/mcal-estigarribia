'use client';

import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { HouseIcon, InboxIcon, ZapIcon, UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';
import { siteNavigationLinks } from '@/components/landing/constants';

type LogoProps = Omit<ComponentProps<typeof Image>, 'src'> & { alt?: string };

// Simple logo component for the navbar
const Logo = ({ className, alt = 'Colegio Mariscal Estigarribia', priority = true, ...props }: LogoProps) => (
  <Image
    src="/logo-mcalesti.svg"
    alt={alt}
    width={160}
    height={138}
    priority={priority}
    className={cn('h-10 w-auto', className)}
    {...props}
  />
);

const HamburgerIcon = ({ className, ...props }: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn('pointer-events-none', className)}
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 12L20 12"
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
    />
    <path
      d="M4 12H20"
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
    />
    <path
      d="M4 12H20"
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
    />
  </svg>
);


// Types
export interface Navbar10NavItem {
  href?: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean }>;
  active?: boolean;
}

export interface Navbar10Props extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: Navbar10NavItem[];
  upgradeText?: string;
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
  onNavItemClick?: (href: string) => void;
  onUpgradeClick?: () => void;
  onUserItemClick?: (item: string) => void;
}

// Default navigation links with icons
const navIcons = [HouseIcon, InboxIcon, ZapIcon, UserIcon];

const defaultNavigationLinks: Navbar10NavItem[] = siteNavigationLinks.map((link, index) => {
  const IconComponent = navIcons[index % navIcons.length];
  return {
    ...link,
    icon: IconComponent,
  };
});

export const Navbar10 = React.forwardRef<HTMLElement, Navbar10Props>(
  (
    {
      className,
      logo = <Logo />,
      logoHref = '/',
      navigationLinks = defaultNavigationLinks,
      upgradeText = 'Upgrade',
      userName = 'John Doe',
      userEmail = 'john@example.com',
      userAvatar,
      onNavItemClick,
      onUpgradeClick,
      onUserItemClick,
      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLElement>(null);
    const pathname = usePathname();

    const resolvedNavigationLinks = React.useMemo(() => {
      return navigationLinks.map((link) => {
        const linkHref = link.href ?? '#';
        const isMatch =
          linkHref !== '#' &&
          (pathname === linkHref || (linkHref !== '/' && pathname.startsWith(`${linkHref}/`)));

        return {
          ...link,
          active: link.active ?? isMatch,
        };
      });
    }, [navigationLinks, pathname]);

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setIsMobile(width < 768); // 768px is md breakpoint
        }
      };

      checkWidth();

      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    // Combine refs
    const combinedRef = React.useCallback((node: HTMLElement | null) => {
      containerRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }, [ref]);

    return (
      <header
        ref={combinedRef}
        className={cn(
          'sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 px-4 md:px-6 **:no-underline',
          className
        )}
        {...props}
      >
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4">
          {/* Left side */}
          <div className="flex flex-1 items-center gap-2">
            {/* Mobile menu trigger */}
            {isMobile && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="group h-8 w-8 hover:bg-accent hover:text-accent-foreground"
                    variant="ghost"
                    size="icon"
                  >
                    <HamburgerIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-64 p-1">
                  <NavigationMenu className="max-w-none">
                    <NavigationMenuList className="flex-col items-start gap-0">
                      {resolvedNavigationLinks.map((link, index) => {
                        const Icon = link.icon;
                        const linkHref = link.href ?? '#';
                        return (
                          <NavigationMenuItem key={index} className="w-full">
                            <NavigationMenuLink asChild>
                              <Link
                                href={linkHref}
                                onClick={() => onNavItemClick?.(linkHref)}
                                className={cn(
                                  'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer no-underline',
                                  link.active && 'bg-accent text-accent-foreground'
                                )}
                                aria-current={link.active ? 'page' : undefined}
                              >
                                <Icon
                                  size={16}
                                  className="text-muted-foreground/80"
                                  aria-hidden={true}
                                />
                                <span>{link.label}</span>
                              </Link>
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        );
                      })}
                    </NavigationMenuList>
                  </NavigationMenu>
                </PopoverContent>
              </Popover>
            )}

            {!isMobile && (
              <NavigationMenu className="flex">
                <NavigationMenuList className="gap-2">
                  {resolvedNavigationLinks.map((link, index) => {
                    const Icon = link.icon;
                    const linkHref = link.href ?? '#';
                    return (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={linkHref}
                            onClick={() => onNavItemClick?.(linkHref)}
                            className={cn(
                              'text-foreground hover:text-primary flex items-center gap-2 py-1.5 font-medium transition-colors cursor-pointer group inline-flex h-10 w-max justify-center rounded-md bg-background px-4 py-2 text-sm focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50',
                              link.active && 'text-primary'
                            )}
                            data-active={link.active}
                            aria-current={link.active ? 'page' : undefined}
                          >
                            <Icon
                              size={16}
                              className="text-muted-foreground/80"
                              aria-hidden={true}
                            />
                            <span>{link.label}</span>
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            )}
          </div>

          {/* Middle side: Logo */}
          <div className="flex items-center">
            <Link
              href={logoHref}
              className="text-primary hover:text-primary/90 transition-colors cursor-pointer"
              aria-label="Ir a la página principal"
            >
              {logo}
            </Link>
          </div>

          {/* Right side: Actions */}
          <div className="flex flex-1 items-center justify-end gap-4"></div>
        </div>
      </header>
    );
  }
);

Navbar10.displayName = 'Navbar10';

export { Logo, HamburgerIcon };
