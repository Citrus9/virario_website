import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
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

export function MobileNav({ items, className, showBackButton, backHref }: Props) {
  return (
    <nav className={cn("flex w-full max-w-7xl items-center justify-between gap-4", className)}>
      {showBackButton ? (
        <Link href={backHref || "/"} className="inline-flex items-center gap-1 text-sm font-medium">
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Back</span>
        </Link>
      ) : <span />}
      <Link href="/" className="mx-auto">
        <Image src="/logo.svg" alt="logo" width={86} height={26} />
      </Link>
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
