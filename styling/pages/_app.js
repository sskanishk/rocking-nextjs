import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'

const theme = {
  color: {
    primary: '#355C7D'
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
