import Head from 'next/head'
import { Inter } from '@next/font/google'
import HomePage from '@/components/HomePage'

const inter = Inter({ subsets: ['latin'] })

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
