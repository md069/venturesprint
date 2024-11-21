import type { Config } from "tailwindcss"
import sharedConfig from "@v1/ui/tailwind.config"

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  presets: [sharedConfig],
  theme: {
    extend: {
      // Add any web-specific theme extensions here
    },
  },
}

export default config
