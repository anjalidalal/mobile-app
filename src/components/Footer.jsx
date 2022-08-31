import React from "react";
import back from "./images/back.png";
import circle from "./images/circle.png";
import square from "./images/square.png";

const Footer = () => {
  return (
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
  );
};

export default Footer;
