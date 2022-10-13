import React from "react";
import back from "./images/back.png";
import circle from "./images/circle.png";
import square from "./images/square.png";
import youtube from "./images/youtube.png";
import github from "./images/github.png";
import chrome from "./images/chrome.png";
import mail from "./images/mail.png";

const Footer = () => {
  return (
    <div className="footer-section">
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
      <div className="footer">
        <button>
          <img src={square} width="20px" height="20px" />
        </button>
        <button>
          <img src={circle} width="20px" height="20px" />
        </button>
        <button>
          <img src={back} width="28px" height="28px" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
