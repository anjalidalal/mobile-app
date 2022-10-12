import React from "react";
import googleplay from "./images/googleplay.png";
import github from "./images/github.png";
import drive from "./images/drive.png";
import linkedin from "./images/linkedin.png";
import googlemaps from "./images/googlemaps.png";
import whatsapp from "./images/whatsapp.png";
import phone from "./images/phone.png";
import twitter from "./images/twitter.png";
import Header from "./Header";
import Footer from "./Footer";

const PageTwo = () => {
  return (
    <div className="page-two">
      <Header />
      <div className="icons">
        <img src={googlemaps} width="29px" height="29px" />
      </div>
      <div className="icons">
        <img src={googleplay} width="30px" height="30px" />
      </div>
      <div className="icons">
        <img src={phone} />
      </div>
      <div className="icons">
        <img src={drive} />
      </div>
      <div className="icons">
        <img src={twitter} />
      </div>
      <div className="icons">
        <img src={linkedin} />
      </div>
      <div className="icons">
        <img src={github} />
      </div>
      <div className="icons">
        <img src={whatsapp} />
      </div>
      <Footer />
    </div>
  );
};

export default PageTwo;
