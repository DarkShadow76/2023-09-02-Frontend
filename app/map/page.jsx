import React from "react";
import GoogleMapReact from 'google-map-react';
import { Container } from "react-bootstrap";

const apikey = process.env.API_KEY_GOOGLE;

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Page = () => {
  return <Layout
    makeHeader={() => <Header titulo="Map" />}
    makeBody={
      () => <div>
        <Container>
          <GoogleMapReact
            bootstrapURLKeys={{ key: apikey }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
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