import localFont from "next/font/local";

export const garamond = localFont({
  variable: "--font-garamond",
  display: "swap",
  preload: true,
  style: "normal",
  src: [
    {
      path: "../../public/fonts/EB_Garamond/EBGaramond-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/EB_Garamond/EBGaramond-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/EB_Garamond/EBGaramond-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/EB_Garamond/EBGaramond-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/EB_Garamond/EBGaramond-ExtraBold.ttf",
      weight: "800",
    },
  ],
});

export const montserrat = localFont({
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
  style: "normal",
  src: [
    {
      path: "../../public/fonts/Montserrat/Montserrat-Thin.ttf",
      weight: "100",
    },
    {
      path: "../../public/fonts/Montserrat/Montserrat-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../../public/fonts/Montserrat/Montserrat-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Montserrat/Montserrat-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Montserrat/Montserrat-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Montserrat/Montserrat-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Montserrat/Montserrat-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Montserrat/Montserrat-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../../public/fonts/Montserrat/Montserrat-Black.ttf",
      weight: "900",
    },
  ],
});
