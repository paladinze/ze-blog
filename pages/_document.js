import Document, {Head, Html, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
          <script type="text/javascript" src='/scripts/theme-init.js' />
        </Head>
        <body className={'dark:bg-stone-900'}>
        <Main/>
        <NextScript/>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </body>
      </Html>
    )
  }
}
