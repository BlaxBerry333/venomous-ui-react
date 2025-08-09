import Book from "./CardsBook";
import Product from "./CardsProduct";
import TitleBlock from "./CardsTitleBlock";

export { default as Card } from "./Card";

export type { CardProps } from "./index.types";

export const Cards = {
  Book,
  Product,
  TitleBlock,
};
