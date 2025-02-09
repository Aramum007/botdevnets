import React from "react";
import Issues from "./Issues";

export default function Features() {
  return (
    <div className="bg-[#f0f2f5] p-2 pb-10">
      <div className="my-6">
        <h2 className="font-bold text-4xl text-center dark:text-black">
          Select Issue
        </h2>
      </div>
      <div className="flex justify-center">
        <Issues />
      </div>
    </div>
  );
}
