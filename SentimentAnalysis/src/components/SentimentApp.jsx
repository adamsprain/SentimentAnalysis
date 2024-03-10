import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'






function SentimentApp(props) {
    const [text, setText] = useState("")
    const [prediction, setPrediction] = useState("")

    async function handleSubmit() {
        if (text === "") {
            alert("You must provide text for analysis!")
        } else {
            fetch("http://localhost:8000/prediction?text=" + text)
            .then(res => res.json())
            .then(res => setPrediction(res['prediction']))
        }
    }
    
    return (
    <>
    <Row>
        <Form.Label>Text for analysis:</Form.Label>
    </Row>
    <Row>
        <Form.Control value={text} placeholder="Enter Text" onChange={e => setText(e.target.value)}/>   
    </Row>
    <Button type="submit" onClick={() => handleSubmit()}>Submit</Button>
    <div>
        This text feels: {prediction}
    </div>
    
    </>
    )
}

export default SentimentApp