import React from "react";
import scroll from "../assets/images/scroll.svg";

export default function Landing() {
  return (
    <div className="landing">
      <div className="landing__content">
        <img className="landing__content__scroll" src={scroll} alt="" />
        <h1>SS</h1>
        <h4>Portfolio</h4>
      </div>
    </div>
  );
}
