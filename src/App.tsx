import { ThemeProvider } from "styled-components"
import { darkTheme } from "./styles/theme/dark"
import Router from "./Router"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <ThemeProvider theme={ darkTheme }>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
