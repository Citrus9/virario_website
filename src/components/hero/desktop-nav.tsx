import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { AppStoreButtonComponent } from "../AppStoreButtonComponent";
import { ChevronLeft } from "lucide-react";

type Props = {
  items: {
    label: string;
    href: string;
  }[];
  className?: string;
  showBackButton?: boolean;
  backHref?: string;
};

export function DesktopNav({ items, className, showBackButton, backHref }: Props) {
  return (
    <nav className={cn("mx-auto flex w-full max-w-7xl items-center justify-center gap-4", className)}>
      {showBackButton ? (
        <Link href={backHref || "/"} className="absolute left-4 inline-flex items-center gap-2 text-sm font-medium">
          <ChevronLeft className="h-5 w-5" />
          <span className="hidden sm:inline">Back</span>
        </Link>
      ) : null}
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={86} height={26} />
      </Link>
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
