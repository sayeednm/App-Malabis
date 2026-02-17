import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "#2D848A",
          DEFAULT: "#10B981",
          green: "#10B981",
          emerald: "#059669",
          lime: "#84CC16",
          mint: "#6EE7B7",
          forest: "#047857",
          sage: "#86EFAC",
        },
        background: {
          DEFAULT: "#FFFFFF",
          light: "#F0FDF4",
          gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
        },
        text: {
          primary: "#000000",
          secondary: "#666666",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
        'gradient-warm': 'linear-gradient(135deg, #84CC16 0%, #10B981 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #6EE7B7 0%, #10B981 100%)',
        'gradient-forest': 'linear-gradient(135deg, #047857 0%, #059669 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
