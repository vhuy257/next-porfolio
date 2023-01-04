import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import 'swiper/css'
import 'swiper/css/navigation'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
