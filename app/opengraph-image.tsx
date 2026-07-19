import { ImageResponse } from "next/og";
import { OgCard } from "@/lib/og-card";
import { loadDisplayFont } from "@/lib/og-font";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fontData = await loadDisplayFont(SITE_TAGLINE + SITE_NAME);

  return new ImageResponse(<OgCard title={SITE_TAGLINE} subtitle={SITE_NAME} />, {
    ...size,
    fonts: [{ name: "Fraunces", data: fontData, style: "normal", weight: 600 }],
  });
}
