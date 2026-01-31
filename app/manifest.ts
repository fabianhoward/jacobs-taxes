import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jacobs Taxes",
    short_name: "Jacobs Taxes",
    description:
      "Strategic UK tax advice for owner-managed businesses and internationally mobile individuals.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a1a3c",
    theme_color: "#0a1a3c",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
