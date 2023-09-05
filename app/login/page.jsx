"use client"
import Layout from "../../components/Layout"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Page = () => {
  return <Layout
    makeHeader={() => <Header titulo="login" />}
    makeBody={
      () => <div>
        <Container style={{ width: "60%" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                Por ser uno de los primeros Early Adopters te ganaste un lugar en nuestros corazones
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Recuerdame" />
            </Form.Group>
            <Button variant="warning" type="submit" style={{ textAlign: "center" }}>
              Log In
            </Button>
          </Form>
        </Container>
      </div>
    }
    makeFooter={() => <Footer />}
  />
}

export default Page