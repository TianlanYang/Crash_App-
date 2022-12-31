import React, { useState, useEffect, Component } from "react";
import styled from "styled-components";
import "./index.css";

import GoogleMapReact from "google-map-react";
// import 'google-map-react/dist/index.css'

import GAINESVILLE from "./const/Gainesville_center";

import Marker from "./components/Marker";
import Information from "./components/Information";
import logo from "./components/meta-chart.png";

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  
`;

const SubWrapper1 = styled.div`
  margin: 0 10px;
  width: 65%;
  height: 90%;
`;

const SubWrapper2 = styled.div`
  margin-left: 10px;
  display: block;
  width: 30%;
  height: 40%;
`;

const SubWrapper3 = styled.div`
  ${
    "" /* width: 10%;
  height: 10%;
  object-fit:cover; */
  }
`;

const App = () => {
  const [places, setPlaces] = useState([]);

  const fetchPlaces = async () => {
    fetch("http://0.0.0.0/crash_events/list/all")
      .then((response) => {
        let data = response.json();
        console.log(data);
        return data;
      })
      .then((data) => setPlaces(data));
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  if (!places || places.length === 0) {
    return null;
  }

  return (
    <Wrapper>
      <SubWrapper1 className="father">
        <div className="box1">
          <h3>Crash event map</h3>
        </div>
        {/* <div className="box2">
          <h4 className="content">box</h4>
        </div> */}
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyBZhy1F8pC2eoIVpENpXxdZVGGOkhjhJD4",
            language: "en",
          }}
          defaultZoom={14}
          defaultCenter={GAINESVILLE}
        >
          {places.map((place) => (
            <Marker
              key={place.report_number.toString()}
              text={`${place.city} ${place.county}`}
              lat={place.latitude}
              lng={place.longitude}
            />
          ))}
        </GoogleMapReact>
      </SubWrapper1>
      <SubWrapper2>
        <div className="box3">
          <h3>Crash event occurrence counts by city</h3>
        </div>
        <Information places={places}></Information>
        <SubWrapper3>
          <div className="box4">
            <h3>Crash event severity</h3>
          </div>
          <div className="box5">
            <img src={logo} alt="logo" className="login-img" />
          </div>
        </SubWrapper3>
      </SubWrapper2>
    </Wrapper>
  );
};

export default App;
