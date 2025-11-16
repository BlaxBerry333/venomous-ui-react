"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";

const NoSSR = React.memo(({ children }: React.PropsWithChildren) => {
  const [isClient, setIsClient] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return <>{children}</>;
});

NoSSR.displayName = COMPONENT_DISPLAY_NAMES.NoSSR;
export default NoSSR;
