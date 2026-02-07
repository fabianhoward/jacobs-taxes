import coreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  // Next's flat config already includes TS support and sensible ignores.
  ...coreWebVitals,

  // This rule is too aggressive for typical Next.js client components:
  // setting local UI state in a route-change effect (menus, banners) is valid.
  { rules: { "react-hooks/set-state-in-effect": "off" } },

  // Repo-local: ignore Playwright screenshots.
  { ignores: ["artifacts/**"] },
];

export default config;
