import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import Global from '../styles/globals'
import { theme } from '../styles/theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
