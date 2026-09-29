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
      <div className={styles.headerContainer}>
        {/* Logo */}
        <div>
          <Link href="/">
            <a className={styles.logoText}>Samuel Green</a>
          </Link>
        </div>

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
          <a href="https://github.com/celebsam" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/samuel-ogbe-green" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <span
            className={styles.hamburger}
            onClick={showMenuHandler}
            aria-label="Toggle menu"
            role="button"
          >
            <i className={showMenu ? "fas fa-times" : "fas fa-bars"}></i>
          </span>
        </div>

        {/* Mobile menu */}
        <div className={`${styles.menuContainer} ${showMenu ? styles.active : ""}`}>
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
      </div>
    </header>
  );
};

export default Header;
