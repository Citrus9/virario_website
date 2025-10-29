"use client";

import { MobileNav } from "@/components/hero/mobile-nav";
import { DesktopNav } from "@/components/hero/desktop-nav";
import { useEffect, useState } from "react";

const navItems = [
  {
    label: "Features",
    href: "/#features",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Legal",
    href: "/terms-and-conditions",
  },
];

type Props = {
  showBackButton?: boolean;
  backHref?: string;
};

export function Nav({ showBackButton, backHref }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 4);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={
        "fixed inset-x-0 top-0 z-50 transition-colors" +
        (scrolled
          ? " bg-background/80 backdrop-blur-sm border-b border-border"
          : " bg-transparent")
      }
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-2">
        <MobileNav className="flex md:hidden" items={navItems} showBackButton={showBackButton} backHref={backHref} />
        <DesktopNav className="hidden md:flex" items={navItems} showBackButton={showBackButton} backHref={backHref} />
      </div>
    </div>
  );
}
