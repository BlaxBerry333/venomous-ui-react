export declare const CardTagMap: {
    readonly div: "div";
    readonly section: "section";
    readonly article: "article";
};
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: (typeof CardTagMap)[keyof typeof CardTagMap];
    isTransparent?: boolean;
    isFrostedGlass?: boolean;
    isOutline?: boolean;
}
export interface CardsBookProps extends React.PropsWithChildren {
    height: number;
    width: number;
    coverImage: null | string;
    title: string;
}
export interface CardsProductProps extends React.PropsWithChildren {
    title?: string;
    description?: string;
    onCloseMenu: () => void;
    renderMenu: () => React.ReactNode;
}
//# sourceMappingURL=index.types.d.ts.map