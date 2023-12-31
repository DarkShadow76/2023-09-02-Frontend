"use client"
import { Container } from "react-bootstrap";
import { useState } from 'react';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Image from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import ListGroup from 'react-bootstrap/ListGroup';
import { globalizeLocalizer } from 'react-big-calendar'
import globalize from 'globalize'
import Calendar from 'react-calendar';

import React from "react";
import GoogleMapReact from 'google-map-react';

import '../../styles/custom.css'

const localizer = globalizeLocalizer(globalize)
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const myEventsList = [
];

const Page = () => {
  const [date, setDate] = useState(new Date());

  return <Layout
    makeHeader={() => <Header titulo="Actividades Cerca de ti" />}
    makeBody={
      () => <div>
        <Container style={{ width: "60%", marginTop: "2%", marginBottom: "2%" }}>
          <Stack direction="horizontal" gap={3}>
            <Form.Control className="me-auto" placeholder="Que tipo de actividad estas buscando?..." />
            <Button variant="secondary">Submit</Button>
            <div className="vr" />
            <Button variant="outline-danger">Reset</Button>
          </Stack>
        </Container>
        <Container className="container-body">
          <Row>
            <Col style={{}} sm={3}>Categoria</Col>
            <Col style={{}} sm={9}>Mapa</Col>
          </Row>
          <Row style={{ height: "100%" }}>
            <Col sm={3}>
              <ListGroup>
                <ListGroup.Item>Museo</ListGroup.Item>
                <ListGroup.Item>Conciertos</ListGroup.Item>
                <ListGroup.Item>Eventos</ListGroup.Item>
                <ListGroup.Item>Ferias</ListGroup.Item>
                <ListGroup.Item>Arte</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={9}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY_GOOGLE }}
                defaultCenter={{ lat: -12.0846883, lng: -76.9736981 }}
                defaultZoom={20}
                yesIWantToUseGoogleMapApiInternals={true}
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </Col>
          </Row>
          <div className="calendar-container">
            <Calendar onChange={setDate} value={date} />
          </div>
        </Container>
        <p className='text-center'>
          <span className='bold'>Selected Date:</span>{' '}
          {date.toDateString()}
        </p>
      </div>
    }
    makeFooter={() => <Footer />}
  />
}

export default Page;