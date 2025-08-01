"use client";

import React from "react";

const NoSSR = React.memo(({ children }: React.PropsWithChildren) => {
  const [isClient, setIsClient] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return <>{children}</>;
});

NoSSR.displayName = "NoSSR";
export default NoSSR;
