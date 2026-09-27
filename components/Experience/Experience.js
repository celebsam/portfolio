import React, { useEffect } from "react";
import styles from "../../styles/Experience.module.scss";
import { experiences } from "../../utils/data";
import Aos from "aos";

const Experience = ({ experienceRef }) => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <section className={styles.experienceContainer} ref={experienceRef}>
      <h2>Experience</h2>
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
                <div>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <p className={styles.company}>
                    <span>{exp.company}</span>
                    <span className={styles.separator}>·</span>
                    <span className={styles.type}>{exp.type}</span>
                  </p>
                </div>
                <div className={styles.meta}>
                  <span className={styles.period}>{exp.period}</span>
                  <span className={styles.location}>
                    <i className="fas fa-map-marker-alt"></i> {exp.location}
                  </span>
                </div>
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
        <div className={styles.timelineLine} />
      </div>
    </section>
  );
};

export default Experience;
