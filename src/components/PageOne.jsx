import React from "react";
import youtube from "./images/youtube.png";
import github from "./images/github.png";
import chrome from "./images/chrome.png";
import mail from "./images/mail.png";
import google from "./images/google.png";
import mic from "./images/mic.png";
import Footer from "./Footer";
import Header from "./Header";

const PageOne = () => {
  return (
    <>
      <Header />
      <div className="google">
        <img src={google} width="29px" height="29px" />
        <img src={mic} width="30px" height="30px" />
      </div>
      <div className="frontpage-apps">
        <div className="icons">
          <img src={mail} />
        </div>
        <div className="icons">
          <img src={youtube} />
        </div>
        <div className="icons">
          <img src={github} />
        </div>
        <div className="icons">
          <img src={chrome} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageOne;
