import React, { useState, useEffect } from "react";
import styles from "../../styles/MyWorks.module.scss";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { projects } from "../../utils/data";
import CaseStudyModal from "../CaseStudyModal/CaseStudyModal";
import Aos from "aos";

const MyWorks = ({ workRef }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Platforms" },
    { id: "app", label: "Mobile Apps" },
    { id: "wordpress", label: "WordPress & CMS" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className={styles.myWorksContainer} ref={workRef}>
      <h2>Featured Engineering Projects</h2>
      <p className="sectionSubtitle">
        Production applications, mobile apps, and scalable web platforms showcasing performance optimization, ISR, and state architecture.
      </p>

      <div className={styles.filterRow}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.filterBtn} ${
              activeCategory === cat.id ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className={styles.myWorksCardContainer}>
        {filteredProjects.map((project) => (
          <Tilt
            key={project.id}
            tiltMaxAngleX={4}
            tiltMaxAngleY={4}
            glareEnable={false}
            style={{ display: "flex" }}
          >
            <div className={styles.card} data-aos="fade-up">
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  width={600}
                  height={340}
                  alt={project.title}
                  objectFit="cover"
                />
                <span className={styles.badge}>
                  {project.type === "app" ? "Mobile App" : "Web Platform"}
                </span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardText}>
                  <h3>{project.title}</h3>
                  <p className={styles.subtitle}>{project.subtitle}</p>
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
                  <button
                    className={styles.caseStudyBtn}
                    onClick={() => setSelectedProject(project)}
                  >
                    View Case Study
                  </button>
                  <a
                    href={project.visit}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.linkBtn}
                    aria-label={`Visit ${project.title}`}
                  >
                    🔗
                  </a>
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default MyWorks;
