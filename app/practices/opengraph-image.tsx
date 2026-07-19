import { ImageResponse } from "next/og";
import { OgCard } from "@/lib/og-card";
import { loadDisplayFont } from "@/lib/og-font";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TITLE = "All practices";
const SUBTITLE = "Short, guided direct-experience practices from contemplative traditions";

export default async function Image() {
  const fontData = await loadDisplayFont(TITLE);

  return new ImageResponse(<OgCard title={TITLE} subtitle={SUBTITLE} />, {
    ...size,
    fonts: [{ name: "Fraunces", data: fontData, style: "normal", weight: 600 }],
  });
}
