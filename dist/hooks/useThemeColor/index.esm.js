import { useStore as t, create as m } from "zustand";
import { devtools as s, persist as l } from "../../node_modules/zustand/esm/middleware.esm.js";
import { ThemeColor as n } from "../../utils/colors/index.esm.js";
const e = n.JadeAnaconda, C = m()(
  s(
    l(
      (o) => ({
        themeColor: e,
        setThemeColor: (r) => o({ themeColor: r }),
        resetThemeColor: () => o({ themeColor: e })
      }),
      {
        name: "VENOMOUS_UI__THEME_COLOR"
      }
    )
  )
);
function _() {
  return {
    ...t(C)
  };
}
export {
  _ as default
};
