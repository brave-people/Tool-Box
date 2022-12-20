import React, { useState } from 'react'
import sha256 from 'crypto-js/sha256'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css'

const Hash = () => {
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
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form>
                            <div className="form-group">
                                <label>Plain Text</label>
                                <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    placeholder="input text"
                                    rows="7"
                                    value={text}
                                    onChange={handleInputChange}></textarea>
                            </div>
                        </form>
                        <br />
                        <div className="row justify-content-center">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="#000">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>
                        </div>
                        <p className="mt-3">SHA 256</p>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="7"
                            style={{ backgroundColor: '#eee' }}
                            value={hash}></textarea>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hash
