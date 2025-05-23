/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: { colors:
      {
        'primary': '#000000',
        'secondary': '#5c66ed',
        'light': "#FFFFFF",
        
      },
    
    fontFamily: {
        pbold: ["IBMPlexSerif-Bold", "sans-serif"],
        pboldital: ["IBMPlexSerif-BoldItalic", "sans-serif"],
        pextralight: ["IBMPlexSerif-ExtraLight", "sans-serif"],
        pextralightitalic: ["IBMPlexSerif-ExtraLightItalic", "sans-serif"],
        pitalic: ["IBMPlexSerif-Italic", "sans-serif"],
        plight: ["IBMPlexSerif-Light", "sans-serif"],
        plightitalic: ["IBMPlexSerif-LightItalic", "sans-serif"],
        pmedium: ["IBMPlexSerif-Medium", "sans-serif"],
        pmediumitalic: ["IBMPlexSerif-MediumItalic", "sans-serif"],
        pregular: ["IBMPlexSerif-Regular", "sans-serif"],
        pmedium: ["IBMPlexSerif-Medium", "sans-serif"],
        pmediumitalic: ["IBMPlexSerif-MediumItalic", "sans-serif"],
        psemibold: ["IBMPlexSerif-SemiBold", "sans-serif"],
        psemiboldital: ["IBMPlexSerif-SemiBoldItalic", "sans-serif"],
        pthin: ["IBMPlexSerif-Thin", "sans-serif"],
        pthinitalic: ["IBMPlexSerif-ThinItalic", "sans-serif"],
        
         
      },},
  },
  plugins: [],
}