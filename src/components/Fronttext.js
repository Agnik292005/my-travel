import React from "react";
import "./fronttextStyles.css";
import heroImage from "../assets/hero.jpg"; // Change to your image name

function Fronttext() {
  return (
    <div
      className="front"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay">
        <h1>Tours & Travels</h1>
      </div>
    </div>
  );
}

export default Fronttext;
