module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    // For the best performance and to avoid false positives,
    // be as specific as possible with your content configuration.
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          greylight: "#F6F5F4",
          white: "#FFFFFF",
        },
        font: {
          black: "#000000",
          greydark: "#757575",
          cyandark: "#2B788B",
        },
        component: {
          cyanlight: "#C3DCE3",
          cyandark: "#2B788B",
          pinkdark: "#945069",
          pinklight: "#F2D4DC",
          greylight: "#F6F5F4",
          greymedium: "#E0E0E0",
          greyicon: "#BABABA",
          greydark: "#585858",
          cyan: "#5996A5",
          green: "#639B6D",
          pink: "#A15993",
          red: "#A95151",
          yellow: "#C4A24C",
          orange: "#CB5B43",
        },
      },

      screens: {
        "2lg": "1160px",
      },
    },
  },
};
