export function getWebsiteAssetsURLEnv() {
  return process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL || "";
}

export function getCountryEnv() {
  return process.env.NEXT_PUBLIC_COUNTRY || "Singapore";
}
