import './App.css'
import './styles/output.css'
import Layout from './components/Layout/layout'
import Home from './views/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <Layout>
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='expenses' element={<Expenses />} />
                    <Route path='invoices' element={<Invoices />} />
                </Routes>
            </BrowserRouter>
        </Layout>
    )
}

const Invoices = function () {
    return (
        <main style={{ padding: '1rem 0' }}>
            <h2>Invoices</h2>
        </main>
    )
}
const Expenses = function () {
    return (
        <main style={{ padding: '1rem 0' }}>
            <h2>Invoices</h2>
        </main>
    )
}

export default App
