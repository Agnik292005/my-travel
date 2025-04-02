import React from "react";
import img4 from "../assets/tajmahal.jpeg";

const Facilities4 = () => {
  return (
    <>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={img4} alt="Avatar" />
          </div>
          <div class="flip-card-back">
            <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>
              Destination Highlights
            </h1>
            <p style={{ marginTop: "8px" }}>
              Whether you're a history enthusiast or a nature lover, India
              offers a diverse range of experiences, from exploring ancient
              heritage sites to immersing yourself in breathtaking landscapes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities4;
