import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'





function SentimentApp(props) {
    const [text, setText] = useState("")
    
    async function handleSubmit() {
        if (text === "") {
            alert("You must provide text for analysis!")
        } else {
            fetch("127.0.0.1:8000/prediction?text=" + text)
            .then(res => res.json())
            .then(res => print(res['prediction']))
        }
    }
    
    return (
    <>
    <Form>
        <Form.Label htmlFor='text'>Text for analysis</Form.Label>
        <Form.Control id='text' value={text} onChange={e => setText(e.target.value)}/>   
    </Form>
    <Button onClick={() => handleSubmit()}>Submit</Button>
    </>
    )
}

export default SentimentApp