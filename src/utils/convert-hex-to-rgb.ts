import { normalizeHex } from "./normalize-hex";

export const convertHexToRgb = (
  hex: string,
): { r: number; g: number; b: number } => {
  const normalizedHex = normalizeHex(hex);

  const r = parseInt(normalizedHex.slice(0, 2), 16);
  const g = parseInt(normalizedHex.slice(2, 4), 16);
  const b = parseInt(normalizedHex.slice(4, 6), 16);

  return {
    r,
    g,
    b,
  };
};
