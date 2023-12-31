"use client"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Carrusel from "../components/carrusel"
import { Container } from "react-bootstrap"
import Image from 'react-bootstrap/Image';

const Page = () => {
  return <Layout
    makeHeader={() => <Header titulo="Encabezado Innovador"/>}
    makeBody={
      () => <div>
        <h4>Texto Asombroso</h4>
        <Container style={{ height: "85%", width: "90%", alignContent: "center", marginTop: "2%" }}>
          <Carrusel />
        </Container>
        <Container className="container-body">
          <h4> Somos TourIzi: </h4>
          <h4>¿Llegaste a tu hotel pero tienes 4 horas disponibles que no sabes como aprovecharlas?</h4>
          <Image className="image" src="https://www.worldgreynews.com/uploads/main/1839531837_turist-10.jpg" roundedCircle />
          <h4>¿Tu actividad fue cancelada y de ultimo momento buscas actividades cerca de ti?</h4>
          <h5>Entonces Debes Probar TourIzi :)</h5>
          <h5>Una aplicación que se compromete a sacar el máximo provecho de los momentos inactivos durante tus viajes y experiencias aventureras.</h5>
          <Image className="image-1" src="https://st2.depositphotos.com/3332767/5943/i/450/depositphotos_59432769-stock-photo-male-tourist-giving-thumb-up.jpg" rounded />
        </Container>
      </div>
    }
    makeFooter={() => <Footer />}
  />
}

export default Page