/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{html,astro,js,jsx,vue,svelte}',
    './src/components/**/*.{html,js,jsx,vue,svelte}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'leaf-green': "#4DC859"
    },
  },
  plugins: [],
}

