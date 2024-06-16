const WEBSITE_ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;

const mosoAssetBaseURL = `${WEBSITE_ASSETS_URL}/websites/moso`;

export function getMosoImageUrl(path: string): string {
  console.log(`${mosoAssetBaseURL}/${path}`);
  return `${mosoAssetBaseURL}/${path}`;
}
