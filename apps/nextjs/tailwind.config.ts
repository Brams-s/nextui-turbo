import type { Config } from "tailwindcss";

import webConfig from "@acme/web-ui/tailwind.config";

export default {
  presets: [webConfig],
  content: [
    "./src/**/*.{ts,tsx}",
    "../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
} satisfies Config;
