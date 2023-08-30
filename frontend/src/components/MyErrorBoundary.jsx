import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyErrorBoundary = () => {
  const navigate = useNavigate();

  const goHomeHandler = () => {
    navigate("/");
  };
  return (
    <>
      <h1 className="text-center text-danger my-5">
        Oops.. You Encountered An Error!
      </h1>
      <Container className="text-center">
        <Row>
          <Col lg={12}>
            <Button as='button' variant='dark' onClick={goHomeHandler}>Go Back</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyErrorBoundary;
