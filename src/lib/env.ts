export const websiteAssetsURL = process.env.WEBSITE_ASSETS_URL
  ? process.env.WEBSITE_ASSETS_URL
  : process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;

export function getCountry() {
  return process.env.NEXT_PUBLIC_COUNTRY || "Singapore";
}
