import { jsx as i, jsxs as V } from "react/jsx-runtime";
import c from "clsx";
import k from "react";
import j from "../../hooks/useDesign/index.esm.js";
const v = (m, n) => String(n);
function q({
  columns: m,
  rows: n,
  rowUnionKey: I = v,
  style: S,
  renderRowActions: u,
  headProps: s,
  bodyProps: N,
  headRowProps: g,
  bodyRowProps: T,
  headRowCellProps: a,
  bodyRowCellProps: t,
  ...l
}) {
  return /* @__PURE__ */ V(
    "table",
    {
      className: c("Venomous-UI-React--Table", l.className),
      style: {
        boxSizing: "border-box",
        display: "block",
        borderSpacing: 0,
        overflow: "scroll",
        position: "relative",
        ...S
      },
      ...l,
      children: [
        /* @__PURE__ */ i(
          "thead",
          {
            className: c("Venomous-UI-React--Tables.Head", s == null ? void 0 : s.className),
            style: { position: "sticky", top: 0, zIndex: 1, ...s == null ? void 0 : s.style },
            ...s,
            children: /* @__PURE__ */ V(
              z,
              {
                className: c("Venomous-UI-React--Tables.Row", g == null ? void 0 : g.className),
                style: { ...g == null ? void 0 : g.style },
                ...g,
                children: [
                  m.map((e) => {
                    var x;
                    return /* @__PURE__ */ i(
                      f,
                      {
                        as: "th",
                        className: c(
                          "Venomous-UI-React--Tables.Cell",
                          a == null ? void 0 : a.className,
                          (x = e.headerCellProps) == null ? void 0 : x.className
                        ),
                        style: { ...a == null ? void 0 : a.style },
                        ...a,
                        ...e.headerCellProps,
                        children: e.label
                      },
                      String(e.key)
                    );
                  }),
                  u && /* @__PURE__ */ i(
                    f,
                    {
                      as: "th",
                      className: c("Venomous-UI-React--Tables.Cell", a == null ? void 0 : a.className),
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
            className: c("Venomous-UI-React--Tables.Body", N == null ? void 0 : N.className),
            style: { ...N == null ? void 0 : N.style },
            ...N,
            children: n.map((e, x) => /* @__PURE__ */ V(
              z,
              {
                className: c("Venomous-UI-React--Tables.Row", T == null ? void 0 : T.className),
                style: { ...T == null ? void 0 : T.style },
                ...T,
                children: [
                  m.map((U) => {
                    var B;
                    return /* @__PURE__ */ i(
                      f,
                      {
                        as: "td",
                        className: c("Venomous-UI-React--Tables.Cell", t == null ? void 0 : t.className),
                        style: { ...t == null ? void 0 : t.style },
                        ...t,
                        children: ((B = U.renderCell) == null ? void 0 : B.call(U, e, x)) ?? String(e[U.key] ?? "")
                      },
                      String(U.key)
                    );
                  }),
                  u && /* @__PURE__ */ i(
                    f,
                    {
                      as: "td",
                      className: c("Venomous-UI-React--Tables.Cell", t == null ? void 0 : t.className),
                      style: { ...t == null ? void 0 : t.style },
                      ...t,
                      children: u(e, x)
                    }
                  )
                ]
              },
              String(I(e, x))
            ))
          }
        )
      ]
    }
  );
}
const D = k.memo(q);
D.displayName = "Table";
const z = k.memo(({ style: m, ...n }) => {
  const I = j();
  return /* @__PURE__ */ i(
    "tr",
    {
      style: {
        boxSizing: "border-box",
        color: I.TextColors.primary,
        ...m
      },
      ...n
    }
  );
}), f = k.memo(({ as: m = "td", style: n, ...I }) => {
  const S = j();
  return /* @__PURE__ */ i(
    m,
    {
      style: {
        boxSizing: "border-box",
        padding: "16px 24px",
        textAlign: "left",
        color: S.TextColors.primary,
        backgroundColor: m === "td" ? "transparent" : S.BackgroundColors.secondary,
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderBottomColor: S.BorderColors.quaternary,
        ...n
      },
      ...I
    }
  );
});
export {
  D as default
};
