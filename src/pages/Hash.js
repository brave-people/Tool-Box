import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import sha256 from 'crypto-js/sha256'
import sha512 from 'crypto-js/sha512'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css'
import { Button } from 'react-bootstrap'

const Hash = () => {
    const [text, setText] = useState('')
    var [hashTitle, setHashTitle] = useState('')
    const [hash, setHash] = useState('')
    const [searchParams] = useSearchParams()
    const requestHash = searchParams.get('hash')

    if (requestHash === 'sha512') {
        hashTitle = 'SHA-512'
    } else if (requestHash === 'sha256') {
        hashTitle = 'SHA-256'
    } else {
        hashTitle = 'SHA-256'
    }

    const handleInputChange = (event) => {
        setText(event.target.value)
        if (requestHash === 'sha512') {
            const hash = sha512(text).toString()
            setHash(hash)
        } else if (requestHash === 'sha256') {
            const hash = sha256(text).toString()
            setHash(hash)
        } else {
            const hash = sha256(text).toString()
            setHash(hash)
        }
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <Link to={'/hash?hash=sha512'}>
                            <Button variant="dark" size="sm">
                                SHA-512
                            </Button>
                        </Link>{' '}
                        <Link to={'/hash?hash=sha256'}>
                            <Button variant="dark" size="sm">
                                SHA-256
                            </Button>
                        </Link>{' '}
                        <h2 className="pb-3 pt-3"> {hashTitle} Hash Generator</h2>
                        <form>
                            <div className="form-group">
                                <label>Plain Text</label>
                                <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    placeholder="input text"
                                    rows="7"
                                    defaultValue={text}
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
                            rows="4"
                            style={{ backgroundColor: '#eee' }}
                            value={hash}></textarea>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hash
