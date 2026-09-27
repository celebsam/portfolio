import React, { useRef, useState, useEffect } from "react";
import styles from "../../styles/ContactMe.module.scss";
import Aos from "aos";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const socials = [
  {
    icon: "fas fa-envelope",
    label: "Email",
    value: "samuelogbe0@gmail.com",
    sub: "Send a message",
    href: "mailto:samuelogbe0@gmail.com",
    external: false,
  },
  {
    icon: "fab fa-linkedin",
    label: "LinkedIn",
    value: "samuel-ogbe-green",
    sub: "Connect with me",
    href: "https://linkedin.com/in/samuel-ogbe-green",
    external: true,
  },
  {
    icon: "fab fa-github",
    label: "GitHub",
    value: "github.com/celebsam",
    sub: "Check my code",
    href: "https://github.com/celebsam",
    external: true,
  },
  {
    icon: "fab fa-whatsapp",
    label: "WhatsApp",
    value: "+234 706 397 9371",
    sub: "Send a message",
    href: "https://wa.me/2347063979371",
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
          toast.success("Message sent. Thanks!");
          e.target.reset();
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          console.log(error);
          toast.error(error.text);
        }
      );
  };

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <section className={styles.contactMeContainer} ref={contactRef}>
      <h2>Contact Me</h2>
      <p className={styles.subHeading}>
        I&#39;m open to new roles, freelance projects, and collaborations.
        Let&#39;s build something great together.
      </p>

      <div className={styles.contactMeGrid}>
        <div className={styles.socialsContainer}>
          {socials.map((s, i) => (
            <div key={s.label} data-aos={i % 2 === 0 ? "fade-up" : "fade-down"}>
              <a
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noreferrer" : undefined}
              >
                <i className={s.icon}></i>
                <p>{s.label}</p>
                <p>{s.value}</p>
                <small>{s.sub}</small>
              </a>
            </div>
          ))}
        </div>

        <div className={styles.formBox} data-aos="fade-up">
          <form ref={form} onSubmit={sendEmail}>
            <div className={styles.inputContainer}>
              <input type="text" name="fullName" id="fullName" required />
              <span>Full Name</span>
              <i></i>
            </div>
            <div className={styles.inputContainer}>
              <input type="text" name="subject" id="subject" required />
              <span>Subject</span>
              <i></i>
            </div>
            <div className={styles.inputContainer}>
              <input
                type="email"
                name="email"
                id="email"
                className={styles.email}
                required
              />
              <span>Email</span>
              <i></i>
            </div>
            <div className={styles.inputContainer}>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="4"
                required
              ></textarea>
              <span>Message</span>
              <i></i>
            </div>
            <button disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
