import React, { useEffect } from "react";
import styles from "../../styles/MySkills.module.scss";
import Aos from "aos";

const skills = {
  frontend: [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3 / SASS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  ],
  tools: [
    { name: "Git / GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  ],
};

const SkillCard = ({ name, icon }) => (
  <div className={styles.skillChip}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={icon} alt={name} width={22} height={22} />
    <span>{name}</span>
  </div>
);

const MySkills = ({ skillRef }) => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <section className={styles.mySkillsContainer} ref={skillRef}>
      <h2>My Skills</h2>
      <div className={styles.skillsGrid}>
        <div className={styles.skillBlock} data-aos="fade-right">
          <div className={styles.blockHeader}>
            <span className={styles.blockIcon}>&#128187;</span>
            <h3>Frontend</h3>
          </div>
          <div className={styles.chipsRow}>
            {skills.frontend.map((s) => (
              <SkillCard key={s.name} {...s} />
            ))}
          </div>
        </div>

        <div className={styles.skillBlock} data-aos="fade-up">
          <div className={styles.blockHeader}>
            <span className={styles.blockIcon}>&#9881;&#65039;</span>
            <h3>Backend</h3>
          </div>
          <div className={styles.chipsRow}>
            {skills.backend.map((s) => (
              <SkillCard key={s.name} {...s} />
            ))}
          </div>
        </div>

        <div className={styles.skillBlock} data-aos="fade-left">
          <div className={styles.blockHeader}>
            <span className={styles.blockIcon}>&#128295;</span>
            <h3>Tools &amp; Workflow</h3>
          </div>
          <div className={styles.chipsRow}>
            {skills.tools.map((s) => (
              <SkillCard key={s.name} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
