"use client";

import { useEffect } from "react";
import Script from "next/script";

const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
const COUNTRY = process.env.NEXT_PUBLIC_COUNTRY;

const GtmScript = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(p0: string, p1: any) {
      if (window.dataLayer) window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", GTM_ID);
  }, []);

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
    </>
  );
};

export default GtmScript;
