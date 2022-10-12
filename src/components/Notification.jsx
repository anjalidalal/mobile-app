import React, { useEffect } from "react";
import googleplay from "./images/googleplay.png";
import github from "./images/github.png";
import drive from "./images/drive.png";
import linkedin from "./images/linkedin.png";
import googlemaps from "./images/googlemaps.png";
import whatsapp from "./images/whatsapp.png";
import phone from "./images/phone.png";
import twitter from "./images/twitter.png";
import facebook from "./images/facebook.png";
import youtube from "./images/youtube.png";
import chrome from "./images/chrome.png";
import mail from "./images/mail.png";

const Notification = () => {
  useEffect(() => {
    const topNav = document.querySelector(".top-nav");
    const notificationsShade = document.querySelector(".notifications-shade");

    let touchStartPos = 0;
    let lastTouchPos = 0;

    topNav.addEventListener("touchstart", (e) => {
      touchStartPos = e.touches[0].clientY;
      lastTouchPos = e.touches[0].clientY;
    });
    topNav.addEventListener("touchmove", (e) => {
      lastTouchPos = e.touches[0].clientY;
      const diff = lastTouchPos - touchStartPos;

      if (diff < 232) {
        notificationsShade.style.transform = `translateY(${-232 + diff}px)`;
      } else {
        notificationsShade.classList.add("new-styles-downward");
      }
    });
    topNav.addEventListener("touchend", () => {
      const diff = lastTouchPos - touchStartPos;

      notificationsShade.classList.add("transition");

      if (diff > 100) {
        notificationsShade.style.transform = `translateY(0px)`;
      } else {
        notificationsShade.style.transform = `translateY(-232px)`;
      }
    });
    notificationsShade.addEventListener("touchstart", (e) => {
      touchStartPos = e.touches[0].clientY;
      lastTouchPos = e.touches[0].clientY;
    });
    notificationsShade.addEventListener("touchmove", (e) => {
      lastTouchPos = e.touches[0].clientY;
      const diff = lastTouchPos - touchStartPos;

      notificationsShade.style.transform = `translateY(${-232 - diff}px)`;
    });
    notificationsShade.addEventListener("touchend", () => {
      const diff = lastTouchPos - touchStartPos;

      console.log(diff);
      if (diff < -21) {
        notificationsShade.style.transform = `translateY(-232px)`;
      } else {
        notificationsShade.style.transform = `translateY(0px)`;
      }
    });
  });
  return (
    <>
      <div className="top-nav"></div>
      <div className="notifications-shade">
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
          <img src={facebook} />
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
        <div className="icons">
          <img src={mail} />
        </div>
        <div className="icons">
          <img src={youtube} />
        </div>
        <div className="icons">
          <img src={chrome} />
        </div>
      </div>
    </>
  );
};

export default Notification;
