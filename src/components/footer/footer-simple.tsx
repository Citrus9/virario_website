import Link from "next/link";
import { FooterBlur } from "@/components/footer/footer-blur";

type FooterSimpleProps = {
  appName?: string;
  downloadHref?: string;
  year?: number;
};

export function FooterSimple({
  appName = "VIRARIO",
  // Mirrors the iOS URL used in `AppStoreButtonComponent` so both point consistently
  downloadHref = "https://apps.apple.com/us/app/fraction-quest/id6692634409",
  year = new Date().getFullYear(),
}: FooterSimpleProps) {
  return (
    <footer className="relative overflow-hidden border-t border-gray-200/70">
      {/* <FooterBlur /> */}
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-sm text-gray-600">© {year} {appName}</div>
        <nav className="flex items-center gap-8 text-sm text-gray-700">
          <Link
            href={downloadHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download iOS"
            className="hover:text-gray-900"
          >
            Download iOS
          </Link>
          <Link href="/privacy-policy" className="hover:text-gray-900">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-gray-900">
            Terms and Conditions
          </Link>
        </nav>
      </div>
    </footer>
  );
}


