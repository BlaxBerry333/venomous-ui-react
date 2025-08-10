import { jsx as i, jsxs as V } from "react/jsx-runtime";
import m from "clsx";
import k from "react";
import { TextColors as M, BorderColors as v, BackgroundColors as q } from "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { Theme as j } from "../Theme/index.esm.js";
const H = (c, n) => String(n);
function K({
  columns: c,
  rows: n,
  rowUnionKey: f = H,
  style: u,
  renderRowActions: U,
  headProps: s,
  bodyProps: N,
  headRowProps: T,
  bodyRowProps: x,
  headRowCellProps: e,
  bodyRowCellProps: t,
  ...l
}) {
  return /* @__PURE__ */ V(
    "table",
    {
      className: m("Venomous-UI-React--Table", l.className),
      style: {
        boxSizing: "border-box",
        display: "block",
        borderSpacing: 0,
        overflow: "scroll",
        position: "relative",
        ...u
      },
      ...l,
      children: [
        /* @__PURE__ */ i(
          "thead",
          {
            className: m("Venomous-UI-React--Tables.Head", s == null ? void 0 : s.className),
            style: { position: "sticky", top: 0, zIndex: 1, ...s == null ? void 0 : s.style },
            ...s,
            children: /* @__PURE__ */ V(
              z,
              {
                className: m("Venomous-UI-React--Tables.Row", T == null ? void 0 : T.className),
                style: { ...T == null ? void 0 : T.style },
                ...T,
                children: [
                  c.map((a) => {
                    var g;
                    return /* @__PURE__ */ i(
                      S,
                      {
                        as: "th",
                        className: m(
                          "Venomous-UI-React--Tables.Cell",
                          e == null ? void 0 : e.className,
                          (g = a.headerCellProps) == null ? void 0 : g.className
                        ),
                        style: { ...e == null ? void 0 : e.style },
                        ...e,
                        ...a.headerCellProps,
                        children: a.label
                      },
                      String(a.key)
                    );
                  }),
                  U && /* @__PURE__ */ i(
                    S,
                    {
                      as: "th",
                      className: m("Venomous-UI-React--Tables.Cell", e == null ? void 0 : e.className),
                      style: { ...t == null ? void 0 : t.style },
                      ...t
                    }
                  )
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ i(
          "tbody",
          {
            className: m("Venomous-UI-React--Tables.Body", N == null ? void 0 : N.className),
            style: { ...N == null ? void 0 : N.style },
            ...N,
            children: n.map((a, g) => /* @__PURE__ */ V(
              z,
              {
                className: m("Venomous-UI-React--Tables.Row", x == null ? void 0 : x.className),
                style: { ...x == null ? void 0 : x.style },
                ...x,
                children: [
                  c.map((I) => {
                    var B;
                    return /* @__PURE__ */ i(
                      S,
                      {
                        as: "td",
                        className: m("Venomous-UI-React--Tables.Cell", t == null ? void 0 : t.className),
                        style: { ...t == null ? void 0 : t.style },
                        ...t,
                        children: ((B = I.renderCell) == null ? void 0 : B.call(I, a, g)) ?? String(a[I.key] ?? "")
                      },
                      String(I.key)
                    );
                  }),
                  U && /* @__PURE__ */ i(
                    S,
                    {
                      as: "td",
                      className: m("Venomous-UI-React--Tables.Cell", t == null ? void 0 : t.className),
                      style: { ...t == null ? void 0 : t.style },
                      ...t,
                      children: U(a, g)
                    }
                  )
                ]
              },
              String(f(a, g))
            ))
          }
        )
      ]
    }
  );
}
const W = k.memo(K);
W.displayName = "Table";
const z = k.memo(({ style: c, ...n }) => {
  const { themeMode: f } = j.useThemeMode();
  return /* @__PURE__ */ i(
    "tr",
    {
      style: {
        boxSizing: "border-box",
        color: M[f].primary,
        ...c
      },
      ...n
    }
  );
}), S = k.memo(({ as: c = "td", style: n, ...f }) => {
  const { themeMode: u } = j.useThemeMode();
  return /* @__PURE__ */ i(
    c,
    {
      style: {
        boxSizing: "border-box",
        padding: "16px 24px",
        textAlign: "left",
        color: M[u].primary,
        backgroundColor: c === "td" ? "transparent" : q[u].secondary,
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderBottomColor: v[u].quaternary,
        ...n
      },
      ...f
    }
  );
});
export {
  W as default
};
