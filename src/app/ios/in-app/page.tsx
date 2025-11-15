"use client";

import { useEffect, useState } from "react";

export default function TikTokInAppInterstitial() {
  const [copied, setCopied] = useState(false);

  const appUrl =
    typeof window !== "undefined" ? `${window.location.origin}/ios` : "/ios";

  useEffect(() => {
    const live = document.getElementById("tiktok-toast");
    if (live) {
      live.focus();
    }
  }, []);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(appUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // no-op if clipboard fails
    }
  };

  return (
    <main className="min-h-dvh grid place-items-center bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white p-6">
      <section className="w-full max-w-md text-center">
        <div className="relative rounded-2xl bg-white/95 text-neutral-900 p-5 shadow-xl">
          <p
            id="tiktok-toast"
            tabIndex={-1}
            role="status"
            aria-live="polite"
            className="text-lg font-semibold"
          >
            On TikTok, hit the 3 dots at the top right.
          </p>
          <p className="mt-2">
            Then tap &quot;Open in browser&quot; to download for free.
          </p>

          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={copyLink}
              className="rounded-md bg-neutral-900 text-white px-3 py-2 text-sm"
            >
              Copy link
            </button>
            <a
              href={appUrl}
              className="rounded-md bg-neutral-200 text-neutral-900 px-3 py-2 text-sm"
            >
              I&apos;ve opened Safari
            </a>
          </div>

          <svg
            className="absolute -right-6 -top-6 h-20 w-20 text-white drop-shadow"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M6 58c18-10 30-26 38-48M44 12l14-4m-14 4 4 14"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className="mt-4 opacity-90 text-sm">
          If nothing happens, tap the menu &bull;&bull;&bull; and choose &quot;Open in
          browser&quot;.
        </p>
        {copied && (
          <p className="mt-2 text-xs opacity-90">
            Link copied. Open Safari and paste if needed.
          </p>
        )}
      </section>
    </main>
  );
}


