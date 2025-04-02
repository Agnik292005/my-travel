import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AboutDetails.css";
import member1 from "../assets/member1.jpeg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import worldImg from "../assets/boat.jpg";

const AboutDetails = () => {
  // Animated Counters
  const [destinations, setDestinations] = useState(0);
  const [flights, setFlights] = useState(0);
  const [travelers, setTravelers] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (destinations < 50) setDestinations(destinations + 1);
      if (flights < 2000) setFlights(flights + 20);
      if (travelers < 5000) setTravelers(travelers + 50);
    }, 50);
    return () => clearInterval(interval);
  }, [destinations, flights, travelers]);

  return (
    <section className="about-details">
      <div className="about-header">
        <h1>Discover More About Voyago</h1>
        <p>Your trusted travel partner for unforgettable experiences.</p>
      </div>

      {/* Stats Section */}
      <div className="about-stats">
        <div className="stat">
          <h2>{destinations}+</h2>
          <p>Destinations Worldwide</p>
        </div>
        <div className="stat">
          <h2>{flights}+</h2>
          <p>Flights Booked</p>
        </div>
        <div className="stat">
          <h2>{travelers}+</h2>
          <p>Happy Travelers</p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="about-grid">
        <div className="about-box">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>🌍 50+ Global Destinations</li>
            <li>💰 Affordable Travel Packages</li>
            <li>✈️ Hassle-Free Booking</li>
            <li>📞 24/7 Support</li>
          </ul>
        </div>
        <div className="about-image">
          <img src={worldImg} alt="Travel the world" />
        </div>
      </div>

      {/* Customer Testimonials */}
      <div className="about-testimonials">
        <h2>What Our Travelers Say</h2>
        <div className="testimonial">
          <blockquote>
            "Voyago planned my honeymoon perfectly! Every detail was flawless."
            <br /> - <strong>Emily R.</strong>
          </blockquote>
        </div>
        <div className="testimonial">
          <blockquote>
            "The best experience ever! Everything was seamless."
            <br /> - <strong>John T.</strong>
          </blockquote>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src={member1} alt="Our Team" />
            <h3>Mark Taylor</h3>
            <p>Travel Coordinator</p>
          </div>
          <div className="team-member">
            <img src={c3} alt="Travel Expert" />
            <h3>Anna Smith</h3>
            <p>Destination Expert</p>
          </div>
          <div className="team-member">
            <img src={c2} alt="Travel Expert" />
            <h3>Rakesh Mehta</h3>
            <p> Customer Experience Manager</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="about-cta">
        <h2>Ready to Explore?</h2>
        <p>Join thousands of happy travelers with Voyago.</p>
        <Link to="/Services" className="btn">Plan Your Trip</Link>
      </div>
    </section>
  );
};

export default AboutDetails;

