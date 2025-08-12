import type { ButtonsIconProps } from "../Button/index.types";
import type { IconProps } from "../Icon";
export declare const MenuListTagMap: {
    readonly ul: "ul";
    readonly ol: "ol";
    readonly dl: "dl";
};
export declare const MenuItemTagMap: {
    readonly li: "li";
    readonly dt: "dt";
    readonly dd: "dd";
};
export interface MenuListProps extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement | HTMLDListElement> {
    as?: keyof typeof MenuListTagMap;
}
export interface MenuItemProps extends Omit<React.HTMLAttributes<HTMLLIElement>, "children"> {
    as?: keyof typeof MenuItemTagMap;
    id: string;
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
//# sourceMappingURL=index.types.d.ts.map