/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        card: 'hsl(var(--card))',
        foreground: 'hsl(var(--foreground))',
        text: 'hsl(var(--text))',
        icon: 'hsl(var(--icon))',
        heading: 'hsl(var(--heading))',
        border: 'hsl(var(--border))',
        toggle: 'hsl(var(--toggle))',
      },
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
        lato: "'Lato', serif",
      }
    },
  },
  plugins: [],
}