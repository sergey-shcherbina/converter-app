import React from "react"
import { Card, Col } from "react-bootstrap"

const BuySale = ({ label, requestFirst }) => {
  return (
    <Col md={6} className="d-flex flex-column align-item-center">
      <Card style={{background: "blue", margin: 15, padding: 15, border: "solid white"}}>
        <h2 className="m-auto">{label}</h2>
        <h3 className="m-auto mt-2">
          {requestFirst[0] && `${requestFirst[0].ccy} - ${label === "Buy" ? Number(requestFirst[0].buy).toFixed(2) :
            label === "Sale" && Number(requestFirst[0].sale).toFixed(2)} UAH`}
        </h3>
        <h3 className="m-auto mt-2">
          {requestFirst[1] && `${requestFirst[1].ccy} - ${label === "Buy" ? Number(requestFirst[1].buy).toFixed(2) :
            label === "Sale" && Number(requestFirst[1].sale).toFixed(2)} UAH`}
        </h3>
      </Card>
    </Col>
  )
}

export default BuySale