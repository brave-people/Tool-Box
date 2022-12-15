import React, { useState } from 'react'
import sha256 from 'crypto-js/sha256'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/Navbar'

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
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form>
                            <div className="form-group">
                                <label>Input Text</label>
                                <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="7"
                                    value={text}
                                    onChange={handleInputChange}></textarea>
                            </div>
                        </form>

                        <p className="mt-3">SHA 256</p>
                        <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="7"
                            value={hash}></textarea>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
