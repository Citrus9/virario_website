import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseMetadata: Metadata = {
  title: "Virario: Generate Viral Content",
  description: "Generate viral content for your social media platforms",
};

export async function generateMetadata(): Promise<Metadata> {
  const appStoreId = process.env.APP_STORE_ID || process.env.NEXT_PUBLIC_APP_STORE_ID;
  const testEnv = process.env.TEST;
  const affiliateData = process.env.APPLE_SMART_BANNER_AFFILIATE_DATA;
  const appArgument = process.env.APPLE_SMART_BANNER_APP_ARGUMENT;

  let appleItunesAppContent: string | undefined;
  if (appStoreId) {
    const parts: string[] = [`app-id=${appStoreId}`];
    if (affiliateData) parts.push(`affiliate-data=${affiliateData}`);
    if (appArgument) parts.push(`app-argument=${appArgument}`);
    appleItunesAppContent = parts.join(", ");
  }

  const titleWithAppId = appStoreId
    ? `${baseMetadata.title} – ${appStoreId} - ${testEnv}`
    : `${baseMetadata.title} – ${testEnv}`;

  return {
    ...baseMetadata,
    title: titleWithAppId, // this is for testing the app store id
    other: appleItunesAppContent
      ? { "apple-itunes-app": appleItunesAppContent }
      : undefined,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
