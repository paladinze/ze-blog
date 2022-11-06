import useTheme from "../hooks/useTheme";
import {THEME_MODE} from "../../data/constants";

export function DarkModeButton() {

  const {theme, toggleMode} = useTheme()
  return <div
    onClick={() => {
      toggleMode();
    }}
    className={'cursor-pointer dark:text-white text-6xl mr-6 mt-4 lg:mr-6 lg:mt-6'}>
    {theme === THEME_MODE.DARK && <ion-icon name="sunny-outline"></ion-icon>}
    {theme !== THEME_MODE.DARK && <ion-icon name="moon-outline"></ion-icon>}
  </div>
}
