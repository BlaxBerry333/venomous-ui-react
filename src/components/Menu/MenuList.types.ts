import type { SpaceFlexProps } from "@/components/Space";

export const MENU_LIST_ELEMENT_MAP = {
  UL: "ul",
  OL: "ol",
  DL: "dl",
} as const;

export type MenuListRef = HTMLUListElement | HTMLOListElement | HTMLDListElement;

export interface MenuListProps extends Omit<React.HTMLAttributes<MenuListRef>, "as"> {
  /**
   * The elements to be rendered inside.
   * @default "ul"
   */
  as?: (typeof MENU_LIST_ELEMENT_MAP)[keyof typeof MENU_LIST_ELEMENT_MAP];

  /**
   * The element Tag to be rendered.
   */
  children: React.ReactNode;

  /**
   * Whether to use Vertical layout ( flex-direction: column ).
   * @default true
   */
  column?: SpaceFlexProps["column"];

  /**
   * Gap between icon and label (in pixels)
   * @default 8
   */
  spacing?: SpaceFlexProps["spacing"];
}
