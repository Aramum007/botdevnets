import React, { useState } from "react";
import { Button } from "./ui/button";
import TabsConnects from "./TabsConnects";
import LoaderOne from "./LoaderOne";

export default function Connect() {
  const [error, setError] = useState<boolean>(false);
  const [tabs, setTabs] = useState<boolean>(false);

  setTimeout(() => {
    setError(true);
  }, 2000);
  return (
    <div>
      {!tabs ? (
        <div
          className={!error ? "p-0" : "border border-[#fc3131] rounded-lg p-3 "}
        >
          {!error ? (
            <>
              <p className="text-blue-600">Initializing...</p>
              <div className="flex items-center justify-center">
                <LoaderOne />
              </div>
            </>
          ) : (
            <div className="p3">
              <p className="text-[#fc3131]">Error Connecting...</p>
              <div className="flex justify-center">
                <Button onClick={() => setTabs(true)}>Connect Manually</Button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <TabsConnects />
      )}
    </div>
  );
}
