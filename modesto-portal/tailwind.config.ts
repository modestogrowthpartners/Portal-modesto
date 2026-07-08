import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#1A1A18",
          paper: "#EDE8DE",
          gold: "#A8823C",
        },
        gray: {
          50: "#EDE8DE",
          100: "#E4DED2",
          200: "#D8D1C2",
          300: "#C6BDA9",
          400: "#A39A86",
          500: "#79715F",
          600: "#554E42",
          700: "#3B362D",
          800: "#29241E",
          900: "#1A1A18",
          950: "#100F0D",
        },
        indigo: {
          400: "#C9A24E",
          500: "#B4893A",
          600: "#96701F",
          700: "#785819",
          800: "#5E4514",
        },
        red: {
          500: "#B04A3E",
          600: "#9C3A30",
          700: "#7F2E26",
        },
      },
    },
  },
  plugins: [],
};
export default config;
