/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Inclure tous les fichiers JavaScript et TypeScript dans le dossier src
  ],
  theme: {
    extend: {
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
