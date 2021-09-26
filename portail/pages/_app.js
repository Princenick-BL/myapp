import '../styles/globals.scss'
import Loading from '../components/loading'

function MyApp({ Component, pageProps }) {
  return <Loading><Component {...pageProps} /></Loading> 
}

export default MyApp
