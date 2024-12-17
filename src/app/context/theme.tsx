"use client";

import { createContext, ReactNode, useContext, useState } from "react";

export interface ThemeProviderProps {
  theme: string;
  toggleTheme: () => void;
}

export type Theme = "light" | "dark";

export const ThemeContext = createContext<ThemeProviderProps | undefined>(
  undefined
);

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
