import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./FooterStyle.css";

function Footer() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      email: email,
    };

    emailjs
      .send(
        "service_ymlkkio",
        "template_h6xudak",
        templateParams,
        "gRWG_fO8Mw7kx4FZl"
      )
      .then(
        (response) => {
          alert("Email sent successfully!");
        },
        (error) => {
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div className="main">
      <div className="heading">
        <div>
          <h3>Quick Links</h3>
          <p>About Us</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Help</p>
          <p>Rooms</p>
        </div>
        <div>
          <h3>Support</h3>
          <p>Our Location</p>
          <p>The Hosts</p>
          <p>About</p>
          <p>Contact</p>
          <p>Restaurant</p>
        </div>

        <div>
          <h3>Contact Info</h3>
          <h6>Address:</h6>
          <p>Jakkur Plantation Road, Jakkur</p>
          <p>Bangalore-102983</p>
          <h6>Phone:</h6>
          <p>9380179471</p>
          <h6>Email:</h6>
          <p>voyago@tour.com</p>
        </div>
        <div>
          <h3>Subscribe</h3>
          <p>Sign up for our newsletter</p>
          <form id="emailForm" onSubmit={handleSubmit}>
            <input
              type="email"
              id="emailInput"
              placeholder="Your email..."
              value={email}
              onChange={handleEmailChange}
              required
              className="email-input"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="bottom">
        <div className="her">
          <hr />
        </div>
        <p>Agnik Patra 23BAI0001 © All rights reserved</p>
        <div className="socialmediaicons">
          <div>
            <i className="fa-brands fa-facebook-square"></i>
          </div>
          <div>
            <i className="fa-brands fa-twitter-square"></i>
          </div>
          <div>
            <i className="fa-brands fa-instagram-square"></i>
          </div>
          <div>
            <i className="fa-brands fa-youtube-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
