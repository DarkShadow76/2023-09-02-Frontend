"use client"
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const url = "https://bioexpedition.com/wp-content/uploads/2012/11/Gentoo-facts.jpg"

const Page = () => {
  return <Layout
    makeHeader={() => <Header titulo="Edita tu perfil" />}
    makeBody={
      () => <div>
        <Container>

          <Row>
            <Col sm={8}>
              <h3>Genera tu Avatar</h3>
              <Card style={{ width: '18rem', display: "block", margin: "0 auto" }}>
                <Card.Img variant="top" src={url} />
                <Card.Body>
                  <Card.Title>Avatar 1</Card.Title>
                  <Card.Text>
                    Avatar Generado por IA
                  </Card.Text>
                  <Button style={{ display: "block", margin: "0 auto" }} variant="primary">Generar Avatar</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <h3 style={{ marginTop: "2%", marginBottom: "2%" }}>Intereses</h3>
              <div>
                <Form>
                  {['checkbox', 'checkbox', 'checkbox', 'checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check // prettier-ignore
                        type={type}
                        id={`default-${type}`}
                        label={`categorias ${type}`}
                      />
                    </div>
                  ))}
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    }
    makeFooter={() => <Footer />}
  />
}

export default Page;