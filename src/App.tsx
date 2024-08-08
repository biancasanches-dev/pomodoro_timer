import { ThemeProvider } from "styled-components"
import Router from "./Router"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import { CycleContextProvider } from "./context/CycleContext"
import { defaultTheme } from "./styles/theme/defaultTheme"

function App() {

  return (
    <ThemeProvider theme={ defaultTheme }>
      <BrowserRouter>
        <CycleContextProvider>
          <Router />
        </CycleContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
