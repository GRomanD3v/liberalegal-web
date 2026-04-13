/** @type {import('tailwindcss').Config} */
export default {

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
      }
    },
  },
  plugins: [],
}
