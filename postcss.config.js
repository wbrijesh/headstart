// const purgecss = require("@fullhuman/postcss-purgecss");
// const cssnano = require("cssnano");

// module.exports = {
//   plugins: [
//     require("tailwindcss"),
//     require("autoprefixer"),
//     cssnano({
//       preset: "default",
//     }),
//     purgecss({
//       content: ["./src/**/*.{js,jsx,ts,tsx}"],
//       defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
//     }),
//   ],
// };

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
