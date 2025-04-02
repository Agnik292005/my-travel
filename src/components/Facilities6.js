import React from "react";
import img6 from "../assets/egypt.webp";

const Facilities6 = () => {
  return (
    <>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={img6} alt="Avatar"/>
          </div>
          <div class="flip-card-back">
            <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>
              Destination Highlights
            </h1>
            <p style={{ marginTop: "8px" }}>
              Whether you're an adventurer or a history lover, Egypt offers a
              mesmerizing journey through ancient pyramids, vast deserts, and
              the timeless beauty of the Nile River.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities6;
