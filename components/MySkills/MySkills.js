import React from "react";
import styles from "../../styles/MySkills.module.scss";

const MySkills = ({ skillRef }) => {
  return (
    <section className={styles.mySkillsContainer} ref={skillRef}>
      <h2>My Skills</h2>
      <div className={styles.mySkillsCardContainer}>
        <div className={styles.frontend}>
          <h3>Frontend Development</h3>
          <ul>
            <li>
              <i className="fa fa-check-circle"></i> HTML
            </li>
            <li>
              <i className="fa fa-check-circle"></i> CSS / SASS
            </li>
            <li>
              <i className="fa fa-check-circle"></i> JavaScript
            </li>
            <li>
              <i className="fa fa-check-circle"></i> React / Next JS
            </li>
            <li>
              <i className="fa fa-check-circle"></i> React Native
            </li>
          </ul>
        </div>
        <div className={styles.backend}>
          <h3>Backend Development</h3>
          <ul>
            <li>
              <i className="fa fa-check-circle"></i> Node JS
            </li>
            <li>
              <i className="fa fa-check-circle"></i> MongoDB / Mongoose
            </li>
            <li>
              <i className="fa fa-check-circle"></i> Express JS
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
