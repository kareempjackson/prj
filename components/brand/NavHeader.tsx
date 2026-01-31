"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "./cn";

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" width="22" height="22" fill="none" {...props}>
      <path
        d="M3 6h14M3 10h14M3 14h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export type NavHeaderProps = {
  className?: string;
  sticky?: boolean;
};

export function NavHeader({
  className,
  sticky = true,
}: NavHeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show nav when scrolling up or at top, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);

      // Clear existing timeout
      clearTimeout(scrollTimeout);
      
      // Show nav after user stops scrolling
      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 800);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY]);

  const mainNav = [
    { label: "What We Do", href: "/#what-we-do" },
    { label: "About Us", href: "/#about" },
    { label: "Events", href: "/#events" },
  ] as const;

  const utilityNav = [
    { label: "CE Credits", href: "/continuing-education" },
    { label: "Conference 2026", href: "/#events" },
    { label: "Contact", href: "/#contact" },
  ] as const;

  return (
    <header 
      className={cn(
        sticky ? "fixed top-0 left-0 right-0 z-50" : "relative",
        "transition-transform duration-300 ease-out",
        !isVisible && sticky ? "-translate-y-full" : "translate-y-0",
        className
      )}
    >
      {/* Utility Bar */}
      <div className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-end gap-6 py-2 text-xs">
            {utilityNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-paper/70 hover:text-paper transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="relative bg-[#c94b6d]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-4"
              aria-label="Home"
            >
              <Image
                src="/images/logos/PRJ_White_Transparent-Vertical.png"
                alt="Psychologists for Racial Justice"
                width={120}
                height={150}
                className="h-24 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
              {mainNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-5 py-2.5 text-sm font-medium text-paper/90 hover:text-paper transition-colors rounded-lg hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Donate Button */}
              <Link
                href="https://www.gofundme.com/f/donate-to-psychologists-for-racial-justice?utm_campaign=p_lico+share-sheet-first-launch&utm_medium=copy_link&utm_source="
                className="hidden sm:inline-flex items-center px-6 py-3 text-sm font-bold text-ink bg-paper rounded-full transition-colors duration-200 hover:bg-paper/90"
              >
                DONATE
              </Link>

              {/* Mobile Menu Button */}
              <button
                aria-label="Open menu"
                className="lg:hidden w-11 h-11 flex items-center justify-center text-paper hover:bg-white/10 rounded-lg transition-colors"
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
