import { BrowserRouter } from 'react-router-dom'

import Router from './Router'
import { CycleContextProvider } from './context/CycleContext'
import ThemeContextProvider from './styles/theme/themeContext'

function App() {

    return (
        <ThemeContextProvider>
            <BrowserRouter>
                <CycleContextProvider>
                    <Router />
                </CycleContextProvider>
            </BrowserRouter>
        </ThemeContextProvider>
    )
}

export default App
