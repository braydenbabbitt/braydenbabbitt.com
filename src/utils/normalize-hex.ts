export const normalizeHex = (hex: string): string => {
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
