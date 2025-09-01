const h = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  text: "text",
  strong: "strong",
  small: "small"
}, e = {
  [h.h1]: "4rem",
  // 64px
  [h.h2]: "3rem",
  // 48px
  [h.h3]: "2.25rem",
  // 36px
  [h.h4]: "1.875rem",
  // 30px
  [h.h5]: "1.5rem",
  // 24px
  [h.h6]: "1.25rem",
  // 20px
  [h.text]: "1rem",
  // 16px
  [h.strong]: "1rem",
  // 16px
  [h.small]: "0.75rem"
  // 14px
};
export {
  e as TYPOGRAPHY_SIZES,
  h as TYPOGRAPHY_SIZE_NAME
};
