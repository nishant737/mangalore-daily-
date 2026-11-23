// The look shared by every generated social share image.

import { ImageResponse } from "next/og";
import { siteName } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };

export function ogImage({ eyebrow, title }: { eyebrow: string; title: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0b0b0d",
          color: "#f3f1ec",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#f6b419",
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 70 ? 56 : 68,
            fontWeight: 700,
            lineHeight: 1.15,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", alignItems: "center", fontSize: 30 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 9,
              background: "#f6b419",
              marginRight: 16,
            }}
          />
          {siteName}
        </div>
      </div>
    ),
    ogSize,
  );
}
