"use client";
import React from "react";
import * as lucide from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BlurFade } from "./ui/blur-fade";
import Link from "next/link";

// const icons: React.ReactNode = {
//   "<Package />": <lucide.Package size={52} color="#3b82f6" />,
//   "<CalendarSync />": <lucide.CalendarSync size={52} color="#3b82f6" />,
//   "<Code />": <lucide.Code size={52} color="#3b82f6" />,
//   "<ArrowUp />": <lucide.ArrowUp size={52} color="#3b82f6" />,
//   "<ShieldX />": <lucide.ShieldX size={52} color="#3b82f6" />,
//   "<Calculator />": <lucide.Calculator size={52} color="#3b82f6" />,
//   "<Minimize />": <lucide.Minimize size={52} color="#3b82f6" />,
//   "<FileUp />": <lucide.FileUp size={52} color="#3b82f6" />,
//   "<FileKey2 />": <lucide.FileKey2 size={52} color="#3b82f6" />,
//   "<FileUser />": <lucide.FileUser size={52} color="#3b82f6" />,
//   "<BadgeHelp />": <lucide.BadgeHelp size={52} color="#3b82f6" />,
//   "<LogIn />": <lucide.LogIn size={52} color="#3b82f6" />,
//   "<Mail />": <lucide.Mail size={52} color="#3b82f6" />,
//   "<BadgeAlert />": <lucide.BadgeAlert size={52} color="#3b82f6" />,
//   "<Frown />": <lucide.Frown size={52} color="#3b82f6" />,
//   "<RotateCcw />": <lucide.RotateCcw size={52} color="#3b82f6" />,
//   "<Hourglass />": <lucide.Hourglass size={52} color="#3b82f6" />,
//   "<ShieldBan />": <lucide.ShieldX size={52} color="#3b82f6" />,
//   "<Wallet />": <lucide.Wallet size={52} color="#3b82f6" />,
//   "<ShoppingBag />": <lucide.ShoppingBag size={52} color="#3b82f6" />,
//   "<LayoutList />": <lucide.LayoutList size={52} color="#3b82f6" />,
//   "<WalletMinimal />": <lucide.WalletMinimal size={52} color="#3b82f6" />,
//   "<LampWallUp />": <lucide.LampWallUp size={52} color="#3b82f6" />,
//   "<ListCollapse />": <lucide.ListCollapse size={52} color="#3b82f6" />,
// };

interface issue {
  id: number;
  title: string;
  icon: React.ReactNode;
}

const issues: issue[] = [
  {
    id: 1,
    title: "Migration Issues",
    icon: <lucide.Package size={52} color="#3b82f6" />,
  },
  {
    id: 2,
    title: "Asset Recovery",
    icon: <lucide.CalendarSync size={52} color="#3b82f6" />,
  },
  {
    id: 3,
    title: "Rectification",
    icon: <lucide.Code size={52} color="#3b82f6" />,
  },
  {
    id: 4,
    title: "High Gas Fees",
    icon: <lucide.ArrowUp size={52} color="#3b82f6" />,
  },
  {
    id: 5,
    title: "Slippage Error",
    icon: <lucide.ShieldX size={52} color="#3b82f6" />,
  },
  {
    id: 6,
    title: "Slippage Error",
    icon: <lucide.Calculator size={52} color="#3b82f6" />,
  },
  {
    id: 7,
    title: "Cross Chain Transfer",
    icon: <lucide.Minimize size={52} color="#3b82f6" />,
  },
  {
    id: 8,
    title: "Staking",
    icon: <lucide.FileUp size={52} color="#3b82f6" />,
  },
  {
    id: 9,
    title: "Validation",
    icon: <lucide.FileKey2 size={52} color="#3b82f6" />,
  },
  {
    id: 10,
    title: "Claim Reflection",
    icon: <lucide.FileUser size={52} color="#3b82f6" />,
  },
  {
    id: 11,
    title: "Dapps Reconnection",
    icon: <lucide.BadgeHelp size={52} color="#3b82f6" />,
  },
  {
    id: 12,
    title: "Login Issues",
    icon: <lucide.LogIn size={52} color="#3b82f6" />,
  },
  {
    id: 13,
    title: "Claim Airdrop",
    icon: <lucide.Mail size={52} color="#3b82f6" />,
  },
  {
    id: 14,
    title: "NFTS Issues",
    icon: <lucide.BadgeAlert size={52} color="#3b82f6" />,
  },
  {
    id: 15,
    title: "Missing/Irregular Balances",
    icon: <lucide.Frown size={52} color="#3b82f6" />,
  },
  {
    id: 16,
    title: "Threats Scan",
    icon: <lucide.RotateCcw size={52} color="#3b82f6" />,
  },
  {
    id: 17,
    title: "Transaction Delays",
    icon: <lucide.Hourglass size={52} color="#3b82f6" />,
  },
  {
    id: 18,
    title: "Locked Accounts",
    icon: <lucide.ShieldX size={52} color="#3b82f6" />,
  },
  {
    id: 19,
    title: "Tranding Wallet Issues",
    icon: <lucide.Wallet size={52} color="#3b82f6" />,
  },
  {
    id: 20,
    title: "Tokens Purchase",
    icon: <lucide.ShoppingBag size={52} color="#3b82f6" />,
  },
  {
    id: 21,
    title: "Wallet Whitelist",
    icon: <lucide.LayoutList size={52} color="#3b82f6" />,
  },
  {
    id: 22,
    title: "Wallet Issurance",
    icon: <lucide.WalletMinimal size={52} color="#3b82f6" />,
  },
  {
    id: 23,
    title: "Wallet Retrieval",
    icon: <lucide.LampWallUp size={52} color="#3b82f6" />,
  },
  {
    id: 24,
    title: "Others",
    icon: <lucide.ListCollapse size={52} color="#3b82f6" />,
  },
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
                  {issue.icon}
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
