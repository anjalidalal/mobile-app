import React from "react";
import { useRef, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

const SwipeDown = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      console.log("Button clicked");
    };

    const element = ref.current;

    element.addEventListener("click", handleClick);

    return () => {
      element.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <Header />
      <div>
        <button ref={ref}>Click</button>
      </div>
      <Footer />
    </>
  );
};

export default SwipeDown;
