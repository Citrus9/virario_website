"use client";

import { CircleEllipsis } from "lucide-react";
import Image from "next/image";

export default function TikTokInAppInterstitial() {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-start bg-gradient-to-br from-amber-400 to-orange-600 text-white p-6 font-sf-rounded-pro pt-[25vh]">
      {/* Squiggly arrow pointing to top right */}
      <img
        src="/arrow-top-right-white.svg"
        alt=""
        className="fixed top-0 right-0 w-40 h-40 pointer-events-none"
      />
      
      <section className="w-full max-w-xl text-center">
        <div className="relative rounded-2xl bg-white/95 text-neutral-900 p-5 shadow-xl text-left">
          <p className="text-lg font-semibold flex items-center justify-center gap-2 text-center">
            <span>On</span>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full">
              <img
                src="/Ionicons_logo-tiktok.svg"
                alt="TikTok"
                className="h-6 w-6"
              />
            </span>
            <span>TikTok</span>
          </p>
          <div className="mt-4 space-y-3 text-lg font-bold">
            <p className="flex items-center gap-2">
              <span>1.</span>
              <span>Tap</span>
              <CircleEllipsis className="h-6 w-6" />
              <span>on the top right corner.</span>
            </p>
            <p>
              <span>2.</span>{" "}
              <span>
                Then tap{" "}
                <span className="font-bold text-orange-500">
                  &quot;Open in browser&quot;
                </span>{" "}
                to download for free.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Powered By section */}
      <div className="fixed bottom-6 left-0 right-0 flex items-center justify-center gap-2 text-white/80 text-sm">
        <span>Powered By</span>
        <Image src="/logo.svg" alt="logo" width={86} height={26} />
      </div>
    </main>
  );
}



