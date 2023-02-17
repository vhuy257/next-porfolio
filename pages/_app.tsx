import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import { wrapper } from '../redux/store/store';
import 'swiper/css'
import 'swiper/css/navigation'
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(App)