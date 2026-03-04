"use client";
import { useEffect, useState } from "react";

export type Theme = "light" | "dark" | "system";

// A tiny helper that returns the current system preference. We call
// it from both the initial state initializer (which runs on first render
// and therefore must be sync) and from effects later on.
function getPrefersDark() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

// This hook exposes the current theme, a setter, whether the theme
// system has finished hydrating, and a boolean "isDark" that resolves
// to a concrete light/dark value (based on the system preference when
// the user has chosen "system").
export function useTheme() {
  // default to light so server and initial client render match.
  const [theme, setTheme] = useState<Theme>("light");

  // on mount, read stored value and system preference once.
  useEffect(() => {
    const stored = window.localStorage.getItem("theme") as Theme | null;
    const prefersDark = getPrefersDark();
    const initial: Theme = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
  }, []);

  // apply the class and persist whenever the resolved theme changes.
  useEffect(() => {
    const prefersDark = getPrefersDark();
    const isDark =
      theme === "dark" || (theme === "system" && prefersDark);

    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark" || (theme === "system" && getPrefersDark());

  return { theme, setTheme, isDark } as const;
} 
