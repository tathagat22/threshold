import { SITE_NAME } from "@/lib/site";

export function OgCard({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 24,
        padding: 96,
        background: "#faf7f2",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, letterSpacing: 6, color: "#b5642a" }}>
        {SITE_NAME.toUpperCase()}
      </div>
      <div
        style={{
          display: "flex",
          fontFamily: "Fraunces",
          fontSize: 68,
          lineHeight: 1.15,
          color: "#1c1a17",
        }}
      >
        {title}
      </div>
      {subtitle && (
        <div style={{ display: "flex", fontSize: 30, color: "#7a746a" }}>{subtitle}</div>
      )}
    </div>
  );
}
