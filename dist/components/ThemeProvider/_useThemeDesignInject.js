"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const c=require("react"),i=require("../../hooks/useThemeColor/index.js"),l=require("../../utils/get-colors/index.js");function s(){const{themeColor:o}=i.default(),t=c.useMemo(()=>l.default(o),[o]);c.useEffect(()=>{const r="theme-palette-style";let e=document.getElementById(r);const n=`
        /* 设置选中文本的样式 */
        ::selection {
          background-color: ${t.opacity};
          color: white;
        }
  
        /* 设置滚动条的样式 */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: ${t.origin};
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: ${t.dark};
        } 
        ::-webkit-scrollbar-track {
          background-color: rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          transition: opacity 0.5s ease-in-out;
        }
        html {
          scrollbar-color: ${t.origin} rgba(0, 0, 0, 0.1);
          scrollbar-width: thin;
        }
      `;return e||(e=document.createElement("style"),e.id=r,document.head.appendChild(e)),e.innerHTML=n,()=>{e==null||e.remove()}},[t])}exports.useThemeDesignInject=s;
