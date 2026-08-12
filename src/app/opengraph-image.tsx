import { ImageResponse } from "next/og";
import { DOCTOR } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f6f1fc",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 120,
            height: 120,
            borderRadius: 28,
            backgroundColor: "#7040ae",
            color: "#ffffff",
            fontSize: 52,
            fontWeight: 700,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 36,
          }}
        >
          FH
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 700,
            color: "#331d57",
          }}
        >
          Family Homeo Clinic
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#5a3390",
            marginTop: 16,
          }}
        >
          {DOCTOR.name} — {DOCTOR.degree}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#5b5468",
            marginTop: 20,
          }}
        >
          Homeopathic Care for Women &amp; Children
        </div>
      </div>
    ),
    { ...size }
  );
}
