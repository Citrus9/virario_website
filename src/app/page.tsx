import Image from "next/image";
import { AppStoreButtonComponent } from "@/components/AppStoreButtonComponent";
import { Hero } from "@/components/hero/hero";
import { Testimonials } from "@/components/testimonials/testimonials";
import { Footer } from "@/components/footer/footer";
import { FooterSimple } from "@/components/footer/footer-simple";


export default function Home() {

  return (
    // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <>
        <Hero />
          {/* <h1 className="text-4xl font-bold">VIRARIO</h1>
          <AppStoreButtonComponent /> */}
          <Testimonials />
          {/* <Footer /> */}
          <FooterSimple />
        </>
    //   </main>
      
    // </div>
  );
}
