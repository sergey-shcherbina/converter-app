import React, { useState } from "react"
import {Form, Col} from "react-bootstrap"

const FormGroup = ({ valueInput, changeInput, keyUp, valueSelect, changeSelect, request }) => {
  const [back1, setBack1] = useState("whitesmoke")
  const [back2, setBack2] = useState("whitesmoke")
  
  return (
    <Col md={6} >
      <Form.Group className="mt-4 d-flex justify-content-center">
        <Form.Control
          style={{fontWeight: 700, fontSize: 30, maxWidth: 300, background: back1, color: "blue"}}
          value={valueInput}
          onChange={changeInput}
          onKeyUp={keyUp}
          onMouseOver={() => setBack1("")}
          onMouseLeave={() => setBack1("whitesmoke")}
        />
        <Form.Select 
          style={{maxWidth: 130, marginLeft: 25, fontWeight: 700, fontSize: "180%", background: back2, color: "blue"}}
          value={valueSelect}
          onChange={changeSelect}
          onMouseOver={() => setBack2("")}
          onMouseLeave={() => setBack2("whitesmoke")}
        >
          {request && request.map(currency => 
            <option key={currency.ccy}>{currency.ccy}</option>
          )}
        </Form.Select>
      </Form.Group>
    </Col>
  )
}

export default FormGroup