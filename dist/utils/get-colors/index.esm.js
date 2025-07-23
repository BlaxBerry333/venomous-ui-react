function l(t) {
  return t = t.replace("#", ""), t.length === 3 && (t = t.split("").map((n) => n + n).join("")), `#${t}`;
}
function i(t) {
  t = t.replace("#", "");
  const n = parseInt(t, 16), r = n >> 16 & 255, o = n >> 8 & 255, a = n & 255;
  return { r, g: o, b: a };
}
function $(t, n, r) {
  const o = (a) => {
    const c = a.toString(16);
    return c.length === 1 ? "0" + c : c;
  };
  return `#${o(t)}${o(n)}${o(r)}`;
}
function e(t, n) {
  const { r, g: o, b: a } = i(t), c = (s) => Math.min(255, Math.max(0, Math.round(s + n / 100 * 255)));
  return $(c(r), c(o), c(a));
}
function b(t, n) {
  const r = l(t), o = e(r, 25), a = e(r, -25), { r: c, g: s, b: u } = i(r), g = `rgba(${c}, ${s}, ${u}, ${(n == null ? void 0 : n.opacity) || 0.25})`;
  return {
    origin: r,
    light: o,
    dark: a,
    opacity: g
  };
}
export {
  b as default
};
