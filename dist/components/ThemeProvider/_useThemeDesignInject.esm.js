import c from "react";
import i from "../../hooks/useThemeColor/index.esm.js";
import n from "../../utils/get-colors/index.esm.js";
function d() {
  const { themeColor: r } = i(), e = c.useMemo(() => n(r), [r]);
  c.useEffect(() => {
    const t = "theme-palette-style";
    let o = document.getElementById(t);
    const l = `
        /* 设置选中文本的样式 */
        ::selection {
          background-color: ${e.opacity};
          color: white;
        }
  
        /* 设置滚动条的样式 */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: ${e.origin};
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: ${e.dark};
        } 
        ::-webkit-scrollbar-track {
          background-color: rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          transition: opacity 0.5s ease-in-out;
        }
        html {
          scrollbar-color: ${e.origin} rgba(0, 0, 0, 0.1);
          scrollbar-width: thin;
        }
      `;
    return o || (o = document.createElement("style"), o.id = t, document.head.appendChild(o)), o.innerHTML = l, () => {
      o == null || o.remove();
    };
  }, [e]);
}
export {
  d as useThemeDesignInject
};
