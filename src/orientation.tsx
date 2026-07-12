import React, { createContext, useContext } from "react";

export type Orientation = "landscape" | "vertical";

const OrientationContext = createContext<Orientation>("landscape");

export const OrientationProvider: React.FC<
  React.PropsWithChildren<{ value: Orientation }>
> = ({ value, children }) => (
  <OrientationContext.Provider value={value}>{children}</OrientationContext.Provider>
);

export const useOrientation = (): Orientation => useContext(OrientationContext);
