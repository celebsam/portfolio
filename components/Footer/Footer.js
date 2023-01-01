import React from "react";
import styles from "../../styles/Footer.module.scss";

const Footer = ({ scrollHandler }) => {
  return (
    <footer className={styles.footerContainer}>
      <h3>Samuel Green</h3>
      <ul className={styles.links}>
        <li onClick={() => scrollHandler("home")}>Home</li>
        <li onClick={() => scrollHandler("work")}>My Works</li>
        <li onClick={() => scrollHandler("skill")}>My Skills</li>
        <li onClick={() => scrollHandler("about")}>About Me</li>
        <li onClick={() => scrollHandler("contact")}>Contact Me</li>
      </ul>
      <div className={styles.socials}>
        <a href="https://github.com/celebsam" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>{" "}
        </a>
        <a
          href="https://linkedin.com/in/samuel-ogbe-green"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>{" "}
        </a>
      </div>
      <p>&copy;{new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
