"use client"
import Layout from "../../components/Layout"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "../../styles/custom.css"
import Valores from "./valores";
import Compromiso from "./compromiso";
const getEmpresa = require("../../components/data.jsx")

const Page = () => {
  return <Layout
    makeHeader={() => <Header titulo="Acerca de" />}
    makeBody={
      () => <div className="testFormat">
        <h1>Nosotros</h1>
        <Container expand="sm" style={{
          backgroundColor: '#D7BBF5',
          borderRadius: "1rem",
          width: "75%",
          marginTop: "0%"
        }}>
          <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            fill
            style={{
              backgroundColor: "#D7BBF5",
              fontStretch: "expanded",
              width: "100%"
            }} >
            <Tab eventKey="home" title="Mision">
              <Container style={{ width: "95%" }}>
                <h5>Nuestra misión en {getEmpresa.getEmpresa()}, es brindar soluciones de ingeniería con calidad excepcional que superen las expectativas de nuestros clientes. A través de la innovación, el compromiso con la excelencia y una profunda ética de trabajo, buscamos ser líderes en el sector eléctrico  al entregar proyectos de construcción y electrificación cumpliendo integralmente las normas técnicas y legales del sector; con estándares de seguridad adecuados y un enfoque constante en la satisfacción del cliente.</h5>
                <Container style={{ width: "80%" }}>
                  <Image className="ImgTest" src="https://images.pexels.com/photos/806835/pexels-photo-806835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" thumbnail />
                </Container>
              </Container>
            </Tab>
            <Tab eventKey="profile" title="Vision">
              <Container style={{ width: "95%" }}>
                <h5>Nuestra visión en {getEmpresa.getEmpresa()}, es ser reconocidos como la primera elección en servicios de ingeniería a nivel global. Nos esforzamos por establecer un estándar de excelencia en cada proyecto que emprendemos, siendo líderes en tecnología, sostenibilidad y calidad. Buscamos construir un mundo donde nuestras obras sean un testimonio duradero de nuestra pasión por la innovación y el compromiso con la comunidad.</h5>
                <Container style={{ width: "60%" }}>
                  <Image className="ImgTest" src="https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </Container>
              </Container>
            </Tab>
            <Tab eventKey="longer-tab" title="Valores">
              <Container style={{width:"95%"}}>
                <h5>En {getEmpresa.getEmpresa()}, nuestros valores fundamentales son el cimiento de todo lo que hacemos. Valoramos la:</h5>
                <h6>
                  <Container style={{ width: "60%" }}>
                    <Valores />
                  </Container>
                </h6>
              </Container>
            </Tab>
            <Tab eventKey="contact" title="Compromiso">
              <Container>

              </Container>
              <h5>En {getEmpresa.getEmpresa()}, estamos comprometidos con:</h5>
              <h6>
                <Container style={{ width: "60%" }}>
                  <Compromiso />
                </Container>
              </h6>
              <h6><strong>Notas del Desarrollador</strong></h6>
              <h6>Uso gentoo linux en una thinkpad</h6>
              <h6><a href="https://suckless.org/philosophy/" target="_blank">Filosofia del Desarrollador</a></h6>
            </Tab>
          </Tabs>
        </Container>
      </div>
    }
    makeFooter={() => <Footer />}
  />
}

export default Page