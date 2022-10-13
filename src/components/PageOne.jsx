import React from "react";
import google from "./images/google.png";
import mic from "./images/mic.png";
import weather from "./images/weather.png";
import Footer from "./Footer";
import Header from "./Header";
import Notification from "./Notification";

const PageOne = () => {
  return (
    <div className="page-one">
      <Notification />
      <Header />
      <div className="google">
        <img src={google} width="29px" height="29px" />
        <img src={mic} width="30px" height="30px" />
      </div>
      <div className="time-weather">
        <div className="time">
          <h3>9:37</h3>
          <p>Fri, Sep 2</p>
        </div>
        <div className="weather">
          <img src={weather} />
          <p>Cloudy 32°C</p>
          <p>AQI 88</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageOne;
