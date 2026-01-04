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
      className="fixed inset-x-0 bottom-0 z-50 mx-auto mb-4 sm:mb-6 flex max-w-7xl flex-col rounded-2xl bg-white border border-gray-200 shadow-2xl transition-all duration-300 ease-in-out animate-slide-up"
      role="dialog"
      aria-label="Cookie consent banner"
      aria-live="polite"
    >
      <div className="flex flex-col gap-4 p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>

          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Cookie Preferences
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site
              traffic, and personalize content. By clicking "Accept All", you
              consent to our use of cookies for analytics and performance
              tracking.
            </p>
          </div>
        </div>

        {/* Cookie Details */}
        <div className="bg-gray-50 rounded-xl p-4 space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">
                Essential Cookies
              </p>
              <p className="text-xs text-gray-600 mt-0.5">
                Required for basic site functionality. Always enabled.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">
                Analytics Cookies
              </p>
              <p className="text-xs text-gray-600 mt-0.5">
                Help us understand how visitors interact with our website.
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between pt-2">
          <Link
            href="/privacy-policy"
            className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors underline decoration-2 underline-offset-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1"
          >
            Learn more about our Privacy Policy →
          </Link>

          <div className="flex gap-3">
            <button
              type="button"
              className="flex-1 sm:flex-none rounded-xl border-2 border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 active:scale-95 shadow-sm"
              onClick={() => setCookieConsent(false)}
              aria-label="Decline all cookies"
            >
              Decline All
            </button>
            <button
              type="button"
              className="flex-1 sm:flex-none rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 shadow-lg hover:shadow-xl"
              onClick={() => setCookieConsent(true)}
              aria-label="Accept all cookies"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
