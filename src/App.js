import React, { useState } from 'react'
import sha256 from 'crypto-js/sha256'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/Navbar'
import Footer from './components/Footer'
import Profile from './pages/Profile'
import Hash from './pages/Hash'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'

const App = () => {
    const [text, setText] = useState('')
    const [hash, setHash] = useState('')

    const handleInputChange = (event) => {
        setText(event.target.value)

        // do hash
        const hash = sha256(text).toString()
        setHash(hash)
    }

    return (
        <>
            <MyNavbar />
            <Routes>
                <Route path="/main" element={<Main />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/hash" element={<Hash />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
