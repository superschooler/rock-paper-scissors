/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./dist/script.js"],
  theme: {
    extend: {
      colors: {
        scissors: "hsl(39, 89%, 49%) to hsl(40, 84%, 53%)",
        paper: "hsl(230, 89%, 62%) to hsl(230, 89%, 65%)",
        rock: "hsl(349, 71%, 52%) to hsl(349, 70%, 56%)",
        lizard: "hsl(261, 73%, 60%) to hsl(261, 72%, 63%)",
        cyan: "hsl(189, 59%, 53%) to hsl(189, 58%, 57%)",
        dark: "hsl(229, 25%, 31%)",
        score: "hsl(229, 64%, 46%)",
        header: "hsl(217, 16%, 45%)",
      },
    },
  },
  plugins: [],
};
