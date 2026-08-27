/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#3A5A40',
          dark: '#343A40',
          light: '#F8F9FA',
          accent: '#A3B18A',
          // NUEVOS PARA CONTRASTE Y JERARQUÍA
          navy: '#1B263B',    // Un azul muy oscuro para mayor profundidad que el gris
          gold: '#B08D57',    // Color "oro/bronce" para dar el toque de distinción legal
          orange: '#D4A373',  // Un tono tierra/naranja para botones de alta conversión
          slate: '#E5E7EB',   // Gris claro para bordes y separadores (esencial para el look JustoPrecio)
          muted: '#6B7280',   // Gris medio para textos secundarios
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-delay': 'fadeIn 0.8s ease-out 0.2s both',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-up-delay': 'slideUp 0.8s ease-out 0.3s both',
        'slide-right': 'slideRight 0.8s ease-out 0.4s both',
        'pulse-subtle': 'pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(58, 90, 64, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(58, 90, 64, 0.8)' },
        },
      }
    },
  },
  plugins: [],
}
