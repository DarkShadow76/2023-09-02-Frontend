"use client"
import { Card, Container } from "react-bootstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Layout from "../../../components/Layout";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const Page = () => {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return <Layout
    makeHeader={() => <Header titulo="Crear Cuenta" />}
    makeBody={
      () => <div>
        <Container style={{ width: "80%" }}>
          <Card style={{ width: '100%' }}>
            <Card.Body>
              <Card.Title>Informacion</Card.Title>
              <Card.Text>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue="Jhon"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        defaultValue="Doe"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                      <Form.Label>Username</Form.Label>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="Username"
                          aria-describedby="inputGroupPrepend"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please choose a username.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <Row className="mb-3" style={{ marginTop: "2%" }}>
                      <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                        <Form.Control
                          type="password"
                          id="inputPassword5"
                          aria-describedby="passwordHelpBlock"
                        />
                        <Form.Text id="passwordHelpBlock" muted>
                          Your password must be 8-20 characters long, contain letters and numbers,
                          and must not contain spaces, special characters, or emoji.
                        </Form.Text>
                      </Col>
                    </Row>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" placeholder="City" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                      <Form.Label>State</Form.Label>
                      <Form.Control type="text" placeholder="State" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control type="text" placeholder="Zip" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Genre</option>
                        <option value="1">Male</option>
                        <option value="2">Women</option>
                        <option value="3">Non-Binari</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <a href="https://termly.io/resources/templates/privacy-policy-template/">
                        <Form.Group className="mb-3">
                          <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                          />
                        </Form.Group>
                      </a>
                    </Col>
                  </Row>
                  <Button style={{ display: "block", margin: "0 auto", width: "15%" }} type="submit">Confirm</Button>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    }
    makeFooter={() => <Footer />}
  />
};

export default Page;