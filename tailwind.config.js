/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../src/assets/home/background-home-desktop.jpg')",
        destination:
          "url('../src/assets/destination/background-destination-desktop.jpg')",
        crew: "url('../src/assets/crew/background-crew-desktop.jpg')",
        techb:
          "url('../src/assets/technology/background-technology-desktop.jpg')",
      },
      fontFamily: {
        exo: "'Exo', sans-serif",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "spin-slow2": "spin 40s linear infinite",
      },
    },
  },
  plugins: [],
};
