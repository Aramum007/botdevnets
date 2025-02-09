import Features from "@/components/Features";
import { Footerdemo } from "@/components/Footer";
import { LandingHero } from "@/components/LandingHero";
import { BlurFade } from "@/components/ui/blur-fade";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="block">
        <LandingHero />
      </div>
      <div>
        <Features />
      </div>
      <section className="bg-[#212529] py-6 px-3">
        <div className="py-6 flex justify-center">
          <div className="w-[450px] text-center py-3">
            <BlurFade delay={0.25} inView>
              <small className="text-[#ffffff80] text-sm">
                - Wallet Rectify -
              </small>
              <h1 className="font-bold text-3xl text-[#ffffff] py-3">
                We make sure that everyone is able to securely use their wallet
              </h1>
            </BlurFade>
          </div>
        </div>
      </section>
      <section>
        <div className="block">
          <Footerdemo />
        </div>
      </section>
    </div>
  );
}
