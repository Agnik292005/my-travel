import React from "react";
import { Link } from "react-router-dom";
import "./WelcomStyle.css";
import img1 from "../assets/img-9.jpg";
import bgImage from "../assets/travels.jpg";


const Welcom = () => {
  return (
    <section className="about-section">
      {/* Background Parallax Effect */}
      <div
        className="parallax"
        style={{ backgroundImage: `url(${bgImage})` }} 
      ></div>


      <div className="about-container">
        {/* Left: Image */}
        <div className="about-img">
          <img src={img1} alt="Travel" />
        </div>

        {/* Right: Content */}
        <div className="about-content">
          <h1 className="about-title">Welcome to Voyago!</h1>
          <p className="about-text">
            At Voyago, we turn your travel dreams into reality! Whether you're
            seeking luxurious escapes, cultural immersions, or breathtaking
            adventures, we curate exceptional experiences tailored just for you.
          </p>

          <ul className="about-list">
            <li>✅ 24/7 Travel Support</li>
            <li>✅ Handpicked Destinations</li>
            <li>✅ Affordable Packages</li>
            <li>✅ Hassle-Free Booking</li>
          </ul>

          {/* Discover More Button */}
          <Link to="/about/discovermore" className="btn">
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Welcom;
