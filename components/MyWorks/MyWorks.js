import React, { useEffect } from "react";
import styles from "../../styles/MyWorks.module.scss";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { projects } from "../../utils/data";
import Aos from "aos";

const MyWorks = ({ workRef }) => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <section className={styles.myWorksContainer} ref={workRef}>
      <h2>My Works</h2>
      <div className={styles.myWorksCardContainer} data-aos="fade-up">
        {projects.map((project) => (
          <Tilt
            key={project.id}
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            glareEnable={false}
          >
            <div className={`${styles.card} ${styles.rgb}`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  width={600}
                  height={340}
                  alt={project.title}
                  objectFit="cover"
                />
                {project.type === "app" && (
                  <span className={styles.badge}>Mobile App</span>
                )}
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardText}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className={styles.tagsRow}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.btnContainer}>
                  {project.access === "private" ? (
                    <button
                      className={styles.disabledBtn}
                      title="Sorry, this is a private repo."
                      disabled
                    >
                      Source
                    </button>
                  ) : (
                    <a href={project.source} target="_blank" rel="noreferrer">
                      Source
                    </a>
                  )}
                  <a href={project.visit} target="_blank" rel="noreferrer">
                    {project.type === "app" ? "Play Store" : "Live Demo"}
                  </a>
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default MyWorks;
