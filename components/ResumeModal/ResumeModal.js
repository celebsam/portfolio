import React, { useEffect } from "react";
import styles from "../../styles/ResumeModal.module.scss";

const ResumeModal = ({ isOpen, onClose, pdfUrl }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modalBackdrop" onClick={onClose}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
      >
        <div className={styles.modalHeader}>
          <div className={styles.titleGroup}>
            <h3 id="resume-modal-title">
              📄 Official Resume — Uruemuesiri Samuel Ogbe-Green
            </h3>
            <p>Senior Frontend Engineer · Web & Mobile</p>
          </div>
          <div className={styles.actions}>
            <a
              href={pdfUrl}
              download="Uruemuesiri_Samuel_Ogbe-Green_Resume.pdf"
              className={styles.downloadBtn}
              target="_blank"
              rel="noreferrer"
            >
              📥 Download PDF
            </a>
            <button
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>

        <iframe
          src={`${pdfUrl}#toolbar=1&navpanes=0`}
          title="Uruemuesiri Samuel Ogbe-Green Resume"
          className={styles.pdfFrame}
        />
      </div>
    </div>
  );
};

export default ResumeModal;
