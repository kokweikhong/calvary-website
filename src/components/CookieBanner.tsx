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
      className="fixed inset-x-0 bottom-0 z-50 mx-auto mb-10 flex max-w-max flex-col items-center justify-between gap-4 rounded-lg bg-gray-700 px-3 py-3 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out sm:flex-row md:max-w-screen-sm md:px-4"
      role="dialog"
      aria-label="Cookie consent banner"
    >
      <div className="text-center">
        <Link
          href="/privacy-policy"
          className="text-gray-300 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-700"
        >
          <p className="text-sm md:text-base">
            We use <span className="font-bold text-sky-400">cookies</span> on
            our site.
          </p>
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          className="rounded-md border border-gray-600 px-5 py-2 text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-700 active:scale-95"
          onClick={() => setCookieConsent(false)}
          aria-label="Decline cookies"
        >
          Decline
        </button>
        <button
          type="button"
          className="rounded-lg bg-gray-900 px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-700 active:scale-95"
          onClick={() => setCookieConsent(true)}
          aria-label="Allow cookies"
        >
          Allow Cookies
        </button>
      </div>
    </div>
  );
}
