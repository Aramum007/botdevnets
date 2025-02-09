import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import Phrase from "./Phrase";
import Keystone from "./Keystone";
import PrivateKey from "./PrivateKey";

export default function TabsConnects() {
  return (
    <div className="w-full flex justify-center p-1">
      <Tabs defaultValue="Phrase" className=" w-full md:w-[400px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="Phrase">Phrase</TabsTrigger>
          <TabsTrigger value="Keystore">Keystore</TabsTrigger>
          <TabsTrigger value="Private_Key">Private Key</TabsTrigger>
        </TabsList>
        <TabsContent value="Phrase">
          <Phrase />
        </TabsContent>
        <TabsContent value="Keystore">
          <Keystone />
        </TabsContent>
        <TabsContent value="Private_Key">
          <PrivateKey />
        </TabsContent>
      </Tabs>
    </div>
  );
}
