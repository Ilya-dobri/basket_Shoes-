"use client";

import { useEffect } from "react";

import { getCookie } from "cookies-next";
import { useThemeStore } from "@/zustand/themeStore";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { setTheme } = useThemeStore();

  useEffect(() => {
    const savedTheme = (getCookie("theme") as "light" | "dark") || "light";
    setTheme(savedTheme);
  }, [setTheme]);

  return <>{children}</>;
}
