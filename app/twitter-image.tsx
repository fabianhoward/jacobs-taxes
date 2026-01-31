import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 628,
};

export const contentType = "image/png";
export const runtime = "edge";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0a1a3c 0%, #1a3cb4 45%, #d8b25e 100%)",
          color: "#fff",
        }}
      >
        <div
          style={{
            fontSize: 68,
            fontWeight: 600,
            letterSpacing: "0.04em",
          }}
        >
          Jacobs Taxes
        </div>
        <div style={{ fontSize: 30, marginTop: 20 }}>
          Strategic UK tax advice for ambitious businesses and individuals
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 22,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          jacobs-taxes.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
