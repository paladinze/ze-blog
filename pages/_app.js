import '../styles/index.css'
import "prismjs/themes/prism-tomorrow.css";
import useTheme from "../components/hooks/useTheme";
import {Analytics} from '@vercel/analytics/react';

export default function MyApp({Component, pageProps}) {

  useTheme();

  return <>
    <Component {...pageProps} />
    <Analytics/>
  </>
}
