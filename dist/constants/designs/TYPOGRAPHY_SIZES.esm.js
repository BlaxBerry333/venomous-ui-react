const H = {
  TITLE: {
    H1: "40px",
    H2: "32px",
    H3: "25px",
    H4: "20px",
    H5: "16px",
    H6: "15px"
  },
  TEXT: {
    LARGE: "18px",
    // 偏大正文/引用
    BASE: "16px",
    // 标准正文 (基线)
    SMALL: "14px",
    // 小号正文/列表项
    CAPTION: "12px"
    // 辅助信息/脚注/时间戳
  }
}, p = {
  h1: "H1",
  h2: "H2",
  h3: "H3",
  h4: "H4",
  h5: "H5",
  h6: "H6"
};
export {
  H as TYPOGRAPHY_SIZES,
  p as __TITLE_ELEMENT_TO_TYPOGRAPHY_SIZE_MAP
};
