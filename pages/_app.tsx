import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from 'next-auth/react'
import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
        <Toaster />
      </SessionProvider>
    </Provider>
  )
}

export default MyApp
