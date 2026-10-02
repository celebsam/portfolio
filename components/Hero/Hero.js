import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import styles from "../../styles/Hero.module.scss";
import { personalDetails, stats } from "../../utils/data";
import ResumeModal from "../ResumeModal/ResumeModal";

const Hero = ({ homeRef, scrollHandler }) => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section className={styles.heroContainer} ref={homeRef}>
      <div className={styles.heroLeft}>
        <div className={styles.statusTag}>
          <span className={styles.dot}></span>
          Available for Senior Frontend &amp; Mobile Roles
        </div>

        <h1>
          Hi, I&#39;m <span>{personalDetails.shortName}</span>
        </h1>

        <div className={styles.typedWrapper}>
          <TypeAnimation
            sequence={[
              "Senior Frontend Engineer",
              2200,
              "React & Next.js Architect",
              2200,
              "React Native Mobile Specialist",
              2200,
              "WordPress & Core Web Vitals Expert",
              2200,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className={styles.description}>
          Frontend Engineer with <strong>5+ years</strong> of experience building, maintaining, and optimizing production web and mobile applications across e-commerce, marketplace, and SaaS products. Specialist in React, Next.js, React Native, TypeScript, and custom WordPress engineering.
        </p>

        <div className={styles.ctaGroup}>
          <button
            className={styles.primaryBtn}
            onClick={() => scrollHandler("work")}
          >
            Explore My Works
          </button>
          <button
            className={styles.resumeBtn}
            onClick={() => setIsResumeOpen(true)}
          >
            📄 View Resume
          </button>
        </div>

        <div className={styles.statsBar}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.val}>{s.value}</span>
              <span className={styles.lbl}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.heroRight}>
        <div className={styles.avatarWrapper}>
          <div className={styles.imgContainer}>
            <Image
              src="/images/IMG_0830.jpeg"
              alt="Uruemuesiri Samuel Ogbe-Green"
              width={450}
              height={450}
              priority
            />
          </div>
        </div>
      </div>

      {/* Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        pdfUrl={personalDetails.resumeUrl}
      />
    </section>
  );
};

export default Hero;
