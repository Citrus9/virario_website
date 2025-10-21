"use client";

import Link from "next/link";
import Image from "next/image";

export const AppStoreButtonComponent = () => {
  const iosUrl = "https://apps.apple.com/us/app/fraction-quest/id6692634409";

  return (
    <Link
      href={iosUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the App Store"
      className="inline-block"
    >
      <Image
        src="/app-store-badge-black.svg"
        alt="Download on the App Store"
        width={135}
        height={40}
        priority
      />
    </Link>
  );
};


