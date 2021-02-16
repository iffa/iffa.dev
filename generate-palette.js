// eslint-disable-next-line @typescript-eslint/no-var-requires
const palx = require('palx');

// Returns a color object with
// 12 hues and a gray spread across
// 10 luminance steps
const palette = palx('#3F5EFB');

const byLuminance = {};
Object.keys(palette).forEach((color) => {
  if (Array.isArray(palette[color])) {
    byLuminance[color] = {};
    palette[color].forEach((step, index) => {
      let luminance = index * 100;
      if (index === 0) {
        luminance = 50;
      }
      byLuminance[color] = {
        ...byLuminance[color],
        [luminance]: step,
      };
    });
  } else {
    byLuminance[color] = color;
  }
});

console.log(byLuminance);
