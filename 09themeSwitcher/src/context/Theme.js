import React, { createContext, useContext } from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
