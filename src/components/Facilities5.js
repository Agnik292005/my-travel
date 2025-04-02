import React from "react";
import img5 from "../assets/italy.webp";

const Facilities5 = () => {
  return (
    <>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={img5} alt="Avatar" />
          </div>
          <div class="flip-card-back">
            <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>
              Destination Highlights
            </h1>
            <p style={{ marginTop: "8px" }}>
              Whether you're a history enthusiast or a food lover, Italy offers
              a perfect blend of ancient wonders, breathtaking landscapes, and
              world-renowned cuisine.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities5;
