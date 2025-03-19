import { create } from "zustand";
import { getCookie, setCookie } from "cookies-next";

type Theme = "light" | "dark";

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: (getCookie("theme") as Theme) || "light", 
  
  setTheme: (theme) => {
    set({ theme });
    setCookie("theme", theme, { maxAge: 60 * 60 * 24 * 365 }); 
    document.documentElement.setAttribute("data-theme", theme);
  },

  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      setCookie("theme", newTheme, { maxAge: 60 * 60 * 24 * 365 });
      document.documentElement.setAttribute("data-theme", newTheme);
      return { theme: newTheme };
    });
  },
}));
