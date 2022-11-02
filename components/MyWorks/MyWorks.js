import React from "react";
import styles from "../../styles/MyWorks.module.scss";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { projects } from "../../utils/data";

const MyWorks = ({ workRef }) => {
  return (
    <section className={styles.myWorksContainer} ref={workRef}>
      <h2>My Works</h2>
      <div className={styles.myWorksCardContainer}>
        {projects.map((project) => (
          <Tilt key={project.id}>
            <div className={`${styles.card} ${styles.rgb}`}>
              <Image
                src={project.image}
                width={600}
                height={380}
                alt="project"
                objectFit="cover"
              />
              <div className={styles.cardText}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className={styles.btnContainer}>
                <button>source code</button>
                <button>Demo</button>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default MyWorks;
