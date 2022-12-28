import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/Navbar'
import Footer from './components/Footer'
import Profile from './pages/Profile'
import Hash from './pages/Hash'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import YmlToJson from './pages/YmlToJson'

const App = () => {
    return (
        <>
            <MyNavbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/tool-box" element={<Main />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/hash" element={<Hash />} />
                <Route path="/ymlToJson" element={<YmlToJson />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
