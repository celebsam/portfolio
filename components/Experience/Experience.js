import React, { useEffect } from "react";
import styles from "../../styles/Experience.module.scss";
import { experiences } from "../../utils/data";
import Aos from "aos";

const Experience = ({ experienceRef }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles.experienceContainer} ref={experienceRef}>
      <h2>Professional Experience</h2>
      <p className="sectionSubtitle">
        A track record of building performant web &amp; mobile apps, migrating legacy stacks, and optimizing Core Web Vitals.
      </p>

      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`${styles.timelineItem} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div className={styles.timelineDot} />
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.role}>{exp.role}</h3>
                <div className={styles.company}>
                  <span>{exp.company}</span>
                  <span className={styles.separator}>·</span>
                  <span className={styles.location}>📍 {exp.location}</span>
                </div>
                <span className={styles.periodBadge}>{exp.period}</span>
              </div>
              <ul className={styles.bullets}>
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              <div className={styles.tagsRow}>
                {exp.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
