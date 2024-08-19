// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure this matches your project's structure
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
