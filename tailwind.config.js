// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust according to your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
