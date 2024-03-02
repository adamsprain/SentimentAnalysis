import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
function SentimentApp(props) {
    const [text, setText] = useState("")
    return (
    <Form>
        <Form.Label htmlFor='text'>Text for analysis</Form.Label>
        <Form.Control id='text' value={text} onChange={e => setText(e.target.value)}/>   
    </Form>
    )
}

export default SentimentApp