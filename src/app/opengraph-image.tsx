import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "ZapForge — Migrate legacy code at scale, without losing control of it";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#101c36",
          borderLeft: "16px solid #2f66f5",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>
          <span style={{ color: "#4d7cfe" }}>zap</span>
          <span style={{ color: "#ffffff" }}>forge</span>
          <span style={{ color: "#ee6a24" }}>.</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Migrate legacy code
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            at scale.
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#4d7cfe",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Without losing control.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          Plan · Approve · Execute · Diff — a Zapcom company
        </div>
      </div>
    ),
    size,
  );
}
