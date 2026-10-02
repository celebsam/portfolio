import React, { useEffect } from "react";
import styles from "../../styles/CaseStudyModal.module.scss";

const CaseStudyModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="modalBackdrop" onClick={onClose}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        <div className={styles.modalHeader}>
          <div className={styles.titleGroup}>
            <h3 id="case-study-title">{project.title}</h3>
            <p>{project.subtitle}</p>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        <div className={styles.modalBody}>
          {caseStudy && (
            <div className={styles.metaRow}>
              <div className={styles.metaItem}>
                <span>Role</span>
                <span>{caseStudy.role}</span>
              </div>
              <div className={styles.metaItem}>
                <span>Timeline</span>
                <span>{caseStudy.timeline}</span>
              </div>
              <div className={styles.metaItem}>
                <span>Access</span>
                <span>{project.access === "private" ? "Private Repository" : "Open Source"}</span>
              </div>
            </div>
          )}

          <div className={styles.sectionBlock}>
            <h4>🎯 Overview &amp; Challenge</h4>
            <p>{caseStudy?.problem || project.description}</p>
          </div>

          {caseStudy?.solution && (
            <div className={styles.sectionBlock}>
              <h4>💡 Architectural Solution</h4>
              <p>{caseStudy.solution}</p>
            </div>
          )}

          {caseStudy?.metrics && (
            <div className={styles.sectionBlock}>
              <h4>🚀 Engineering Impact &amp; Metrics</h4>
              <div className={styles.metricsGrid}>
                {caseStudy.metrics.map((metric, i) => (
                  <div key={i} className={styles.metricBadge}>
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className={styles.sectionBlock}>
            <h4>🛠️ Technologies Used</h4>
            <div className={styles.tagsGroup}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.modalFooter}>
          {project.access === "public" && (
            <a
              href={project.source}
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryBtn}
            >
              Source Code
            </a>
          )}
          <a
            href={project.visit}
            target="_blank"
            rel="noreferrer"
            className={styles.primaryBtn}
          >
            {project.type === "app" ? "View on Play Store" : "Visit Live Site"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
