// plugins/custom-fonts.js
const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities, theme, e }) {
  const fontWeights = theme('fontWeight');
  const newUtilities = Object.keys(fontWeights).reduce((acc, key) => {
    acc[`.inter-${e(key)}`] = {
      fontFamily: '"Inter", sans-serif',
      fontOpticalSizing: 'auto',
      fontWeight: fontWeights[key],
      fontStyle: 'normal',
      fontVariationSettings: '"slnt" 0',
    };
    return acc;
  }, {});

  addUtilities(newUtilities, ['responsive', 'hover']);
});
