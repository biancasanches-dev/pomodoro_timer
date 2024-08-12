import { HashRouter } from 'react-router-dom'

import Router from './Router'
import { CycleContextProvider } from './context/CycleContext'
import ThemeContextProvider from './styles/theme/themeContext'

function App() {

    return (
        <ThemeContextProvider>
            <HashRouter>
                <CycleContextProvider>
                    <Router />
                </CycleContextProvider>
            </HashRouter>
        </ThemeContextProvider>
    )
}

export default App
