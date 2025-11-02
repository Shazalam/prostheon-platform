// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'prostheon': {
//           blue: '#1c4d9f',
//           'blue-dark': '#153a75',
//           'blue-light': '#2563b8',
//           gray: '#f7f7f7',
//           'gray-dark': '#e5e5e5',
//         },
//       },
//       fontFamily: {
//         sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
//       },
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-primary': 'linear-gradient(135deg, #1c4d9f 0%, #2563b8 100%)',
//       },
//       boxShadow: {
//         'glass': '0 8px 32px 0 rgba(28, 77, 159, 0.1)',
//         'card': '0 4px 20px rgba(28, 77, 159, 0.08)',
//         'hover': '0 8px 30px rgba(28, 77, 159, 0.15)',
//       },
//       animation: {
//         'fade-in': 'fadeIn 0.6s ease-out',
//         'slide-up': 'slideUp 0.6s ease-out',
//         'float': 'float 3s ease-in-out infinite',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         slideUp: {
//           '0%': { transform: 'translateY(20px)', opacity: '0' },
//           '100%': { transform: 'translateY(0)', opacity: '1' },
//         },
//         float: {
//           '0%, 100%': { transform: 'translateY(0px)' },
//           '50%': { transform: 'translateY(-20px)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;


import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'prostheon': {
          blue: '#1c4d9f',
          'blue-dark': '#153a75',
          'blue-light': '#2563b8',
          gray: '#f7f7f7',
          'gray-dark': '#e5e5e5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
} satisfies Config;