import React from "react";
import Issues from "./Issues";

export default function Features() {
  return (
    <div className="bg-[#f0f2f5] dark:bg-[#3b82f6]  pb-10">
      <div className="py-6">
        <h2 className="font-bold text-4xl text-center dark:text-white text-black">
          Select Issue
        </h2>
      </div>
      <div className="flex justify-center">
        <Issues />
      </div>
    </div>
  );
}
