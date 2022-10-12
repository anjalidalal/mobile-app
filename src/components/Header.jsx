import React, { useEffect } from "react";
import bluetooth from "./images/bluetooth.png";
import signal from "./images/signal.png";
import wifi from "./images/wifi.png";
import battery from "./images/battery.png";

const Header = () => {
  useEffect(() => {
    
  })
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

// const topNav = document.querySelector(".top-nav");
//         const notificationsShade = document.querySelector(".notifications-shade");

//         let touchStartPos = 0;
//         let lastTouchPos = 0;

//         topNav.addEventListener("touchstart", (e) => {
//             touchStartPos = e.touches[0].clientY;
//             lastTouchPos = e.touches[0].clientY;
//         })
//         topNav.addEventListener("touchmove", (e) => {
//             lastTouchPos = e.touches[0].clientY;
//             const diff = lastTouchPos - touchStartPos;

//             if (diff < 232) {
//                 notificationsShade.style.transform = `translateY(${-232 + diff}px)`;
//             } else {
//                 notificationsShade.classList.add("new-styles-downward");
//             }

//         })
//         topNav.addEventListener("touchend", () => {
//             const diff = lastTouchPos - touchStartPos;

//             notificationsShade.classList.add("transition");

//             if (diff > 100) {
//                 notificationsShade.style.transform = `translateY(0px)`;
//             }
//             else {
//                 notificationsShade.style.transform = `translateY(-232px)`;
//             }
//         })
//         notificationsShade.addEventListener("touchstart", (e) => {
//             touchStartPos = e.touches[0].clientY;
//             lastTouchPos = e.touches[0].clientY;
//         })
//         notificationsShade.addEventListener("touchmove", (e) => {
//             lastTouchPos = e.touches[0].clientY;
//             const diff = lastTouchPos - touchStartPos;

//             notificationsShade.style.transform = `translateY(${-232 - diff}px)`;

//         })
//         notificationsShade.addEventListener("touchend", () => {
//             const diff = lastTouchPos - touchStartPos;

//             console.log(diff)
//             if (diff < -21) {
//                 notificationsShade.style.transform = `translateY(-232px)`;
//             } else {
//                 notificationsShade.style.transform = `translateY(0px)`;
//             }
//         })
