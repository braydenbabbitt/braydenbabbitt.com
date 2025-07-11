const normalizeHex = (hex: string): string => {
  let normalizedHex = hex.trim().toLowerCase();
  if (hex.startsWith("#")) {
    normalizedHex = normalizedHex.slice(1);
  }

  if (normalizedHex.length === 3) {
    normalizedHex = normalizedHex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  if (normalizedHex.length !== 6) {
    normalizedHex = "000000"; // Default to black if invalid
  }

  return normalizedHex;
};

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
