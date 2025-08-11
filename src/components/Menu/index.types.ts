import type { ButtonsIconProps } from "../Button/index.types";
import type { IconProps } from "../Icon";

export const MenuListTagMap = {
  ul: "ul",
  ol: "ol",
  dl: "dl",
} as const;

export const MenuItemTagMap = {
  li: "li",
  dt: "dt",
  dd: "dd",
} as const;

export interface MenuListProps extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement | HTMLDListElement> {
  as?: keyof typeof MenuListTagMap;
}

export interface MenuItemProps extends Omit<React.HTMLAttributes<HTMLLIElement>, "children"> {
  as?: keyof typeof MenuItemTagMap;
  icon?: IconProps["icon"];
  text: string;
  subText?: string;
  isDisabled?: boolean;
  isActive?: boolean;
  actionButtonProps?: ButtonsIconProps;
}

export interface MenuCollapseItemProps extends Omit<MenuItemProps, "actionButton"> {
  isCollapsed?: boolean;
  subItems: MenuItemProps[];
}
