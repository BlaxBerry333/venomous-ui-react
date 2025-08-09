import { jsxs as l, jsx as e } from "react/jsx-runtime";
import f from "clsx";
import t from "react";
import { getMediaFileTypeColor as m } from "./tools.esm.js";
import { TextColors as p } from "../../utils/design/colors.esm.js";
const c = t.memo(({ fileExtension: o, width: r = 40, className: a, ...d }) => {
  var i;
  const s = t.useMemo(
    () => m(o),
    [o]
  ), n = p.dark.primary;
  return /* @__PURE__ */ l(
    "svg",
    {
      width: r,
      height: r * 2,
      viewBox: "0 0 40 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: f("Venomous-UI-React--MediaFile.TypeImage", a),
      ...d,
      children: [
        /* @__PURE__ */ e(
          "path",
          {
            d: "M23.172 0C23.7022 0 24.2107 0.210507 24.5857 0.585255L36.4137 12.4044C36.7891 12.7795 37 13.2884 37 13.8191V35.3333C37 37.9107 34.8689 40 32.24 40H7.76C5.13112 40 3 37.9107 3 35.3333V4.66667C3 2.08934 5.13112 0 7.76 0H23.172Z",
            fill: s
          }
        ),
        /* @__PURE__ */ e("g", { filter: "url(#filter0_d_1255_158068)", children: /* @__PURE__ */ e(
          "path",
          {
            d: "M35.1548 12.1381C35.4678 12.4537 35.2443 12.9902 34.7998 12.9902H29C26.4227 12.9902 24.0976 10.7233 24.0976 8.21031V2.20435C24.0976 1.75791 24.6382 1.53528 24.9526 1.85224L35.1548 12.1381Z",
            fill: "white",
            fillOpacity: "0.24",
            shapeRendering: "crispEdges"
          }
        ) }),
        /* @__PURE__ */ e(
          "text",
          {
            x: "45%",
            y: "55%",
            fontSize: "8",
            fontWeight: "bold",
            fill: n,
            fontFamily: "Arial",
            textAnchor: "middle",
            dominantBaseline: "middle",
            children: (i = String(o)) == null ? void 0 : i.toLocaleLowerCase()
          }
        ),
        /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ l(
          "filter",
          {
            id: "filter0_d_1255_158068",
            x: "22.0977",
            y: "1.70337",
            width: "15.2031",
            height: "15.2869",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              /* @__PURE__ */ e("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
              /* @__PURE__ */ e("feOffset", { dy: "2" }),
              /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: "1" }),
              /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
              /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" }),
              /* @__PURE__ */ e("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_1255_158068" }),
              /* @__PURE__ */ e("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_1255_158068", result: "shape" })
            ]
          }
        ) })
      ]
    }
  );
});
c.displayName = "MediaFile.TypeImage";
export {
  c as default
};
