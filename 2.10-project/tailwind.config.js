/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      extend: {
        container: {
          center: true,
        },
        colors: {
          clifford: "#da373d",
        },
      },
    },
  },
  plugins: [],
};
