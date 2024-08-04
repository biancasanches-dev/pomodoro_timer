import { ThemeProvider } from "styled-components"
import { darkTheme } from "./styles/theme/dark"
import Router from "./Router"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import { CycleContextProvider } from "./context/CycleContext"

function App() {

  return (
    <ThemeProvider theme={ darkTheme }>
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
