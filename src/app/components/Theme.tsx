"use client";

import { useTheme } from "../context/theme";

export function Theme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p>Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}
