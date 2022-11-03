import React, { useRef, useState, useEffect } from "react";
import styles from "../../styles/ContactMe.module.scss";
import Aos from "aos";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactMe = ({ contactRef }) => {
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ntqz7go",
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
      <div className={styles.contactMeGrid}>
        <div className={styles.socialsContainer}>
          <div data-aos="fade-up">
            <a href="mailto:samuelogbe0@gmail.com">
              <i className="fas fa-envelope"></i>
              <p>Email</p>
              <p>samuelogbe0@gmail.com</p>
              <small>Send a message</small>
            </a>
          </div>
          <div data-aos="fade-down">
            <a
              href="https://wa.me/2347063979371"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
              <p>WhatsApp</p>
              <p>+2347063979371</p>
              <small>Send a message</small>
            </a>
          </div>
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
              {loading ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
