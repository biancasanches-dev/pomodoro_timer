import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import History from './pages/History'
import Layout from './pages/Layout'
import Tasks from './pages/Tasks'

export default function Router() {
    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="history" element={<History />} />
                <Route path='tasks' element={<Tasks />} />
            </Route>
        </Routes>
    )
}