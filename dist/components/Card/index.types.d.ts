export declare const CardTagMap: {
    readonly div: "div";
    readonly section: "section";
    readonly article: "article";
};
export declare const CardVariantMap: {
    readonly elevated: "elevated";
    readonly outlined: "outlined";
    readonly transparent: "transparent";
    readonly frostedGlass: "frostedGlass";
};
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: (typeof CardTagMap)[keyof typeof CardTagMap];
    variant?: keyof typeof CardVariantMap;
}
export interface CardsBookProps extends React.PropsWithChildren {
    className?: string;
    height: number;
    width: number;
    coverImage: null | string;
    title: string;
}
export interface CardsProductProps {
    className?: string;
    title?: string;
    description?: string;
    renderMenu: () => React.ReactNode;
}
export interface CardsTitleBlockProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    style?: React.CSSProperties;
    title: string;
    titleStyle?: React.CSSProperties;
}
//# sourceMappingURL=index.types.d.ts.map