import { Nav } from "@/components/hero/nav";
// import { BackgroundBlur } from "@/components/ui/background-blur";
import Image from "next/image";
import { AppStoreButtonComponent } from "../AppStoreButtonComponent";

export function Hero() {
  return (
    <div className="relative z-1 flex w-full min-h-[100dvh] flex-col items-center px-8 pt-12 md:pt-16 pb-12">
      {/* <BackgroundBlur className="-top-40 md:-top-0" /> */}
      <Nav />
      <div className="mt-0 md:mt-8 flex w-full max-w-6xl flex-1 flex-col items-center justify-evenly gap-0 md:flex-row md:items-center md:justify-center md:gap-12">
        <div className="flex-shrink-0">
          {/* <Image src="/app-image-1.png" alt="Hero" width={304} height={445} /> */}
          <Image src="/logo-app.svg" alt="logo" width={250} height={250} style={{ borderRadius: '20%', filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))' }} />
        </div>
        <div className="flex w-full max-w-xl flex-col items-center gap-6">
          <h1 className="font-sf-rounded text-center text-[#FF8D28] text-5xl leading-[1.1] font-bold tracking-tight sm:text-5xl">
            Generate viral content
          </h1>
          <div id="app-store-cta">
            <AppStoreButtonComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
