import React from "react";
import img2 from "../assets/peak.jpg";

const Facilities3 = () => {
  return (
    <>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={img2} alt="Avatar" />
          </div>
          <div class="flip-card-back">
            <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>
              Destination Highlights
            </h1>
            <p style={{ marginTop: "8px" }}>
              Whether you're a thrill-seeker or a nature lover, Switzerland
              offers an abundance of outdoor activities
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities3;
