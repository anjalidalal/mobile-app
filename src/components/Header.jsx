import React from "react";
import bluetooth from "./images/bluetooth.png";
import signal from "./images/signal.png";
import wifi from "./images/wifi.png";
import battery from "./images/battery.png";

const Header = () => {
  return (
    <div className="header">
      <img src={bluetooth} width="16px" height="16px" />
      <img src={signal} width="18px" height="18px" />
      <img src={wifi} width="18px" height="18px" />
      <img src={battery} width="20px" height="20px" />
    </div>
  );
};

export default Header;
