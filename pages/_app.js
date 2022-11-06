import '../styles/index.css'
import "prismjs/themes/prism-tomorrow.css";
import useTheme from "../components/hooks/useTheme";

export default function MyApp({Component, pageProps}) {

  useTheme();

  return <Component {...pageProps} />
}
