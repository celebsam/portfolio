import React, { useEffect } from "react";
import styles from "../../styles/MySkills.module.scss";
import { skillsGrouped } from "../../utils/data";
import Aos from "aos";

const MySkills = ({ skillRef }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles.mySkillsContainer} ref={skillRef}>
      <h2>Core Technical Skills &amp; AI Tooling</h2>
      <p className="sectionSubtitle">
        Comprehensive expertise across modern web &amp; mobile frameworks, performance engineering, WordPress custom development, and AI tools.
      </p>

      <div className={styles.skillsGrid}>
        {skillsGrouped.map((group, idx) => (
          <div
            key={group.category}
            className={styles.skillBlock}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div className={styles.blockHeader}>
              <span className={styles.blockIcon}>{group.icon}</span>
              <h3>{group.category}</h3>
            </div>
            <div className={styles.chipsRow}>
              {group.items.map((skill) => (
                <div key={skill.name} className={styles.skillChip}>
                  <div className={styles.left}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={skill.icon} alt={skill.name} width={20} height={20} />
                    <span>{skill.name}</span>
                  </div>
                  <span className={styles.levelBadge}>{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
