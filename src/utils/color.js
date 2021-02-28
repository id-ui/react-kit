export const hexToRgb = (hex) => {
  const match = (hex.length === 4 ? hex.replace(/([^#])/g, '$1$1') : hex).match(
    /^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i
  );
  return match
    ? {
        r: parseInt(match[1], 16),
        g: parseInt(match[2], 16),
        b: parseInt(match[3], 16),
      }
    : null;
};

export const randomColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16);

export function transformColorStringToRGBA(colorString, a = 1) {
  if (colorString.startsWith('rgba')) {
    return colorString.replace(/,.*?\)$/, `, ${a})`);
  }
  if (colorString.startsWith('rgb')) {
    return colorString.replace('rgb', 'rgba').replace(')', `, ${a})`);
  }
  if (colorString.startsWith('#')) {
    const colorDigitsString = colorString.replace('#', '');
    const hex = `0x${
      colorDigitsString.length === 3
        ? colorDigitsString.replace(/(.)/g, '$1$1')
        : colorDigitsString
    }`;
    return `rgba(${[(hex >> 16) & 255, (hex >> 8) & 255, hex & 255].join(
      ','
    )}, ${a})`;
  }
}
