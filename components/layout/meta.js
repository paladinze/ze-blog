import Head from 'next/head'
import {META_HOME_DESCRIPTION, META_HOME_TITLE} from '../../data/constants'

export default function Meta() {
  return (
    <Head>
      <title>{META_HOME_TITLE}</title>
      <meta
        name="description"
        content={META_HOME_DESCRIPTION}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest"/>
      <link rel="shortcut icon" href="/favicon/favicon.ico"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <meta name="msapplication-TileColor" content="#000000"/>
      <meta name="theme-color" content="#000"/>
      <meta property="og:image" content={'/assets/blog/zefolio/zefolio.jpg'}/>
    </Head>
  )
}
