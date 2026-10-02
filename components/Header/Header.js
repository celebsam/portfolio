import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Header.module.scss";

const Header = ({ scrollHandler }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const showMenuHandler = () => setShowMenu(!showMenu);

  const handleNav = (section) => {
    scrollHandler(section);
    setShowMenu(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", section: "home" },
    { label: "Capabilities", section: "impact" },
    { label: "Experience", section: "experience" },
    { label: "Projects", section: "work" },
    { label: "Skills", section: "skill" },
    { label: "About", section: "about" },
  ];

  return (
    <header className={`${styles.headerWrapper} ${scrolled ? styles.scrolled : ""}`}>
      {/* Top bar — logo + desktop nav + icons */}
      <div className={styles.headerContainer}>
        {/* Logo */}
        <Link href="/">
          <a className={styles.logoText}>Samuel Green</a>
        </Link>

        {/* Desktop nav */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.section} onClick={() => scrollHandler(link.section)}>
              <p>{link.label}</p>
            </li>
          ))}
          <li
            className={styles.contact}
            onClick={() => scrollHandler("contact")}
          >
            <p>Contact Me</p>
          </li>
        </ul>

        {/* Social icons + hamburger */}
        <div className={styles.socialContainer}>
          <a
            href="https://github.com/celebsam"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/samuel-ogbe-green"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <button
            className={styles.hamburger}
            onClick={showMenuHandler}
            aria-label={showMenu ? "Close menu" : "Open menu"}
            aria-expanded={showMenu}
          >
            <i className={showMenu ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
        </div>
      </div>

      {/* Mobile drawer — direct child of header, not inside the max-width container */}
      <div
        className={`${styles.menuContainer} ${showMenu ? styles.menuOpen : ""}`}
        aria-hidden={!showMenu}
      >
        <ul className={styles.menuNavLinks}>
          {navLinks.map((link) => (
            <li key={link.section} onClick={() => handleNav(link.section)}>
              <p>{link.label}</p>
            </li>
          ))}
          <li className={styles.contact} onClick={() => handleNav("contact")}>
            <p>Contact Me</p>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
