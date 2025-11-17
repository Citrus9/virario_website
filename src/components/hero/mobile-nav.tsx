import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { AppStoreButtonComponent } from "../AppStoreButtonComponent";

type Props = {
  items: {
    label: string;
    href: string;
  }[];
  className?: string;
  showBackButton?: boolean;
  backHref?: string;
  showCta?: boolean;
};

export function MobileNav({ className, showBackButton, backHref, showCta }: Props) {
  return (
    <nav className={cn("flex w-full max-w-7xl items-center", showCta ? "justify-between gap-4" : "justify-center gap-4", className)}>
      {showCta ? (
        <>
          <Link href="/" className="inline-flex items-center gap-2">
            <Image src="/logo_fire.svg" alt="logo" width={40} height={40} />
            <span className="text-3xl font-black tracking-tight leading-none" style={{ fontFamily: 'SF Pro Rounded, ui-rounded, system-ui, sans-serif', color: '#FF8D28' }}>VIRARIO</span>
          </Link>
          <div className="ml-auto">
            <AppStoreButtonComponent />
          </div>
        </>
      ) : (
        <>
          {showBackButton ? (
            <Link href={backHref || "/"} className="absolute left-4 inline-flex items-center gap-1 text-sm font-medium">
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Back</span>
            </Link>
          ) : null}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo_fire.svg" alt="logo" width={40} height={40} />
            <span className="text-3xl font-black tracking-tight leading-none" style={{ fontFamily: 'SF Pro Rounded, ui-rounded, system-ui, sans-serif', color: '#FF8D28' }}>VIRARIO</span>
          </Link>
        </>
      )}
      {/* <Drawer direction="top">
        <DrawerTrigger className="relative -m-2 cursor-pointer p-2">
          <span className="sr-only">Open menu</span>
          <Menu className="h-6 w-6" />
        </DrawerTrigger>
        <DrawerContent className="flex flex-col gap-4 p-8">
          <DrawerTitle className="sr-only">Menu</DrawerTitle>
          {items.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </DrawerContent>
      </Drawer> */}
    </nav>
  );
}
