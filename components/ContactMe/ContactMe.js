import React, { useState } from "react";
import styles from "../../styles/ContactMe.module.scss";

const ContactMe = ({ contactRef }) => {
  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    console.log({ fullName, email, subject, message });
  };
  return (
    <section className={styles.contactMeContainer} ref={contactRef}>
      <h2>Contact Me</h2>
      <div className={styles.contactMeGrid}>
        <div className={styles.socialsContainer}>
          <div>
            <i className="fas fa-envelope"></i>
            <p>Email</p>
            <p>samuelogbe0@gmail.com</p>
            <small>Send a message</small>
          </div>
          <div>
            <i className="fab fa-whatsapp"></i>
            <p>WhatsApp</p>
            <p>+2347063979371</p>
            <small>Send a message</small>
          </div>
        </div>
        <div className={styles.formBox}>
          <form>
            <div className={styles.inputContainer}>
              <input
                type="text"
                name="fullName"
                id="fullName"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <span>Full Name</span>
              <i></i>
            </div>
            <div className={styles.inputContainer}>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <span>Message</span>
              <i></i>
            </div>
            <button onClick={submitHandler}>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
