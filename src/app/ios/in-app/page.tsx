"use client";

import { CircleEllipsis } from "lucide-react";
import Image from "next/image";

export default function TikTokInAppInterstitial() {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-start bg-gradient-to-br from-amber-400 to-orange-600 text-white p-6 font-sf-rounded-pro pt-[19vh]">
      {/* Squiggly arrow pointing to top right */}
      <Image
        src="/arrow-top-right-white.svg"
        alt=""
        width={90}
        height={90}
        className="fixed top-0 right-0 w-40 h-40 pointer-events-none"
      />
      
      <section className="w-full max-w-xl text-center">
        <div className="relative rounded-2xl bg-white text-neutral-900 p-5 shadow-xl text-left">
          <p className="text-lg font-semibold flex items-center justify-center gap-2 text-center">
            <span>You&apos;re on</span>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full">
              <Image
                src="/Ionicons_logo-tiktok.svg"
                alt="TikTok"
                width={24}
                height={24}
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
      <div className="flex-1 flex flex-col items-center justify-center gap-4 text-white text-sm">
        <Image src="/logo-app.svg" alt="logo" width={200} height={200} style={{ borderRadius: '20%', filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))' }} />
        <p className="text-5xl font-black">Virario</p>
      </div>
    </main>
  );
}



