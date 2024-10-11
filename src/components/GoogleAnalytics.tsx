"use client";

import { GoogleAnalytics as GA } from "@next/third-parties/google"
import { getLocalStorage } from "@/lib/storageHelper"

export default function GoogleAnalytics() {
  const cookieConsent = getLocalStorage("cookie_consent", null);

  if (cookieConsent === false) {
    return null;
  }
  return (

    <>
      {/* Google Analytics */}
      {process.env.GOOGLE_ANALYTICS_ID && (
        <GA gaId={process.env.GOOGLE_ANALYTICS_ID} />
      )}
      {/* <GoogleAnalytics gaId={"GTM-W623VHBX"} /> */}
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
        <GA gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      )}
    </>
  )
}
