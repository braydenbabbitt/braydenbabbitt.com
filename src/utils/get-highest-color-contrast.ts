import { convertHexToRgb } from "./convert-hex-to-rgb";
import { normalizeHex } from "./normalize-hex";

const getLuminance = ({
  r,
  g,
  b,
}: {
  r: number;
  g: number;
  b: number;
}): number => {
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

const getContrastRatio = (foreground: string, background: string): number => {
  const foregroundRGB = convertHexToRgb(foreground);
  const backgroundRGB = convertHexToRgb(background);
  const foregroundLuminance = getLuminance(foregroundRGB);
  const backgroundLuminance = getLuminance(backgroundRGB);
  const brightestRatio =
    Math.max(foregroundLuminance, backgroundLuminance) + 0.05;
  const darkestRatio =
    Math.min(foregroundLuminance, backgroundLuminance) + 0.05;
  return brightestRatio / darkestRatio;
};

/**
 * A function that takes a list of foreground colors and a background color, returns the foreground color
 * with the highest contrast against the background color.
 */
export const getHighestColorContrast = (
  foregroundColors: string[],
  backgroundColor: string,
): string | undefined => {
  return foregroundColors
    .map((color) => ({
      foregroundColor: color,
      contrastRatio: getContrastRatio(color, backgroundColor),
    }))
    .sort((a, b) => b.contrastRatio - a.contrastRatio)[0]?.foregroundColor;
};
