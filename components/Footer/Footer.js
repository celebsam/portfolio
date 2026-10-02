import React from "react";
import styles from "../../styles/Footer.module.scss";

const Footer = ({ scrollHandler }) => {
  const navLinks = [
    { label: "Home", section: "home" },
    { label: "Experience", section: "experience" },
    { label: "Projects", section: "work" },
    { label: "Skills", section: "skill" },
    { label: "About", section: "about" },
    { label: "Contact", section: "contact" },
  ];

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerInner}>
        <div className={styles.brand}>
          <h3>Samuel Ogbe-Green</h3>
          <p>Senior Frontend Engineer building fast, accessible, and user-centred web experiences.</p>
        </div>

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.section} onClick={() => scrollHandler(link.section)}>
              {link.label}
            </li>
          ))}
        </ul>

        <div className={styles.socials}>
          <a href="https://github.com/celebsam" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/samuel-ogbe-green" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:samuelogbe0@gmail.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://wa.me/2347063979371" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          &copy; {new Date().getFullYear()} Samuel Ogbe-Green &mdash; Built
          with Next.js &amp; SCSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
