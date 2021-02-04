import { createGlobalStyle, ThemeProvider } from 'styled-components'
import config from '../config.json'


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body { 
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Roboto Condensed', sans-serif;
    font-size:${({ theme }) => theme.fontSize};
   
    color: ${({ theme }) => theme.colors.mainText};
  }
  html, body {
    min-height: 100vh;
  }
  p {
    margin:0;padding:0;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`


const theme = config.theme

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
