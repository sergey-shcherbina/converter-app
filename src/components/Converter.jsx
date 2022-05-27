import React, {  useState, useEffect } from "react"
import axios from "axios"
import { Container, Row} from "react-bootstrap"
import FormGroup from "./FormGroup"

const Converter = ({ requestFirst, flag }) => {
  const [requestSecond, setRequestSecond] = useState([])
  const request = requestSecond && [...requestFirst].concat([...requestSecond]).filter(req => req.ccy !== "BTC")
  .concat([{"ccy": "UAH", "sale": "1.0000"}])

  const [currency1, setCurrency1] = useState("0.00")
  const [currencyName1, setCurrencyName1] = useState("USD")
  const [currency2, setCurrency2] = useState("0.00")
  const [currencyName2, setCurrencyName2] = useState("UAH")

  useEffect(() => {
    axios.get("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=4")
    .then(res => setRequestSecond(res.data))
  }, [flag])

  return (
    <Container style={{background: "blue", height: "30vh"}}>
      <Row>
        <FormGroup 
          valueInput={currency1.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
          changeInput={e => setCurrency1(e.target.value.replace(/[^0-9.]/g, ""))}
          keyUp={() => 
            setCurrency2((request.filter(r => r.ccy === currencyName1)[0].sale / 
              request.filter(r => r.ccy === currencyName2)[0].sale * currency1).toFixed(3))
          }
          valueSelect={currencyName1}
          changeSelect={e => {
            setCurrencyName1(e.target.value)
            request && setCurrency2((request.filter(r => r.ccy === e.target.value)[0].sale / 
              request.filter(r => r.ccy === currencyName2)[0].sale * currency1).toFixed(3))
          }}
          request={request}
        />
        <FormGroup 
          valueInput={currency2.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
          changeInput={e => setCurrency2(e.target.value.replace(/[^0-9.]/g, ""))}
          keyUp={() => 
            setCurrency1((request.filter(r => r.ccy === currencyName2)[0].sale / 
              request.filter(r => r.ccy === currencyName1)[0].sale * currency2).toFixed(3))
          }
          valueSelect={currencyName2}
          changeSelect={e => {
            setCurrencyName2(e.target.value)
            setCurrency1((request.filter(r => r.ccy === e.target.value)[0].sale / 
              request.filter(r => r.ccy === currencyName1)[0].sale * currency2).toFixed(3))
          }}
          request={request}
        />
      </Row>
    </Container>
  )
}

export default Converter