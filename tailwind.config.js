const plugin = require('tailwindcss/plugin');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    colors: {
      'white': '#f1faee',
      'pink': '#f72585',
      'dark-pink': '#3a0ca3',
      'purple': '#7209b7',
      'dark-purple': '#3a0ca3',
      'light-blue': '#4cc9f0',
      'blue': '#4361ee',
    },
    extend: {},
  },
  variants: {
    border: ['hover'],
    textColor: ['hover', 'group-hover'],
    display: ['responsive'],
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.bg-overlay': {
          'background': 'linear-gradient(var(--overlay-angle, 225deg), var(--overlay-colors)), var(--overlay-image)',
          'background-position': 'center',
          'background-size': 'cover',
        },
      });
    }),
  ],
};
