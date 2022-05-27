import React, {  useState, useEffect } from "react"
import { Container, Row } from "react-bootstrap"
import axios from "axios"
import Converter from "./Converter"
import BuySale from "./BuySale"

const Header = ({ flag }) => {
  const [requestFirst, setRequestFirst] = useState([])
  
  useEffect(() => {
    axios.get("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=5")
    .then(res => setRequestFirst(res.data))
  }, [flag])

  return (
    <Container className="d-flex flex-column" style={{color: "white", background: "blue"}}>
      <h1 className="m-auto mt-5 mb-3">Exchange rates of major currencies</h1>
      <Row>
        <BuySale label={"Buy"} requestFirst={requestFirst} />
        <BuySale label={"Sale"} requestFirst={requestFirst} />
      </Row>
      <h1 className="m-auto mt-5">Online currency converter</h1>
      <br />
      <h2 className="m-auto mb-4"> ( Input in any field ) </h2> 
      <Converter requestFirst={requestFirst} flag={flag} />
    </Container>
  )
}

export default Header