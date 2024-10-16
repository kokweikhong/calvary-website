"use client";

import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Retrieve cookie consent status from local storage on component mount
  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);
    console.log("Cookie Consent retrieved from storage: ", storedCookieConsent);
    setCookieConsent(storedCookieConsent);
    setIsLoading(false);
  }, []);

  // Update local storage and Google Analytics consent status when cookieConsent changes
  useEffect(() => {
    // if (cookieConsent !== null) {
    //   setLocalStorage("cookie_consent", cookieConsent);
    // }

    const newValue = cookieConsent ? "granted" : "denied";

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: newValue,
      });
    }

    setLocalStorage("cookie_consent", cookieConsent);

    console.log("Cookie Consent updated: ", cookieConsent);
  }, [cookieConsent]);

  // Do not render the banner if loading or consent is already given
  if (isLoading || cookieConsent !== null) {
    return null;
  }

  return (
    <div
      className={cn(
        cookieConsent != null ? "hidden" : "flex",
        "my-10 mx-auto max-w-max md:max-w-screen-sm",
        "fixed bottom-0 left-0 right-0",
        "px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4",
        "bg-gray-700 rounded-lg shadow"
      )}
    >
      <div className="text-center text-gray-300">
        <Link href="/privacy-policy">
          <p>
            We use <span className="font-bold text-sky-400">cookies</span> on
            our site.
          </p>
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          className="px-5 py-2 text-gray-300 rounded-md border-gray-900"
          onClick={() => setCookieConsent(false)}
        >
          Decline
        </button>
        <button
          className="bg-gray-900 px-5 py-2 text-white rounded-lg"
          onClick={() => setCookieConsent(true)}
        >
          Allow Cookies
        </button>
      </div>
    </div>
  );
}
