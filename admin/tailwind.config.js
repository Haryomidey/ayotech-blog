/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'mobile': '340px',
        'tablet': '680px',
        'laptop': '1024px',
        'desktop': '1340px'
      },
      colors: {
        'primary': '#7C4EE4',
        'gray': '#666666',
        'bg-gray': '#FAFAFA'
      }
    },
  },
  plugins: [],
};
