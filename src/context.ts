import { createContext } from "react";
import { getMode } from "./lib";

export const ThemeContext = createContext<boolean>(getMode());
export const ToggleThemeContext = createContext<any | null>(null);
export const ToastContext = createContext<any | null>(null);