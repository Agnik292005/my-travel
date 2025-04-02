import React from "react";
import img1 from "../assets/bahamas.jpg";

const Facilities1 = () => {
  return (
    <>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={img1} alt="Avatar" />
          </div>
          <div class="flip-card-back">
            <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>
              Destination Highlights
            </h1>
            <p style={{ marginTop: "8px" }}>
              Whether you're a beach lover or an adventure seeker, the Bahamas
              offers a perfect blend of pristine shores, vibrant marine life,
              and exciting water activities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities1;
