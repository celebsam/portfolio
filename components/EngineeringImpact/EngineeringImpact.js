import React, { useEffect } from "react";
import styles from "../../styles/EngineeringImpact.module.scss";
import { engineeringPillars } from "../../utils/data";
import Aos from "aos";

const EngineeringImpact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles.impactSection}>
      <h2>Engineering Strengths &amp; Philosophy</h2>
      <p className="sectionSubtitle">
        Focusing on performance optimization, robust state management, cross-platform mobile app engineering, and high-speed AI workflows.
      </p>

      <div className={styles.grid}>
        {engineeringPillars.map((pillar, index) => (
          <div
            key={pillar.id}
            className={styles.card}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div>
              <span className={styles.icon}>{pillar.icon}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </div>
            <div className={styles.highlights}>
              {pillar.highlights.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EngineeringImpact;
