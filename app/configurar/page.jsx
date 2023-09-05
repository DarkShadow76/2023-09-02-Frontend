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
        <h2>Selecciona tu Avatar</h2>
        <Container>
          <Row>
            <Col sm>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={url} />
                <Card.Body>
                  <Card.Title>Avatar 1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={url} />
                <Card.Body>
                  <Card.Title>Avatar 2</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={url} />
                <Card.Body>
                  <Card.Title>Avatar 3</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <h3 style={{ marginTop: "2%", marginBottom: "2%" }}>Intereses</h3>
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
        </Container>
      </div>
    }
    makeFooter={() => <Footer />}
  />
}

export default Page;