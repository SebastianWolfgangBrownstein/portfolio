import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Genos:ital,wght@0,400;0,500;1,400;1,500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
