function w(r, t) {
  if (t < 0 || t > 1)
    throw new Error("Factor must be between 0 ~ 1.");
  return b(r, t, !0);
}
function f(r, t) {
  if (t < 0 || t > 1)
    throw new Error("Factor must be between 0 ~ 1.");
  return b(r, t, !1);
}
function p(r, t) {
  if (t < 0 || t > 1)
    throw new Error("Alpha must be between 0 ~ 1.");
  const { r: n, g: e, b: o } = g(r);
  return `rgba(${n}, ${e}, ${o}, ${t})`;
}
function c(r) {
  const { r: t, g: n, b: e } = g(r), o = (i) => {
    const u = i / 255;
    return u <= 0.03928 ? u / 12.92 : Math.pow((u + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * o(t) + 0.7152 * o(n) + 0.0722 * o(e);
}
function m(r, t = 0.5) {
  return c(r) > t;
}
function g(r) {
  return r = r.replace("#", ""), r.length === 3 && (r = r.split("").map((t) => t + t).join("")), {
    r: parseInt(r.substring(0, 2), 16),
    g: parseInt(r.substring(2, 4), 16),
    b: parseInt(r.substring(4, 6), 16)
  };
}
function a(r, t, n) {
  return `#${((1 << 24) + (r << 16) + (t << 8) + n).toString(16).slice(1).toUpperCase()}`;
}
function b(r, t, n) {
  const e = (s) => n ? Math.max(s - s * t, 0) : Math.min(s + (255 - s) * t, 255), { r: o, g: i, b: u } = g(r);
  return a(Math.round(e(o)), Math.round(e(i)), Math.round(e(u)));
}
export {
  w as getDarker,
  f as getLighter,
  c as getLuminance,
  p as hexToRgba,
  m as isLightColor
};
