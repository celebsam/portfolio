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
          <Tilt key={project.id}>
            <div className={`${styles.card} ${styles.rgb}`}>
              <Image
                src={project.image}
                width={600}
                height={380}
                alt={project.title}
                objectFit="cover"
              />
              <div className={styles.cardText}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className={styles.btnContainer}>
                {project.access === "private" ? (
                  <button title="Sorry, this is a private repo.">Source</button>
                ) : (
                  <a href={project.source} target="_blank" rel="noreferrer">
                    Source
                  </a>
                )}
                <a href={project.visit} target="_blank" rel="noreferrer">
                  Demo
                </a>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default MyWorks;
