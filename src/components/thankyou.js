import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

function ThankYouPage() {
  return (
    <Container className="py-5 text-center">
      <FaCheckCircle size={72} className="text-success mb-3" />
      <h1 className="mb-3">Thank You!</h1>
      <p className="lead mb-5">
        Your evidence has been received. Together, we can build peaceful society.
      </p>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <img
            src="https://picsum.photos/id/45/4592/2576"
            alt="Thank You"
            className="img-fluid rounded"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ThankYouPage;
