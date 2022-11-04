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
                alt="Samuel Ogbe-Green, a frontend web developer"
                objectFit="cover"
                data-aos="fade-right"
              />
            </div>
          </div>
        </aside>
        <div className={styles.textContainer} data-aos="fade-up">
          <h3>Hello, I&#39;m Samuel,</h3>
          <p>
            I am a frontend developer passionate about developing solutions
            using the best tools and best practices to deliver amazing UI&#39;s
            and UX. I am enthusiastic about UI effects, animations and designing
            dynamic user experiences. I enjoy creating things that live on the
            web and with every line of code I strive to make it a wonderful
            experience.
            <br />
            <br />I bring lovely designs, be it on figma or any web design tool
            to life. My main area of expertise is frontend development, HTML,
            CSS, JavaScript, building small and medium web apps, but I can also
            role up my sleeves and get comfortable with some backend codes,
            creating RESTful API&#39;s and storing informations in mongoDB.
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
