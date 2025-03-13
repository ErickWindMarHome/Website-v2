/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: () => ({
        'gradient-radial': 'radial-gradient(ellipse at center, rgba(0, 0, 0, 1) 0%, rgba(14, 28, 41, 0.7) 100%)',
        vacation1: "url('https://windmar-website-cms.s3.amazonaws.com/Windmar1.0/FL/promotion-vacation-roofing-windmar.webp')",
        vacationMobible: "url('/src/assets/LearnAndWinRoofing/Group_38.png')",
        bgEdwinDesktop: "url('/src/assets/EdwinColon/Group_149.svg')",
        bgEdwinMobile: "url('/src/assets/EdwinColon/Group_142.svg')",
        referidos: "url('/src/assets/ReferidosNew/bgReferidos.png')",
        gradientVacation:
          'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.37) 19%, rgba(255, 255, 255, 0.7) 42%, rgba(255, 255, 255, 0.1) 100%)',
        gradientVacation1:
          'linear-gradient(90deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0.73) 30%, rgba(255, 255, 255, 0.87) 59.5%, rgba(255, 255, 255, 0.36) 100%)',
      }),
      fontFamily: {
        rocGrotesk: ['roc-grotesk-condensed', 'sans-serif'],
        dreaming: ['Dreaming', 'cursive'],
        tomorrow: ['Tomorrow', 'sans-serif'],
      },
      boxShadow: {
        shadowBar: '2px 2px 4px 0px #0000008C',
      },
      animation: {
        'slide-animation': 'slide 2s infinite',
      },
    },
  },
  plugins: [],
}
