import Footer from "@/components/Footer";
// import Header from "@/components/Header";
import Header from "@/components/header/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { garamond, montserrat } from "@/lib/fonts";
import type { Metadata } from "next";
import QueryProvider from "@/components/QueryProvider";
import "./globals.css";
import Script from "next/script";
import GtmScript from "@/components/gtm-script";
import WhatsappFloating from "@/components/WhatsappFloating";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Suspense } from "react";
// import type { Metadata } from 'next'

// export const metadata:Metadata = {
//   robots: {
//     index: true,
//     googleBot: {
//       index: true,
//     },
//   },
// };

const country = process.env.NEXT_PUBLIC_COUNTRY || "Singapore";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "";

export const metadata: Metadata = {
  title:
    country === "Malaysia"
      ? "Calvary Carpentry Sdn Bhd"
      : "Calvary Carpentry Pte Ltd",
  description:
    "Crafting Excellence in Timber: Discover Calvary Carpentry's Expert Woodworkers in " +
    country,
  icons: {
    icon: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "Vwy7YvF3taaayqVhgiszvxDvq7FxQKyu9CzxccoMhds",
  },
  robots: {
    index: true,
    googleBot: {
      index: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${garamond.variable}`}>
      {/* <Script
        strategy="afterInteractive"
        id="GTM-W623VHBX"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W623VHBX');`,
        }}
      /> */}
      <QueryProvider>
        <body className="font-montserrat bg-white text-gray-900 antialiased">
          <Header />
          <main>{children}</main>
          <Footer />
          {/* <GtmScript /> */}
          {/* <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W623VHBX" height="0" width="0" style="display:none;visibility:hidden" />`,
            }}
          /> */}
          <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2">
            <WhatsappFloating />
            <ScrollToTop />
          </div>
          <CookieBanner />
        </body>
      </QueryProvider>
      <Suspense fallback={null}>
        <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
      </Suspense>
    </html>
  );
}
