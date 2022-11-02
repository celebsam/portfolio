import Link from "next/link";
import React from "react";
import styles from "../../styles/Header.module.scss";
import Image from "next/image";

const Header = ({ scrollHandler }) => (
  <header className={styles.headerWrapper}>
    <div className={styles.headerContainer}>
      <div>
        <Link href="/">
          <a className={styles.logoText}>
            Samuel Green
            {/* <Image src="/sam-logo.png" width={130} height={130} alt="logo" /> */}
          </a>
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li onClick={() => scrollHandler("home")}>
          <p>Home</p>
        </li>
        <li onClick={() => scrollHandler("work")}>
          <p>My Works</p>
        </li>
        <li onClick={() => scrollHandler("skill")}>
          <p>My Skills</p>
        </li>
        <li onClick={() => scrollHandler("about")}>
          <p>About Me</p>
        </li>
        <li className={styles.contact} onClick={() => scrollHandler("contact")}>
          <p>Contact Me</p>
        </li>
      </ul>
      <div className={styles.socialContainer}>
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
    </div>
  </header>
);

export default Header;
