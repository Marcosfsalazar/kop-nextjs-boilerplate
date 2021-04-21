import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '../styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>One Price Games</title>
        <link rel="shortcut icon" href="img/onepieceicon.ico" />
        <link rel="apple-touch-icon icon" href="img/onepieceicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="A simple project to learn nextjs" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
