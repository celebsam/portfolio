import React, { useState, useEffect } from "react";
import styles from "../../styles/AboutMe.module.scss";
import Image from "next/image";
import { personalDetails, stats } from "../../utils/data";
import ResumeModal from "../ResumeModal/ResumeModal";
import Aos from "aos";

const AboutMe = ({ aboutRef, scrollHandler }) => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles.aboutMeContainer} ref={aboutRef}>
      <h2>About Me</h2>
      <p className="sectionSubtitle">
        Passionate about crafting pixel-perfect, accessible interfaces, state architecture, and AI-accelerated workflows.
      </p>

      <div className={styles.aboutMeGrid}>
        <div className={styles.imageContainer} data-aos="fade-right">
          <div className={styles.imageCard}>
            <Image
              src="/images/IMG_0830.jpeg"
              width={420}
              height={480}
              alt="Uruemuesiri Samuel Ogbe-Green"
              objectFit="cover"
            />
          </div>
          <div className={styles.eduBadge}>
            <span className={styles.icon}>🎓</span>
            <div>
              <div className={styles.title}>B.Sc. Computer Science</div>
              <div className={styles.sub}>Michael Okpara Univ. of Ag.</div>
            </div>
          </div>
        </div>

        <div className={styles.textContainer} data-aos="fade-left">
          <h3>Hello, I&#39;m Samuel Ogbe-Green 👋</h3>
          <p>
            I&#39;m a <strong>Senior Frontend Engineer</strong> with 5+ years of hands-on experience building, maintaining, and optimizing production web and mobile applications across e-commerce, marketplace, and client services.
          </p>
          <p>
            My technical foundation spans <strong>React, Next.js, React Native, TypeScript, and custom WordPress engineering</strong>. I specialize in translating complex Figma wireframes into high-performance web applications with 90+ Lighthouse PageSpeed scores, optimized Core Web Vitals, and smooth cross-browser accessibility.
          </p>
          <p>
            I am also experienced in leveraging modern AI-assisted development tools—including <strong>Antigravity, Lovable, Magic Patterns, and ChatGPT</strong>—to accelerate prototyping, implementation, and debugging while strictly enforcing code quality standards.
          </p>

          <div className={styles.statsRow}>
            {stats.map((stat) => (
              <div className={styles.statItem} key={stat.label}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.btnGroup}>
            <button
              className={styles.contactBtn}
              onClick={() => scrollHandler("contact")}
            >
              Contact Me
            </button>
            <button
              className={styles.resumeViewBtn}
              onClick={() => setIsResumeOpen(true)}
            >
              📄 Preview Resume
            </button>
            <a
              href={personalDetails.resumeUrl}
              download="Uruemuesiri_Samuel_Ogbe-Green_Resume.pdf"
              className={styles.downloadBtn}
              target="_blank"
              rel="noreferrer"
            >
              📥 Download PDF
            </a>
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

export default AboutMe;
