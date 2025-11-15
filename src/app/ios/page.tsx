import { redirect } from "next/navigation";

export default function IOSRedirectPage() {
  const appStoreId =
    process.env.APP_STORE_ID || process.env.NEXT_PUBLIC_APP_STORE_ID;
  const region = process.env.APP_STORE_REGION || "us";

  if (!appStoreId) {
    // If the App Store ID isn't configured, just send users to the homepage
    redirect("/");
  }

  const appStoreUrl = `https://apps.apple.com/${region}/app/id${appStoreId}`;

  redirect(appStoreUrl);
}


