import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Identidade Modesto
        brand: {
          ink: "#1A1A18",     // carvão quente da marca
          paper: "#F5F3EE",   // papel/bone
          gold: "#A8823C",    // acento opcional (ver nota)
        },
        // Neutros quentes (substitui o cinza frio padrão)
        gray: {
          50: "#F5F3EE",
          100: "#ECE8E0",
          200: "#E0DACE",
          300: "#CDC5B5",
          400: "#A69D8B",
          500: "#7C7565",
          600: "#585247",
          700: "#3D382F",
          800: "#292520",
          900: "#1A1A18",
          950: "#100F0D",
        },
        // Ação primária -> carvão (no lugar do índigo)
        indigo: {
          400: "#6B6252",
          500: "#4A4339",
          600: "#24211A",
          700: "#15130F",
          800: "#0C0B09",
        },
        // Erros -> tijolo contido
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
