import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our newsletter to receive book announcment.
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">About Library</Link>
            <Link to="/">Sitemap</Link>
            <Link to="/">Policies</Link>
            <Link to="/">Careers</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Phone: 3242423</Link>
            <Link to="/">E-mail: library@example.com</Link>
            <Link to="/">Address: 123 Main Street, New York, NY 10030</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>News & Info</h2>
            <Link to="/">At vero eos </Link>
            <Link to="/">Et harum quidem</Link>
            <Link to="/">Nam libero tempore</Link>
            <Link to="/">Itaque earum rerum</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Facebook</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Library <i className="fas fa-book-open"></i>
            </Link>
          </div>

          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
      <div class="line"></div>
      <section className="website-rights-pay">
        <div className="website-rights">Copyright © 2022 Library</div>
        <div className="pay-methods">
          <i className="social-icon-link fab fa-cc-paypal"></i>
          <i className="social-icon-link fab fa-cc-visa"></i>
          <i className="social-icon-link fab fa-cc-mastercard"></i>
          <i className="social-icon-link fab fa-google-play"></i>
        </div>
      </section>
    </div>
  );
}

export default Footer;
