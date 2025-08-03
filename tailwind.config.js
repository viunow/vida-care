/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Bege/Tan e Coral para Home Care
        primary: {
          50: '#faf8f6', // Bege muito claro
          100: '#f5f0eb', // Bege claro
          200: '#ede2d7', // Bege suave
          300: '#e2b5a1', // Bege médio claro (cor base)
          400: '#d49b82', // Bege médio
          500: '#c6816a', // Bege principal
          600: '#b06752', // Bege escuro
          700: '#8b4f3d', // Bege mais escuro
          800: '#6b3b2e', // Bege muito escuro
          900: '#4a2721', // Bege mais profundo
        },
        secondary: {
          50: '#fef5f4', // Coral muito claro
          100: '#fdeae8', // Coral claro
          200: '#fbd5d1', // Coral suave
          300: '#f7a89b', // Coral médio claro
          400: '#e67770', // Coral médio (cor base)
          500: '#bfa5a3', // Rose principal
          600: '#c2382b', // Coral escuro
          700: '#a02d21', // Coral mais escuro
          800: '#7d241c', // Coral muito escuro
          900: '#5c1b16', // Coral mais profundo
        },
        accent: {
          50: '#fefefe', // Branco puro
          100: '#fafafa', // Branco gelo
          200: '#f5f5f5', // Cinza muito claro
          300: '#e5e5e5', // Cinza claro
          400: '#d4d4d4', // Cinza médio claro
          500: '#a3a3a3', // Cinza médio
          600: '#737373', // Cinza escuro
          700: '#525252', // Cinza mais escuro
          800: '#404040', // Cinza muito escuro
          900: '#262626', // Cinza profundo
        },
        health: {
          light: '#faf8f6', // Para backgrounds (bege clarinho)
          DEFAULT: '#c6816a', // Cor principal da saúde (bege)
          dark: '#8b4f3d', // Para textos (bege escuro)
          glow: '#e2b5a1', // Para efeitos neon (bege brilhante)
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px -5px rgba(226, 181, 161, 0.3)',
        'glow-lg': '0 0 30px -5px rgba(226, 181, 161, 0.4)',
        neon: '0 0 5px theme(colors.health.glow), 0 0 20px theme(colors.health.glow), 0 0 30px theme(colors.health.glow)',
        'neon-sm': '0 0 10px theme(colors.health.glow)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px theme(colors.health.glow)' },
          '50%': {
            boxShadow:
              '0 0 20px theme(colors.health.glow), 0 0 30px theme(colors.health.glow)',
          },
        },
      },
    },
  },
  plugins: [],
};
