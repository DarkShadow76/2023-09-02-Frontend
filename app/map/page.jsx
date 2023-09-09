"use client"
import Layout from "../../components/Layout"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import React from "react";
import { Container } from "react-bootstrap";
import GoogleMapReact from 'google-map-react';

const apikey = process.env.REACT_APP_API_KEY_GOOGLE;

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Page = () => {
  return <Layout
    makeHeader={() => <Header titulo="Map" />}
    makeBody={
      () => <div>
        <Container>
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
        </Container>
      </div>
    }
    makeFooter={() => <Footer />}
  />
}

export default Page;