import React, { useEffect } from "react";
import styles from "../../styles/AboutMe.module.scss";
import Image from "next/image";
import Aos from "aos";

const AboutMe = ({ aboutRef, scrollHandler }) => {
  useEffect(() => {
    Aos.init({ duration: 1900 });
  }, []);

  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "20+", label: "Projects Delivered" },
    { value: "5+", label: "Happy Clients" },
    { value: "2", label: "Mobile Apps Shipped" },
  ];

  return (
    <section className={styles.aboutMeContainer} ref={aboutRef}>
      <h2>About Me</h2>
      <div className={styles.aboutMeGrid}>
        <aside>
          <div className={styles.imageContainer} data-aos="fade-up">
            <div className={styles.backgroundSlant} data-aos="fade-right">
              <Image
                src="/images/IMG_0830.jpeg"
                width={900}
                height={950}
                alt="Samuel Ogbe-Green, Senior Frontend Engineer"
                objectFit="cover"
                data-aos="fade-down"
              />
            </div>
          </div>
        </aside>
        <div className={styles.textContainer} data-aos="fade-up">
          <h3>Hello, I&#39;m Samuel,</h3>
          <p>
            I&#39;m a Senior Frontend Engineer with 4+ years of experience
            building scalable, high-performance web and mobile applications. I
            specialise in React, Next.js, and TypeScript — crafting interfaces
            that are fast, accessible, and a genuine pleasure to use.
          </p>
          <p>
            I&#39;ve shipped production-grade products across e-commerce,
            logistics, and fintech, owning frontend architecture, leading code
            reviews, and mentoring junior developers. I bring Figma designs to
            pixel-perfect life and can hold my own on the backend with Node.js
            and MongoDB when needed.
          </p>

          <div className={styles.statsRow} data-aos="fade-up">
            {stats.map((stat) => (
              <div className={styles.statItem} key={stat.label}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.btnGroup}>
            <button onClick={() => scrollHandler("contact")}>Contact Me</button>
            <a
              href="/Uruemuesiri_Samuel_Ogbe-Green_Resume.pdf"
              download="Samuel_Ogbe-Green_CV"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
