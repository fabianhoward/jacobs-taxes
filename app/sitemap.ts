import type { MetadataRoute } from "next";

const baseUrl = "https://jacobs-taxes.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/approach", "/about", "/contact"];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }));
}
