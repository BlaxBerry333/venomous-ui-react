import { describe, expect, it } from "vitest";

import { getDarker } from "./get-colors";

describe("getDarker", () => {
  it("returns original color when factor is 0", () => {
    expect(getDarker("#4CAF50", 0)).toBe("#4CAF50");
  });

  it("returns black when factor is 1", () => {
    expect(getDarker("#4CAF50", 1)).toBe("#000000");
  });

  it("darkens color by 50%", () => {
    const result = getDarker("#4CAF50", 0.5);
    expect(result).toMatch(/^#[0-9A-F]{6}$/);
    expect(result).not.toBe("#4CAF50");
    expect(result).not.toBe("#000000");
  });

  it("works with 3-character hex colors", () => {
    const result = getDarker("#FFF", 0.5);
    expect(result).toMatch(/^#[0-9A-F]{6}$/);
  });

  it("throws error when factor is out of range (negative)", () => {
    expect(() => getDarker("#4CAF50", -0.1)).toThrow("Factor must be between 0 ~ 1.");
  });

  it("throws error when factor is out of range (greater than 1)", () => {
    expect(() => getDarker("#4CAF50", 1.1)).toThrow("Factor must be between 0 ~ 1.");
  });
});
