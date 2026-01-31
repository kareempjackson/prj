"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "./cn";

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width="24" 
      height="24" 
      fill="none" 
      aria-hidden="true" 
      focusable="false"
      className="transition-transform duration-300"
    >
      <path
        d={isOpen 
          ? "M6 6L18 18M6 18L18 6" 
          : "M4 7h16M4 12h16M4 17h16"
        }
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="transition-all duration-300"
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Use refs to avoid re-renders on scroll
  const lastScrollYRef = useRef(0);
  const ticking = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      
      ticking.current = true;
      
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const lastY = lastScrollYRef.current;
        
        // Don't hide nav when mobile menu is open
        if (isMobileMenuOpen) {
          setIsVisible(true);
          ticking.current = false;
          return;
        }
        
        // Only update if there's a meaningful scroll difference (reduces jitter)
        const scrollDelta = Math.abs(currentScrollY - lastY);
        if (scrollDelta > 5) {
          // Show nav when scrolling up or at top, hide when scrolling down
          if (currentScrollY < lastY || currentScrollY < 100) {
            setIsVisible(true);
          } else if (currentScrollY > lastY && currentScrollY > 100) {
            setIsVisible(false);
          }
          lastScrollYRef.current = currentScrollY;
        }
        
        ticking.current = false;
      });

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Show nav after user stops scrolling
      scrollTimeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const mainNav = [
    { label: "What We Do", href: "/#what-we-do" },
    { label: "About Us", href: "/#about" },
    { label: "Events", href: "/#events" },
    { label: "Team", href: "/#team" },
  ] as const;

  const utilityNav = [
    { label: "CE Credits", href: "/continuing-education" },
    { label: "Conference 2026", href: "/event/healing-while-harmed-2026" },
    { label: "Contact", href: "/#contact" },
  ] as const;

  return (
    <>
      <header 
        className={cn(
          sticky ? "fixed top-0 left-0 right-0 z-50" : "relative",
          "transition-transform duration-300 ease-out",
          !isVisible && sticky && !isMobileMenuOpen ? "-translate-y-full" : "translate-y-0",
          className
        )}
      >
        {/* Utility Bar - Hidden on mobile for cleaner look */}
        <div className="hidden sm:block bg-ink text-paper">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-center justify-end gap-4 sm:gap-6 py-1.5 text-[11px] sm:text-xs">
              {utilityNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-paper/60 hover:text-paper transition-colors focus:outline-none focus:ring-2 focus:ring-paper/50 rounded"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Main Navigation - Slimmer on mobile */}
        <div className="relative bg-[#c94b6d]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-center justify-between py-2 sm:py-3 lg:py-4">
              {/* Logo - Smaller on mobile */}
              <Link
                href="/"
                className="inline-flex items-center gap-4 focus:outline-none focus:ring-2 focus:ring-paper/50 rounded-lg"
                aria-label="Psychologists for Racial Justice - Home"
                onClick={closeMobileMenu}
              >
                <Image
                  src="/images/logos/PRJ_White_Transparent-Vertical.png"
                  alt=""
                  width={120}
                  height={150}
                  className="h-14 sm:h-16 lg:h-20 w-auto"
                  priority
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
                {mainNav.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-paper/90 hover:text-paper transition-colors rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-paper/50"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Right Actions */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Donate Button - Always visible but smaller on mobile */}
                <Link
                  href="https://www.gofundme.com/f/donate-to-psychologists-for-racial-justice?utm_campaign=p_lico+share-sheet-first-launch&utm_medium=copy_link&utm_source="
                  className="inline-flex items-center px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-ink bg-paper rounded-full transition-colors duration-200 hover:bg-paper/90 focus:outline-none focus:ring-2 focus:ring-paper focus:ring-offset-2 focus:ring-offset-[#c94b6d]"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Donate to Psychologists for Racial Justice (opens in new tab)"
                >
                  DONATE
                </Link>

                {/* Mobile Menu Button */}
                <button
                  type="button"
                  onClick={toggleMobileMenu}
                  aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu"
                  className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-paper hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-paper/50"
                >
                  <MenuIcon isOpen={isMobileMenuOpen} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-ink/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu Drawer */}
      <nav
        id="mobile-menu"
        className={cn(
          "fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-ink z-50 lg:hidden",
          "transform transition-transform duration-300 ease-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Mobile navigation"
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-paper/10">
          <span className="text-paper/50 text-xs uppercase tracking-wider font-medium">
            Menu
          </span>
          <button
            type="button"
            onClick={closeMobileMenu}
            className="w-10 h-10 flex items-center justify-center text-paper hover:bg-paper/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-paper/50"
            aria-label="Close menu"
          >
            <MenuIcon isOpen={true} />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col h-[calc(100%-64px)] overflow-y-auto">
          {/* Main Nav Links */}
          <div className="p-4 space-y-1">
            {mainNav.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className="flex items-center gap-4 px-4 py-3.5 text-base font-medium text-paper hover:bg-paper/5 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-paper/30"
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                <span 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-paper"
                  style={{ 
                    background: `linear-gradient(135deg, ${index % 2 === 0 ? '#e07a4d, #c94b6d' : '#c94b6d, #a4c639'})`
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="mx-4 h-px bg-paper/10" />

          {/* Utility Nav Links */}
          <div className="p-4 space-y-1">
            <p className="px-4 py-2 text-xs text-paper/40 uppercase tracking-wider font-medium">
              Quick Links
            </p>
            {utilityNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-sm text-paper/70 hover:text-paper hover:bg-paper/5 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-paper/30"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Mobile Menu Footer CTA */}
          <div className="p-4 border-t border-paper/10">
            <Link
              href="https://www.gofundme.com/f/donate-to-psychologists-for-racial-justice?utm_campaign=p_lico+share-sheet-first-launch&utm_medium=copy_link&utm_source="
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-bold text-paper rounded-full transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #e07a4d 0%, #c94b6d 100%)' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Support Our Mission
              <span aria-hidden="true">→</span>
            </Link>
            <p className="mt-3 text-center text-xs text-paper/40">
              Your donation helps advance racial justice
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}
