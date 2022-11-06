import {useCallback, useEffect, useState} from "react";
import {getCurrentTheme} from "../../utils/dark-mode";
import {THEME_MODE} from "../../data/constants";


export default function useTheme() {
  const [theme, setTheme] = useState(THEME_MODE.DAY);

  useEffect(() => {
    const actualMode = getCurrentTheme();
    setTheme(actualMode);
    persistTheme(actualMode);
  }, []);

  const persistTheme = useCallback((mode) => {
    if (mode === THEME_MODE.DAY) {
      localStorage.setItem('theme', THEME_MODE.DAY);
      document.documentElement.classList.remove(THEME_MODE.DARK);
    } else {
      localStorage.setItem('theme', THEME_MODE.DARK);
      document.documentElement.classList.add(THEME_MODE.DARK);
    }
  }, []);

  const toggleMode = useCallback(() => {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === THEME_MODE.DAY ? THEME_MODE.DARK : THEME_MODE.DAY;
      persistTheme(nextTheme);
      return nextTheme;
    });
  }, []);

  return {
    theme,
    toggleMode
  }
}
