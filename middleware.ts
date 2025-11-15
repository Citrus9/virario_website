import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const IN_APP_TIKTOK_UA_SNIPPETS = ["musical_ly_", "BytedanceWebview"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/ios") {
    const ua = request.headers.get("user-agent") || "";
    const isTikTokInApp = IN_APP_TIKTOK_UA_SNIPPETS.some((snippet) =>
      ua.includes(snippet)
    );

    if (isTikTokInApp) {
      const url = request.nextUrl.clone();
      url.pathname = "/ios/in-app";
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/ios"],
};


