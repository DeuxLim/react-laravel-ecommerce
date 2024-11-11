/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Make sure to include all files with Tailwind classes
  theme: {
    extend: {
      colors: {
        primary: "#0000FF", // Custom primary color
      },
      // You can add custom spacing, fontSize, fontFamily here if needed
    },
  },
  plugins: [],
};
