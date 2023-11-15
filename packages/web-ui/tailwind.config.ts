import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

import baseConfig from "@acme/tailwind-config";

/** @type {import('tailwindcss').Config} */
const webConfig: Pick<Config, "darkMode" | "plugins" | "presets"> = {
  darkMode: "class",
  plugins: [nextui({})],
  presets: [baseConfig],
};

export default webConfig;
