import React from "react";
import "../assets/css/nav-footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <span className="site-name">Next Byte</span>
            <div className="category-links">
              <button type="button" className="footer-link" aria-label="Instagram">Instagram</button>
              <span>|</span>
              <button type="button" className="footer-link" aria-label="Facebook">Facebook</button>
            </div>
          </div>

          <div className="footer-right">
            <p>Mantente al día y únete a nuestro Newsletter.</p>
            <div className="newsletter-signup">
              <input type="email" placeholder="Tu correo" className="email-input" />
              <button className="subscribe-btn">Suscríbete</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
