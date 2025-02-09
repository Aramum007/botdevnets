"use client";
import React from "react";
import { BackgroundGradient } from "./CardBackGround";
import Image, { StaticImageData } from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import metamask from "@/public/metamask.jpeg";
import trust from "@/public/trust_wallet.png";
import coinbase from "@/public/Coinbaselogo.png";
import spectre from "@/public/specter.jpeg";
import binance from "@/public/Binance.png";
import Blockchain from "@/public/download.png";
import eternal from "@/public/eternal.jpeg";
import Osmosis from "@/public/Osmosis.jpg";
import Sparrow from "@/public/sparrow.jpeg";
import klever from "@/public/klever.png";
import kepir from "@/public/Kepir.jpg";
import Defi from "@/public/Defi.png";
import Semourai from "@/public/Samourai.jpeg";
import Phantom from "@/public/phantom.jpeg";
import BRD from "@/public/brd.jpg";
import Saitama from "@/public/saitama.png";
import Terra from "@/public/terra.png";
import Hashpark from "@/public/Hashpack.png";
import cosmos from "@/public/cosmos.png";
import Exodus from "@/public/exodus.png";
import Rainbow from "@/public/rainbow.jpeg";
import Argent from "@/public/Argent.png";
import metal from "@/public/metal.jpeg";
import Gnosis from "@/public/one.jpg";
import Pillar from "@/public/pillar.jpg";
import imtoken from "@/public/imtoken.jpg";
import ONTO from "@/public/ontology.jpeg";
import Tokenpocket from "@/public/tokenpocket.jpeg";
import Aave from "@/public/aave.png";
import Blue from "@/public/blue.jpeg";
import Ledger from "@/public/ledger_logo.png";
import Mathwallet from "@/public/mathwallet.jpeg";
import Bitpay from "@/public/bitpay.jpg";
import ledger from "@/public/ledger_logo.png";
import walleth from "@/public/wallETH.jpg";
import authereum from "@/public/authereum.png";
import eidoo from "@/public/eidoo.jpg";
import trustvault from "@/public/trustvault.jpg";
import atomic from "@/public/atomic.png";
import coin96 from "@/public/coin98.jpg";
import tron from "@/public/tron.png";
import alice from "@/public/alice.png";
import Alphaallet from "@/public/alpha.jpeg";
import dcent from "@/public/dcent.png";
import zelcore from "@/public/zelcore.jpg";
import coinmoni from "@/public/coinmoni.png";
import gridplus from "@/public/gridplus.png";
import cybavo from "@/public/cybavo.jpg";
import tokenary from "@/public/tokenary.png";
import torus from "@/public/torus.jpg";
import spatium from "@/public/spatium.png";
import safepal from "@/public/safepal.png";
import infinito from "@/public/infinito.png";
import walletio from "@/public/wallet.io.png";
import ownbit from "@/public/ownbit.jpg";
import bridge from "@/public/bridge.png";
import spark from "@/public/sparkpoint.jpg";
import viawallet from "@/public/viawallet.jpg";
import bitkeep from "@/public/bitkeep.jpeg";
import vision from "@/public/vision.png";
import peakdefi from "@/public/peakdefi.jpg";
import unstopable from "@/public/unstoppable.jpg";
import halodefi from "@/public/halodefi.png";
import dok from "@/public/dok.png";
import at from "@/public/at.wallet.png";
import midia from "@/public/midas.png";
import ellipal from "@/public/ellipal.png";
import keyring from "@/public/LOGO-KEYRING-PRO-2.png";
import aktionariat from "@/public/aktionariat.jpeg";
import talken from "@/public/talken.jpg";
import flare from "@/public/flare.jpg";
import atoken from "@/public/atoken.jpg";
import rwallet from "@/public/rwallet.png";
import binana from "@/public/binana.png";
import paytube from "@/public/paytube.png";
import linen from "@/public/linen.png";
import Other from "@/app/favicon.ico";
import Connect from "./Connect";

interface wallets {
  image: StaticImageData;
  name: string;
  id: number;
}

const wallets: wallets[] = [
  {
    image: metamask,
    name: "Metamask",
    id: 1,
  },
  { image: trust, name: "Trust", id: 2 },
  {
    image: coinbase,
    name: "Coinbase",
    id: 3,
  },
  {
    image: spectre,
    name: "Spectre Wallet",
    id: 4,
  },
  {
    id: 5,
    name: "Binance Chain",
    image: binance,
  },
  {
    id: 6,
    name: "Blockchain",
    image: Blockchain,
  },
  { id: 7, name: "Eternal Wallet", image: eternal },
  { id: 8, name: "Osmosis", image: Osmosis },
  { id: 9, name: "Sparrow Wallet", image: Sparrow },
  { id: 10, name: "Klever", image: klever },
  { id: 11, name: "Kepir", image: kepir },
  { id: 12, name: "Defi", image: Defi },
  { id: 13, name: "Semourai Wallet", image: Semourai },
  { id: 14, name: "Phantom Wallet", image: Phantom },
  { id: 15, name: "BRD Wallet", image: BRD },
  { id: 16, name: "Saitama Wallet", image: Saitama },
  { id: 17, name: "Terra Station", image: Terra },
  { id: 18, name: "Hashpark", image: Hashpark },
  { id: 19, name: "Cosmos Station", image: cosmos },
  { id: 20, name: "Exodus Wallet", image: Exodus },
  { id: 21, name: "Rainbow", image: Rainbow },
  { id: 22, name: "Argent", image: Argent },
  { id: 23, name: "Metal Web Auth", image: metal },
  { id: 25, name: "Gnosis Safe", image: Gnosis },
  { id: 26, name: "Pillar", image: Pillar },
  { id: 27, name: "imToken", image: imtoken },
  { id: 28, name: "ONTO", image: ONTO },
  { id: 29, name: "TokenPocket", image: Tokenpocket },
  { id: 30, name: "Aave", image: Aave },
  { id: 31, name: "Blue Wallet", image: Blue },
  { id: 32, name: "Ledger", image: Ledger },
  { id: 33, name: "MathWallet", image: Mathwallet },
  { id: 34, name: "Bitpay", image: Bitpay },
  { id: 35, name: "Ledger", image: ledger },
  { id: 36, name: "WallETH", image: walleth },
  { id: 37, name: "Authereum", image: authereum },
  { id: 40, name: "Eidoo", image: eidoo },
  { id: 42, name: "TrustVault", image: trustvault },
  { id: 43, name: "Atomic Wallet", image: atomic },
  { id: 44, name: "Coin96", image: coin96 },
  { id: 45, name: "TronLink", image: tron },
  { id: 46, name: "Alice", image: alice },
  { id: 47, name: "Alpha Wallet", image: Alphaallet },
  { id: 48, name: "D'CENT Wallet", image: dcent },
  { id: 49, name: "ZelCore", image: zelcore },
  { id: 51, name: "Coinmoni", image: coinmoni },
  { id: 52, name: "GridPlus", image: gridplus },
  { id: 53, name: "Cybavo Wallet", image: cybavo },
  { id: 54, name: "Tokenary", image: tokenary },
  { id: 55, name: "Torus", image: torus },
  { id: 56, name: "Spatium", image: spatium },
  { id: 57, name: "SafePal", image: safepal },
  { id: 58, name: "Infinito Wallet", image: infinito },
  { id: 59, name: "Wallet.io", image: walletio },
  { id: 60, name: "Ownbit", image: ownbit },
  { id: 61, name: "Bridge Wallet", image: bridge },
  { id: 62, name: "SparkPoint", image: spark },
  { id: 63, name: "ViaWallet", image: viawallet },
  { id: 64, name: "BitKeep", image: bitkeep },
  { id: 65, name: "Vision Wallet", image: vision },
  { id: 66, name: "PeakDefi", image: peakdefi },
  { id: 67, name: "Unstoppable", image: unstopable },
  { id: 68, name: "HaloDeFi", image: halodefi },
  { id: 69, name: "Dok Wallet", image: dok },
  { id: 70, name: "At.wallet", image: at },
  { id: 71, name: "Midas Wallet", image: midia },
  { id: 72, name: "Ellipal", image: ellipal },
  { id: 73, name: "Keyring", image: keyring },
  { id: 74, name: "Aktionariat", image: aktionariat },
  { id: 75, name: "Talken", image: talken },
  { id: 76, name: "Flare Wallet", image: flare },
  { id: 78, name: "AToken", image: atoken },
  { id: 79, name: "RWallet", image: rwallet },
  { id: 80, name: "Binana Wallet", image: binana },
  { id: 81, name: "PayTube", image: paytube },
  { id: 82, name: "Linen", image: linen },
  { id: 83, name: "Other Wallets", image: Other },
];

export default function ConnectWallets() {
  return (
    <>
      <div className="text-center p-2 mb-7">
        <h1 className="text-3xl font-bold">Connect Wallet</h1>
        <p className="text-lg">Open protocol for connecting Wallets to Dapps</p>
      </div>

      <div className="grid grid-cols-2 p-1 md:p-5 gap-3  md:gap-8 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {wallets.map((wallet) => (
          <div key={wallet.id}>
            <Dialog>
              <DialogTrigger>
                <BackgroundGradient className="rounded-[22px] max-w-sm p-2 md:p-10 bg-white dark:bg-zinc-900 cursor-pointer">
                  <Image
                    src={wallet.image}
                    alt={wallet.name}
                    height="400"
                    width="400"
                    className="object-contain"
                    priority
                  />
                  <h4 className="font-bold sm:text-xl text-black text-center mt-4 mb-2 dark:text-neutral-200">
                    {wallet.name}
                  </h4>
                  <div className="flex justify-center">
                    <div className="bg-primary text-primary-foreground shadow h-10 rounded-md px-8 hover:bg-primary/90 flex items-center">
                      {" "}
                      Connect
                    </div>
                  </div>
                </BackgroundGradient>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>
                  <Image
                    src={wallet.image}
                    alt={wallet.name}
                    height="30"
                    width="30"
                    priority
                  />
                </DialogTitle>
                <Connect />
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </>
  );
}
