import React, { useEffect } from "react";
import styles from "../../styles/Testimonials.module.scss";
import { testimonials } from "../../utils/data";
import Aos from "aos";

const Testimonials = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <section className={styles.testimonialsContainer}>
      <h2>What People Say</h2>
      <div className={styles.grid}>
        {testimonials.map((t, index) => (
          <div
            key={t.id}
            className={styles.card}
            data-aos="fade-up"
            data-aos-delay={index * 120}
          >
            <div className={styles.quoteIcon}>&ldquo;</div>
            <p className={styles.quote}>{t.quote}</p>
            <div className={styles.author}>
              <div className={styles.avatar}>
                {t.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={t.avatar} alt={t.name} />
                ) : (
                  <span>{t.initials}</span>
                )}
              </div>
              <div className={styles.authorInfo}>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
