import {THEME_MODE} from "../data/constants";

export function getCurrentTheme() {
  const persistedVal = localStorage.getItem('theme');
  const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDarkMode = persistedVal === THEME_MODE.DARK
    || (!Object.values(THEME_MODE).includes(persistedVal) && systemPref);

  return isDarkMode ? THEME_MODE.DARK : THEME_MODE.DAY;
}
