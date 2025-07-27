function g(t) {
  return t = t.replace("#", ""), t.length === 3 && (t = t.split("").map((n) => n + n).join("")), `#${t}`;
}
function m(t) {
  t = t.replace("#", "");
  const n = parseInt(t, 16), e = n >> 16 & 255, o = n >> 8 & 255, s = n & 255;
  return { r: e, g: o, b: s };
}
function x(t, n, e) {
  const o = (s) => {
    const r = s.toString(16);
    return r.length === 1 ? "0" + r : r;
  };
  return `#${o(t)}${o(n)}${o(e)}`;
}
function b(t) {
  const { r: n, g: e, b: o } = m(g(t)), s = n / 255, r = e / 255, i = o / 255, a = Math.max(s, r, i), c = Math.min(s, r, i), l = a - c;
  let f = 0;
  l !== 0 && (a === s ? f = (r - i) / l % 6 : a === r ? f = (i - s) / l + 2 : f = (s - r) / l + 4, f *= 60, f < 0 && (f += 360));
  const u = (a + c) / 2, h = l === 0 ? 0 : l / (1 - Math.abs(2 * u - 1));
  return { h: f, s: h, l: u };
}
function M(t, n, e) {
  const o = (1 - Math.abs(2 * e - 1)) * n, s = o * (1 - Math.abs(t / 60 % 2 - 1)), r = e - o / 2;
  let i = 0, a = 0, c = 0;
  return t >= 0 && t < 60 ? [i, a, c] = [o, s, 0] : t < 120 ? [i, a, c] = [s, o, 0] : t < 180 ? [i, a, c] = [0, o, s] : t < 240 ? [i, a, c] = [0, s, o] : t < 300 ? [i, a, c] = [s, 0, o] : [i, a, c] = [o, 0, s], x(Math.round((i + r) * 255), Math.round((a + r) * 255), Math.round((c + r) * 255));
}
function $(t, n) {
  const { h: e, s: o, l: s } = b(t);
  return M(e, o, Math.max(0, s - n));
}
function H(t, n) {
  const { h: e, s: o, l: s } = b(t);
  return M(e, o, Math.min(1, s + n));
}
function d(t, n) {
  const { r: e, g: o, b: s } = m(g(t));
  n > 1 && (n = 1), n < 0 && (n = 0);
  const r = Math.min(1, Math.max(0, n));
  return `rgba(${e}, ${o}, ${s}, ${r})`;
}
export {
  $ as getDarkerHex,
  H as getLighterHex,
  d as getOpacityHex,
  g as hexNormalize,
  b as hexToHsl,
  m as hexToRgb,
  M as hslToHex,
  x as rgbToHex
};
