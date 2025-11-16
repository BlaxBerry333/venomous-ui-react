import { describe, expect, it } from "vitest";

import { getLighter } from "./get-colors";

describe("getLighter", () => {
  it("returns original color when factor is 0", () => {
    expect(getLighter("#4CAF50", 0)).toBe("#4CAF50");
  });

  it("returns white when factor is 1", () => {
    expect(getLighter("#4CAF50", 1)).toBe("#FFFFFF");
  });

  it("lightens color by 50%", () => {
    const result = getLighter("#4CAF50", 0.5);
    expect(result).toMatch(/^#[0-9A-F]{6}$/);
    expect(result).not.toBe("#4CAF50");
    expect(result).not.toBe("#FFFFFF");
  });

  it("works with 3-character hex colors", () => {
    const result = getLighter("#000", 0.5);
    expect(result).toMatch(/^#[0-9A-F]{6}$/);
  });

  it("throws error when factor is out of range (negative)", () => {
    expect(() => getLighter("#4CAF50", -0.1)).toThrow("Factor must be between 0 ~ 1.");
  });

  it("throws error when factor is out of range (greater than 1)", () => {
    expect(() => getLighter("#4CAF50", 1.1)).toThrow("Factor must be between 0 ~ 1.");
  });
});
