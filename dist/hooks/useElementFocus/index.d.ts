import React from "react";
export default function useElementFocus<T>(): {
    isFocused: boolean;
    setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
    handleFocus: React.FocusEventHandler<T>;
    handleBlur: React.FocusEventHandler<T>;
};
//# sourceMappingURL=index.d.ts.map