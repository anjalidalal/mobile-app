import React from "react";
import back from "./images/back.png";
import circle from "./images/circle.png";
import square from "./images/square.png";

const Footer = () => {
  return (
    <div className="footer">
      <button>
        <img src={square} />
      </button>
      <button>
        <img src={circle} />
      </button>
      <button>
        <img src={back} />
      </button>
    </div>
  );
};

export default Footer;
