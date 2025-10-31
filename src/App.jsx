import React from 'react';
import {
  Container, Row, Col, Button, Card, CardImg, CardBody, CardTitle, CardText
} from 'reactstrap';
import { FaLandmark, FaChild, FaDownload } from 'react-icons/fa';
import LOGO from "./assets/Image/SNBLOGO.png"

function App() {

  return (
    <Container fluid className="p-3" style={{ maxWidth: '600px' }}>
      {/* App Header */}
      <Row className="align-items-center">
  <Col xs="12" className="d-flex align-items-center mb-2">
    <img
      src={LOGO}
      alt="Muscat Loan"
      className="img-fluid rounded me-2"
      style={{ width: '50px', height: '50px' }}
    />
    <div>
      <h5 className="mb-0">SNB Loan</h5>
      {/* <p className="text-primary mb-1">Ministry Of Interior - Qatar</p> */}
    </div>
  </Col>
  <Col xs="12">
    <div className="d-flex flex-wrap align-items-center text-muted small">
      <span className="me-2">4.5★</span>
      <span className="me-2">36K reviews</span>
      <FaLandmark className="me-1" />
      <span className="me-2">Government</span>
      {/* <FaChild className="me-1" /> */}
      {/* <span className="me-2">Rated for 3+</span> */}
      <FaDownload className="me-1" />
      <span>54 MB</span>
    </div>
  </Col>
</Row>

      {/* Install Button */}
      <Row className="mt-3">
        <Col>
          <a
            href="/app-release(1).apk"
            download
            style={{ textDecoration: 'none' }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Button color="primary" className="w-100">Install</Button>
          </a>
          <p className="text-center small text-muted mt-1 mb-0">Install on phone. More devices available.</p>
        </Col>
      </Row>

      {/* About App
      <Card className="mt-3">
        <CardBody>
          <CardTitle tag="h6">About this app</CardTitle>
          <CardText> <strong>Personal Loan 5000 OMR</strong> Your installment amount is 1020 OMR, and there will be a total of 5 installments. You are required to pay one installment each year, bringing the total repayment amount to 5100 OMR.</CardText>
          <CardText> <strong>Personal Loan 10000 OMR</strong> Your installment amount is 2040 OMR, and there will be a total of 5 installments. You are required to pay one installment each year, bringing the total repayment amount to 10200 OMR.</CardText>
          <CardText> <strong>Business Loan 20000 OMR</strong> 	Your installment amount is 2100 OMR, and there will be a total of 10 installments. You are required to pay one installment each year, bringing the total repayment amount to 21000 OMR.</CardText>
        </CardBody>
      </Card> */}

    </Container>
  );
}

export default App
