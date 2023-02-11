import Head from 'next/head'
import HomePage from '../components/HomePage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sebastian Brownstein</title>
        <meta name="description" content="Sebastian Brownstein is a software engineer who specializes in designing and building exceptional digital experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  )
}
