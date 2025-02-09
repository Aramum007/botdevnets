"use client";
import React from "react";
import { CalendarSync, Code, Package } from "lucide-react";
import * as lucide from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BlurFade } from "./ui/blur-fade";
import Link from "next/link";

const icons: any = {
  "<Package />": <lucide.Package size={52} color="#3b82f6" />,
  "<CalendarSync />": <lucide.CalendarSync size={52} color="#3b82f6" />,
  "<Code />": <lucide.Code size={52} color="#3b82f6" />,
  "<ArrowUp />": <lucide.ArrowUp size={52} color="#3b82f6" />,
  "<ShieldX />": <lucide.ShieldX size={52} color="#3b82f6" />,
  "<Calculator />": <lucide.Calculator size={52} color="#3b82f6" />,
  "<Minimize />": <lucide.Minimize size={52} color="#3b82f6" />,
  "<FileUp />": <lucide.FileUp size={52} color="#3b82f6" />,
  "<FileKey2 />": <lucide.FileKey2 size={52} color="#3b82f6" />,
  "<FileUser />": <lucide.FileUser size={52} color="#3b82f6" />,
  "<BadgeHelp />": <lucide.BadgeHelp size={52} color="#3b82f6" />,
  "<LogIn />": <lucide.LogIn size={52} color="#3b82f6" />,
  "<Mail />": <lucide.Mail size={52} color="#3b82f6" />,
  "<BadgeAlert />": <lucide.BadgeAlert size={52} color="#3b82f6" />,
  "<Frown />": <lucide.Frown size={52} color="#3b82f6" />,
  "<RotateCcw />": <lucide.RotateCcw size={52} color="#3b82f6" />,
  "<Hourglass />": <lucide.Hourglass size={52} color="#3b82f6" />,
  "<ShieldBan />": <lucide.ShieldX size={52} color="#3b82f6" />,
  "<Wallet />": <lucide.Wallet size={52} color="#3b82f6" />,
  "<ShoppingBag />": <lucide.ShoppingBag size={52} color="#3b82f6" />,
  "<LayoutList />": <lucide.LayoutList size={52} color="#3b82f6" />,
  "<WalletMinimal />": <lucide.WalletMinimal size={52} color="#3b82f6" />,
  "<LampWallUp />": <lucide.LampWallUp size={52} color="#3b82f6" />,
  "<ListCollapse />": <lucide.ListCollapse size={52} color="#3b82f6" />,
};

const issues = [
  { id: 1, title: "Migration Issues", icon: "<Package />" },
  { id: 2, title: "Asset Recovery", icon: "<CalendarSync />" },
  { id: 3, title: "Rectification", icon: "<Code />" },
  { id: 4, title: "High Gas Fees", icon: "<ArrowUp />" },
  { id: 5, title: "Slippage Error", icon: "<ShieldX />" },
  { id: 6, title: "Slippage Error", icon: "<Calculator />" },
  { id: 7, title: "Cross Chain Transfer", icon: "<Minimize />" },
  { id: 8, title: "Staking", icon: "<FileUp />" },
  { id: 9, title: "Validation", icon: "<FileKey2 />" },
  { id: 10, title: "Claim Reflection", icon: "<FileUser />" },
  { id: 11, title: "Dapps Reconnection", icon: "<BadgeHelp />" },
  { id: 12, title: "Login Issues", icon: "<LogIn />" },
  { id: 13, title: "Claim Airdrop", icon: "<Mail />" },
  { id: 14, title: "NFTS Issues", icon: "<BadgeAlert />" },
  { id: 15, title: "Missing/Irregular Balances", icon: "<Frown />" },
  { id: 16, title: "Threats Scan", icon: "<RotateCcw />" },
  { id: 17, title: "Transaction Delays", icon: "<Hourglass />" },
  { id: 18, title: "Locked Accounts", icon: "<ShieldBan />" },
  { id: 19, title: "Tranding Wallet Issues", icon: "<Wallet />" },
  { id: 20, title: "Tokens Purchase", icon: "<ShoppingBag />" },
  { id: 21, title: "Wallet Whitelist", icon: "<LayoutList />" },
  { id: 22, title: "Wallet Issurance", icon: "<WalletMinimal />" },
  { id: 23, title: "Wallet Retrieval", icon: "<LampWallUp />" },
  { id: 24, title: "Others", icon: "<ListCollapse />" },
];

export default function Issues() {
  return (
    <div className="grid grid-cols-2 p-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6  ">
      {issues.map((issue) => (
        <BlurFade key={issue.id} delay={0.25 + issue.id * 0.05} inView>
          <Link href="/wallet-connect">
            <Card className="w-[190px] drop-shadow-lg broder-[0px] text-center md:w-[230px] cursor-pointer">
              <CardHeader>
                <CardTitle className="flex justify-center">
                  {icons[issue.icon]}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h2 className="font-bold">{issue.title}</h2>
              </CardContent>
            </Card>
          </Link>
        </BlurFade>
      ))}
    </div>
  );
}
