/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "",
  // mode: "jit",
  important: false,
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        "fade-in-down": "fade-in-down 0.3s ease-out",
        "fade-out-down": "fade-out-down 0.3s ease-out",
        "fade-in-up": "fade-in-up 0.3s ease-out",
        "fade-out-up": "fade-out-up 0.3s ease-out",
      },
      boxShadow: {

      },

      colors: {
        primary:'var(--primary)',
        yaleBlue:'var(--yale-blue)',
        borderPrimary:'var(--border-primary)',
        textSecondary:'var(--text-secondary)',
        textErrorPrimary:'var(--text-error-primary)',
        textErrorBase:'var(--text-error-base-500)',
        borderErrorSubtle:'var(--border-error_subtle)',
        blue25:'var(--blue-25)',
        grey200:'var(--grey-200)',
        grey50:'var(--grey-50)',
        textTertairy:'var(--text-tertairy)',
        textConfirmTitle:'var(--text-confirm-title)'
      },
      screens: {
        xs: "344px",
      },
      spacing: {
      },
      borderWidth: {
      },
      borderRadius: {
      },
      lineHeight: {
      },
      fontSize: {
      },
    },
    fontFamily: {
      poppins: ["Poppins", "system-ui", "sans-serif"],
      Kufi: ["Noto Kufi Arabic", "sans-serif"],
      STC: ["STC", "sans-serif"],
      iconFont: "icomoon",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  variants: {
    extend: {},
    scrollbar: ["dark", "rounded"],
  },
  plugins: [require("tailwind-scrollbar")],
};
