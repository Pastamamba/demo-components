module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oxfordBlue: {
          1: "#000D20",
          2: "#333d4c",
          3: "#656d78",
          4: "#989da5",
          5: "#cacdd0",
          6: "#e3e5e7",
        },
        fireRed: {
          1: "#d20000",
          2: "#ba0204",
          3: "#db3333",
          4: "#e36565",
          5: "#ec9898",
          6: "#f4caca",
          7: "#f9e3e3",
        },
        slate: {
          1: "#5d6775",
          2: "#525c6b",
          3: "#7d8590",
          4: "#9da3ac",
          5: "#bdc1c6",
          6: "#dddfe2",
          7: "#edeeef",
        },
        lightGrey: "#f5f5f6",
        grey: "#e6e7e9",
        neutrals: {
          white: "#fdfdfd",
          black: "#000000",
        },
      },
    },
  },
  plugins: [],
}

