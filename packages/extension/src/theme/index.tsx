import React, {
  createContext,
  FunctionComponent,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { ThemeProvider } from "styled-components";

export type ThemeOption = "dark" | "light" | "auto";

interface Theme {
  option: ThemeOption;
  setTheme: (option: ThemeOption) => void;
}

const initOption = () => {
  const theme = localStorage.getItem("theme-option");

  if (!theme) {
    return "dark";
  }

  return theme as ThemeOption;
};

const AppThemeContext = createContext<Theme | null>(null);

export const useAppTheme = () => {
  const theme = useContext(AppThemeContext);

  if (!theme) {
    throw new Error("You have forgot to use theme provider");
  }

  return theme;
};

export const AppThemeProvider: FunctionComponent = ({ children }) => {
  const [option, _setOption] = useState<ThemeOption>(() => initOption());

  const getTheme = () => {
    if (option === "auto") {
      return window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    }

    return option;
  };

  const setTheme = (option: ThemeOption) => {
    localStorage.setItem("theme-option", option);
    _setOption(option);
  };

  useLayoutEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";

        if (option === "auto") {
          setTheme(newColorScheme);
        }
      });
  }, [option]);

  return (
    <AppThemeContext.Provider
      value={{
        option,
        setTheme,
      }}
    >
      <ThemeProvider theme={{ mode: getTheme() }}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
};
