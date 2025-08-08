import { jsxs as z, jsx as n } from "react/jsx-runtime";
import B from "react";
import { Theme as h } from "../Theme/index.esm.js";
import { TextColors as j, BorderColors as v, BackgroundColors as q } from "../../utils/design/colors.esm.js";
const I = (e, r) => String(r);
function K({
  columns: e,
  rows: r,
  rowUnionKey: a = I,
  style: m,
  renderRowActions: k,
  headProps: g,
  bodyProps: x,
  headRowProps: S,
  bodyRowProps: f,
  headRowCellProps: l,
  bodyRowCellProps: t,
  ...u
}) {
  return /* @__PURE__ */ z(
    "table",
    {
      style: {
        boxSizing: "border-box",
        display: "block",
        borderSpacing: 0,
        overflow: "scroll",
        position: "relative",
        ...m
      },
      ...u,
      children: [
        /* @__PURE__ */ n("thead", { style: { position: "sticky", top: 0, zIndex: 1, ...g == null ? void 0 : g.style }, ...g, children: /* @__PURE__ */ z(s, { style: { ...S == null ? void 0 : S.style }, ...S, children: [
          e.map((i) => /* @__PURE__ */ n(
            T,
            {
              as: "th",
              style: { ...l == null ? void 0 : l.style },
              ...l,
              ...i.headerCellProps,
              children: i.label
            },
            String(i.key)
          )),
          k && /* @__PURE__ */ n(T, { as: "th", style: { ...t == null ? void 0 : t.style }, ...t })
        ] }) }),
        /* @__PURE__ */ n("tbody", { style: { ...x == null ? void 0 : x.style }, ...x, children: r.map((i, y) => /* @__PURE__ */ z(s, { style: { ...f == null ? void 0 : f.style }, ...f, children: [
          e.map((c) => {
            var M;
            return /* @__PURE__ */ n(T, { as: "td", style: { ...t == null ? void 0 : t.style }, ...t, children: ((M = c.renderCell) == null ? void 0 : M.call(c, i, y)) ?? String(i[c.key] ?? "") }, String(c.key));
          }),
          k && /* @__PURE__ */ n(T, { as: "td", style: { ...t == null ? void 0 : t.style }, ...t, children: k(i, y) })
        ] }, String(a(i, y)))) })
      ]
    }
  );
}
const N = B.memo(K);
N.displayName = "Table";
const s = B.memo(({ style: e, ...r }) => {
  const { themeMode: a } = h.useThemeMode();
  return /* @__PURE__ */ n(
    "tr",
    {
      style: {
        boxSizing: "border-box",
        color: j[a].primary,
        ...e
      },
      ...r
    }
  );
}), T = B.memo(({ as: e = "td", style: r, ...a }) => {
  const { themeMode: m } = h.useThemeMode();
  return /* @__PURE__ */ n(
    e,
    {
      style: {
        boxSizing: "border-box",
        padding: "16px 24px",
        textAlign: "left",
        color: j[m].primary,
        backgroundColor: e === "td" ? "transparent" : q[m].secondary,
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderBottomColor: v[m].quaternary,
        ...r
      },
      ...a
    }
  );
});
export {
  N as default
};
