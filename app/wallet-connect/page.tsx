import Image from "next/image";
import wallet_connect from "@/app/favicon.ico";
import ConnectWallets from "@/components/wallets";
import { Footerdemo } from "@/components/Footer";

export default function page() {
  return (
    <div>
      <div className="w-full flex justify-center p-1">
        <Image
          src={wallet_connect}
          height={100}
          alt="Wallet-connect"
          sizes=""
          priority
        />
      </div>
      <div>
        <ConnectWallets />
      </div>
      <section>
        <div className="block">
          <Footerdemo />
        </div>
      </section>
    </div>
  );
}
