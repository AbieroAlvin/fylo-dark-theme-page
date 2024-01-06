/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headings: ["Raleway", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      colors: {
        testimonials: "hsl(219, 30%, 18%)",
        error: "hsl(0, 100%, 63%)",
        // button gradients
        Cyan: "hsl(176, 68%, 64%)",
        Blue: "hsl(198, 60%, 50%)",
        // footer
        footer: "hsl(216, 53%, 9%)",
        // main background
        main: "hsl(218, 28%, 13%)",
        // intro & sign up
        intro: "hsl(217, 28%, 15%)",
      },
    },
  },
  plugins: [],
};
