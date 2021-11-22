import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/layout'
import Home from './views/Home/home'
import Promotions from './views/Promotions/promotions'

import './App.css'
import './styles/output.css'
function App() {
    return (
        <Layout>
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='promotions' element={<Promotions />} />
                </Routes>
            </BrowserRouter>
        </Layout>
    )
}

export default App
