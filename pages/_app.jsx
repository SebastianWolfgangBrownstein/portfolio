import '@/styles/globals.css'

import { Genos } from '@next/fonts/google'
import Layout from '@/components/Layout'

const genos = Genos({
  subsets: ['latin'],
  variable: '--font-genos'
})

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    
  )
}
