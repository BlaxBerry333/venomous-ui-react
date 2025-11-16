import { describe, expect, it } from "vitest";

import { hexToRgba } from "./get-colors";

describe("hexToRgba", () => {
  it("converts hex to rgba with alpha 0.1", () => {
    expect(hexToRgba("#4CAF50", 0.1)).toBe("rgba(76, 175, 80, 0.1)");
  });

  it("converts hex to rgba with alpha 0.5", () => {
    expect(hexToRgba("#4CAF50", 0.5)).toBe("rgba(76, 175, 80, 0.5)");
  });

  it("converts hex to rgba with alpha 1", () => {
    expect(hexToRgba("#4CAF50", 1)).toBe("rgba(76, 175, 80, 1)");
  });

  it("converts hex to rgba with alpha 0", () => {
    expect(hexToRgba("#4CAF50", 0)).toBe("rgba(76, 175, 80, 0)");
  });

  it("works with 3-character hex colors", () => {
    expect(hexToRgba("#FFF", 0.5)).toBe("rgba(255, 255, 255, 0.5)");
  });

  it("throws error when alpha is out of range (negative)", () => {
    expect(() => hexToRgba("#4CAF50", -0.1)).toThrow("Alpha must be between 0 ~ 1.");
  });

  it("throws error when alpha is out of range (greater than 1)", () => {
    expect(() => hexToRgba("#4CAF50", 1.1)).toThrow("Alpha must be between 0 ~ 1.");
  });
});
