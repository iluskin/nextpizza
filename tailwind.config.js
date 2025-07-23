/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(22, 100%, 50%)",
        "primary-foreground": "hsl(60, 9.1%, 97.8%)",

        secondary: "hsl(32, 100%, 98%)",
        "secondary-foreground": "hsl(24, 9.8%, 10%)",

        muted: "hsl(60, 4.8%, 95.9%)",
        "muted-foreground": "hsl(25, 5.3%, 44.7%)",

        accent: "hsl(60, 4.8%, 95.9%)",
        "accent-foreground": "hsl(24, 9.8%, 10%)",

        destructive: "hsl(0, 84.2%, 60.2%)",
        "destructive-foreground": "hsl(60, 9.1%, 97.8%)",

        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(20, 14.3%, 4.1%)",

        border: "hsl(20, 5.9%, 90%)",
        input: "hsl(0, 0%, 90%)",
        ring: "hsl(24.6, 95%, 53.1%)",
      },
      borderRadius: {
        DEFAULT: "18px",
      },
      fontFamily: {
        nunito: ['"Nunito"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
