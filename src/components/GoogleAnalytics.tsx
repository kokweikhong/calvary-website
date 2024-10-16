"use client";

import { GoogleAnalytics as GA } from "@next/third-parties/google";
import { getLocalStorage } from "@/lib/storageHelper";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "@/lib/gtagHelper";

export default function GoogleAnalytics({
  GA_MEASUREMENT_ID,
}: {
  GA_MEASUREMENT_ID: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const cookieConsent = getLocalStorage("cookie_consent", null);

  useEffect(() => {
    const url = pathname + searchParams.toString();

    pageview(GA_MEASUREMENT_ID, url);
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);

  if (cookieConsent === false) {
    return null;
  }
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'analytics_storage': 'denied'
                });
                
                gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                });
                `,
        }}
      />
      {/* Google Analytics
      {process.env.GOOGLE_ANALYTICS_ID && (
        <GA gaId={process.env.GOOGLE_ANALYTICS_ID} />
      )} */}
      {/* <GoogleAnalytics gaId={"GTM-W623VHBX"} /> */}
      {/* {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
        <GA gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      )} */}
    </>
  );
}
