/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        parkinsans: ["Parkinsans"],
      },
      colors: {
        basegreen: "#7AAD47", // Add your custom color here
      },
      animation: {
        marquee: "marquee 8s infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      screens: {
        xs: "300px", // Example breakpoint for extra small screens
      },
    },
  },
  plugins: [],
};
