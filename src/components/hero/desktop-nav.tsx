
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

export function DesktopNav({ items, className, showBackButton, backHref, showCta }: Props) {
  return (
    <nav className={cn("relative mx-auto flex w-full max-w-7xl items-center", showCta ? "justify-between px-4" : "justify-center gap-4", className)}>
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
            <Link href={backHref || "/"} className="absolute left-4 inline-flex items-center gap-2 text-sm font-medium">
              <ChevronLeft className="h-5 w-5" />
              <span className="hidden sm:inline">Back</span>
            </Link>
          ) : null}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo_fire.svg" alt="logo" width={40} height={40} />
            <span className="text-3xl font-black tracking-tight leading-none" style={{ fontFamily: 'SF Pro Rounded, ui-rounded, system-ui, sans-serif', color: '#FF8D28' }}>VIRARIO</span>
          </Link>
        </>
      )}
      {/* <NavigationMenu>
        <NavigationMenuList className="gap-8">
          {items.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink href={item.href}>{item.label}</NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu> */}
      {/* <Button asChild>
        <Link href="/pricing">Get Started</Link>
      </Button> */}
      {/* <AppStoreButtonComponent /> */}
    </nav>
  );
}
