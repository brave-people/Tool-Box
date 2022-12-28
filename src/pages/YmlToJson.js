import React, { useState } from 'react'
import * as yaml from 'js-yaml'
import CodeEditor from '@uiw/react-textarea-code-editor'

function YmlToJson() {
    const [ymlText, setYmlText] = useState('')
    const [json, setJson] = useState({})
    const [isVisible, setIsVisible] = useState(false)

    function handleConvert(event) {
        setYmlText(event.target.value)
        try {
            const json = yaml.load(ymlText)
            setJson(json)
            setIsVisible(false)
        } catch (error) {
            setIsVisible(true)
        }
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2 className="pb-3 pt-3"> YML to JSON Converter </h2>
                    <form>
                        <div className="form-group">
                            <label>YML Input</label>
                        </div>
                        <CodeEditor
                            language="yaml"
                            placeholder="input text"
                            defaultValue={ymlText}
                            onChange={handleConvert}
                            padding={20}
                            style={{
                                fontSize: '1rem',
                                backgroundColor: '#222',
                                border: '1px solid #ced4da',
                                borderRadius: '.375rem',
                            }}
                        />
                    </form>
                    {isVisible && (
                        <div className="row justify-content-right">
                            <h5 style={{ textAlign: 'right' }} className="text-right text-danger">
                                Invalid YML Grammar
                            </h5>
                        </div>
                    )}
                    <br />
                    <div className="row justify-content-center">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="#000">
                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                    </div>
                    <p className="mt-3">JSON Output</p>
                    <CodeEditor
                        language="json"
                        value={JSON.stringify(json, null, 2)}
                        padding={20}
                        style={{
                            fontSize: '1rem',
                            backgroundColor: '#eee',
                            border: '1px solid #ced4da',
                            borderRadius: '.375rem',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default YmlToJson
