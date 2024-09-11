/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Inclure tous les fichiers JavaScript et TypeScript dans le dossier src
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, rgb(237, 247, 255), rgba(240, 255, 240, 1))",
        "customBlue-gradient":
          "linear-gradient(to right, rgba(240, 255, 240, 1), rgba(36, 50, 56,0.2))",
      },
      colors: {
        customBlue: "rgb(9, 143, 188)",
        customGreen: "rgb(137, 188, 43)",
        customTextColor: "rgb(137, 188, 43)",
        customGray: "rgb(31, 41, 55)",
      },
    },
  },
  plugins: [],
};
