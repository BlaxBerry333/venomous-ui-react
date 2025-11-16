import TypographyParagraph from "./TypographyParagraph.component";
import TypographyText from "./TypographyText.component";
import TypographyTitle from "./TypographyTitle.component";

export const Typography = {
  Paragraph: TypographyParagraph,
  Title: TypographyTitle,
  Text: TypographyText,
};

export { useTypographyParagraphStyles } from "./TypographyParagraph.hooks";
export type { TypographyParagraphProps, TypographyParagraphRef } from "./TypographyParagraph.types";

export { useTypographyTitleStyles } from "./TypographyTitle.hooks";
export { TYPOGRAPHY_TITLE_ELEMENT_MAP } from "./TypographyTitle.types";
export type { TypographyTitleProps, TypographyTitleRef } from "./TypographyTitle.types";

export { useTypographyTextStyles } from "./TypographyText.hooks";
export { TYPOGRAPHY_TEXT_ELEMENT_MAP } from "./TypographyText.types";
export type { TypographyTextProps, TypographyTextRef } from "./TypographyText.types";
