import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { garamond, montserrat } from "@/lib/fonts";
import type { Metadata } from "next";
import QueryProvider from "@/components/QueryProvider";
import "./globals.css";

const country = process.env.NEXT_PUBLIC_COUNTRY || "Singapore";

export const metadata: Metadata = {
  title: country === "Malaysia" ? "Calvary Carpentry Sdn Bhd" : "Calvary Carpentry Pte Ltd",
  description:
    "Crafting Excellence in Timber: Discover Calvary Carpentry's Expert Woodworkers in " + country,
  icons: {
    icon: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryProvider>
        <body
          className={`${montserrat.variable} ${garamond.variable} font-montserrat`}
        >
          <ScrollToTop />
          <Header />
          {children}
          <Footer />
        </body>
      </QueryProvider>
    </html>
  );
}
