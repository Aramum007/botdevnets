"use client";
import { motion } from "framer-motion";
import { MoveRight, SendHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import CrytocurrencyPrices from "./CrytocurrencyPrices";
import Link from "next/link";

function LandingHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["Validate", "Synchronize", "Rectify"], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="bg-[#070a29] bg-[url('/drailer_bg.png')]">
      <div className=" bg-[url('/hero_bg.png')] ">
        <div className=" mx-auto">
          <header className=" h-[80px] opacity-[1] visible w-full">
            <CrytocurrencyPrices />
          </header>
          <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col mt-[-20px] md:mt-[-30px] lg:mt-[-60px]">
            <div>
              <Button
                size="lg"
                className="gap-4 bg-[#3b82f6] text-white hover:bg-[#3b76f6] font-bold text-lg"
                asChild
              >
                <Link href={"/wallet-connect"}>
                  Decentralized Protocol <MoveRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                <span className="relative flex w-full text-white justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute font-semibold"
                      initial={{ opacity: 0, y: "-100" }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? {
                              y: 0,
                              opacity: 1,
                            }
                          : {
                              y: titleNumber > index ? -150 : 150,
                              opacity: 0,
                            }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
                <span className="text-white">your Assets and Wallets</span>
              </h1>

              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                Decentralized Protocol for Syncing Various Wallets Issues on
                Secure Server.
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <Button
                size="default"
                className="gap-4 font-semibold text-lg"
                variant="outline"
                asChild
              >
                <Link href={"/wallet-connect"}>
                  Connect Wallet <SendHorizontal className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="default"
                className=" bg-[#3b82f6] text-white hover:bg-[#3b76f6] font-semibold text-lg"
                asChild
              >
                <Link href={"/wallet-connect"}>Sync</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { LandingHero };
