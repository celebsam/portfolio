import React, { useEffect } from "react";
import styles from "../../styles/AboutMe.module.scss";
import Image from "next/image";
import Aos from "aos";

const AboutMe = ({ aboutRef, scrollHandler }) => {
  useEffect(() => {
    Aos.init({ duration: 1900 });
  }, []);
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
                alt="Samuel Green"
                objectFit="cover"
                data-aos="fade-right"
              />
            </div>
          </div>
        </aside>
        <div className={styles.textContainer} data-aos="fade-up">
          <h3>Hello, I&#39;m Samuel,</h3>
          <p>
            I am a frontend developer with over 2 years of working experience.
            Coding has always been my passion. I bring lovely designs be it on
            figma or any web design tool to live. I am mostly known on the
            frontend but I can also role up my sleeves and get comfortable with
            some backend codes, creating RESTful API&#39;s and storing
            informations in mongoDB.
          </p>
          <div>
            <button onClick={() => scrollHandler("contact")}>Contact Me</button>
            <a href="/Sam Green CV 2022.pdf" download="Samuel Green CV">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
