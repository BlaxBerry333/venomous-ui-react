function w(t, r) {
  if (r < 0 || r > 1)
    throw new Error("Factor must be between 0 ~ 1.");
  return i(t, r, !0);
}
function c(t, r) {
  if (r < 0 || r > 1)
    throw new Error("Factor must be between 0 ~ 1.");
  return i(t, r, !1);
}
function p(t, r) {
  if (r < 0 || r > 1)
    throw new Error("Alpha must be between 0 ~ 1.");
  const { r: n, g: e, b: u } = s(t);
  return `rgba(${n}, ${e}, ${u}, ${r})`;
}
function s(t) {
  return t = t.replace("#", ""), t.length === 3 && (t = t.split("").map((r) => r + r).join("")), {
    r: parseInt(t.substring(0, 2), 16),
    g: parseInt(t.substring(2, 4), 16),
    b: parseInt(t.substring(4, 6), 16)
  };
}
function a(t, r, n) {
  return `#${((1 << 24) + (t << 16) + (r << 8) + n).toString(16).slice(1).toUpperCase()}`;
}
function i(t, r, n) {
  const e = (o) => n ? Math.max(o - o * r, 0) : Math.min(o + (255 - o) * r, 255), { r: u, g: b, b: g } = s(t);
  return a(Math.round(e(u)), Math.round(e(b)), Math.round(e(g)));
}
export {
  w as getDarker,
  c as getLighter,
  p as hexToRgba
};
