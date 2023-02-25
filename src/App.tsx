import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { CoffeeContextProvider } from './contexts/CoffeeContext'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CoffeeContextProvider>
        <Header />
        <Home />
      </CoffeeContextProvider>
    </ThemeProvider>
  )
}

export default App
