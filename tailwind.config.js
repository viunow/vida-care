/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Azul Bebê, Rosa e Branco para Home Care
        primary: {
          50: "#f0f9ff", // Azul bebê muito claro
          100: "#e0f2fe", // Azul bebê claro
          200: "#bae6fd", // Azul bebê suave
          300: "#7dd3fc", // Azul bebê médio claro
          400: "#38bdf8", // Azul bebê médio
          500: "#0ea5e9", // Azul bebê principal
          600: "#0284c7", // Azul bebê escuro
          700: "#0369a1", // Azul bebê mais escuro
          800: "#075985", // Azul bebê muito escuro
          900: "#0c4a6e", // Azul bebê mais profundo
        },
        secondary: {
          50: "#fdf2f8", // Rosa clarinho muito claro
          100: "#fce7f3", // Rosa clarinho claro
          200: "#fbcfe8", // Rosa clarinho suave
          300: "#f9a8d4", // Rosa clarinho médio claro
          400: "#f472b6", // Rosa clarinho médio
          500: "#ec4899", // Rosa clarinho principal
          600: "#db2777", // Rosa clarinho escuro
          700: "#be185d", // Rosa clarinho mais escuro
          800: "#9d174d", // Rosa clarinho profundo
          900: "#831843", // Rosa clarinho muito escuro
        },
        accent: {
          50: "#fefefe", // Branco puro
          100: "#fafafa", // Branco gelo
          200: "#f5f5f5", // Cinza muito claro
          300: "#e5e5e5", // Cinza claro
          400: "#d4d4d4", // Cinza médio claro
          500: "#a3a3a3", // Cinza médio
          600: "#737373", // Cinza escuro
          700: "#525252", // Cinza mais escuro
          800: "#404040", // Cinza muito escuro
          900: "#262626", // Cinza profundo
        },
        health: {
          light: "#f0f9ff", // Para backgrounds (azul bebê clarinho)
          DEFAULT: "#0ea5e9", // Cor principal da saúde (azul bebê)
          dark: "#0369a1", // Para textos (azul bebê escuro)
          glow: "#38bdf8", // Para efeitos neon (azul bebê brilhante)
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px -5px rgba(14, 165, 233, 0.3)",
        "glow-lg": "0 0 30px -5px rgba(14, 165, 233, 0.4)",
        neon: "0 0 5px theme(colors.health.glow), 0 0 20px theme(colors.health.glow), 0 0 30px theme(colors.health.glow)",
        "neon-sm": "0 0 10px theme(colors.health.glow)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 5px theme(colors.health.glow)" },
          "50%": {
            boxShadow:
              "0 0 20px theme(colors.health.glow), 0 0 30px theme(colors.health.glow)",
          },
        },
      },
    },
  },
  plugins: [],
};
