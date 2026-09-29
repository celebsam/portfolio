import React, { useRef, useState, useEffect } from "react";
import styles from "../../styles/ContactMe.module.scss";
import Aos from "aos";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { personalDetails } from "../../utils/data";

const socials = [
  {
    icon: "fas fa-envelope",
    label: "Email",
    value: personalDetails.email,
    sub: "Direct email contact",
    href: `mailto:${personalDetails.email}`,
    external: false,
  },
  {
    icon: "fab fa-linkedin",
    label: "LinkedIn",
    value: "in/samuel-ogbe-green",
    sub: "Connect professionally",
    href: personalDetails.linkedin,
    external: true,
  },
  {
    icon: "fab fa-github",
    label: "GitHub",
    value: "github.com/celebsam",
    sub: "Inspect code repositories",
    href: personalDetails.github,
    external: true,
  },
  {
    icon: "fab fa-whatsapp",
    label: "WhatsApp / Phone",
    value: personalDetails.phone,
    sub: "Send a message",
    href: `https://wa.me/${personalDetails.phone.replace(/[^0-9]/g, "")}`,
    external: true,
  },
];

const ContactMe = ({ contactRef }) => {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_vadehqp",
        "template_4vrjglh",
        form.current,
        "gIC6NPRXchz6Fvu1w"
      )
      .then(
        () => {
          toast.success("Message sent successfully! I will reply shortly.");
          e.target.reset();
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Failed to send message. Please try emailing directly.");
        }
      );
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles.contactMeContainer} ref={contactRef}>
      <h2>Let&#39;s Work Together</h2>
      <p className="sectionSubtitle">
        Open for senior engineering roles, high-impact contract projects, and architecture consultations.
      </p>

      <div className={styles.contactMeGrid}>
        <div className={styles.socialsContainer} data-aos="fade-right">
          {socials.map((s) => (
            <div key={s.label} className={styles.socialCard}>
              <a
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noreferrer" : undefined}
              >
                <div className={styles.iconBox}>
                  <i className={s.icon}></i>
                </div>
                <div className={styles.cardInfo}>
                  <span className={styles.label}>{s.label}</span>
                  <span className={styles.val}>{s.value}</span>
                  <span className={styles.sub}>{s.sub} →</span>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className={styles.formBox} data-aos="fade-left">
          <form ref={form} onSubmit={sendEmail}>
            <div className={styles.inputGroup}>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="e.g. Sarah Jenkins"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="e.g. sarah@company.com"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Senior Frontend Opportunity"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="Hi Samuel, I'd like to discuss an engineering opportunity..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading}
            >
              {loading ? "Sending Message..." : "🚀 Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
