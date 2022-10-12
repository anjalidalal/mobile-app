import React, { useEffect } from "react";

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
      <div className="notifications-shade"></div>
    </>
  );
};

export default Notification;
