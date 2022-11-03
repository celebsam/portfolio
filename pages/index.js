import Head from "next/head";
import { useRef } from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import ContactMe from "../components/ContactMe/ContactMe";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import MySkills from "../components/MySkills/MySkills";
import MyWorks from "../components/MyWorks/MyWorks";
import SectionDivider from "../components/SectionDivider/SectionDivider";
import styles from "../styles/Home.module.scss";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const homeRef = useRef(null);
  const workRef = useRef(null);
  const skillRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollHandler = (section) => {
    if (section === "home") {
      window.scrollTo({
        top: homeRef.current.offsetTop - 83,
        behavior: "smooth",
      });
    } else if (section === "work") {
      window.scrollTo({
        top: workRef.current.offsetTop - 83,
        behavior: "smooth",
      });
    } else if (section === "skill") {
      window.scrollTo({
        top: skillRef.current.offsetTop - 83,
        behavior: "smooth",
      });
    } else if (section === "about") {
      window.scrollTo({
        top: aboutRef.current.offsetTop - 83,
        behavior: "smooth",
      });
    } else if (section === "contact") {
      window.scrollTo({
        top: contactRef.current.offsetTop - 83,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <Head>
        <title>Sam Green | Frontend Developer | Web Developer</title>
        <meta
          name="description"
          content="Samuel Ogbe-Green portfolio website."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Toaster />
      <div className={styles.wrapper}>
        <Header scrollHandler={scrollHandler} />

        <main className={styles.main}>
          <Hero homeRef={homeRef} scrollHandler={scrollHandler} />
          <SectionDivider />
          <MyWorks workRef={workRef} />
          <SectionDivider />
          <MySkills skillRef={skillRef} />
          <SectionDivider />
          <AboutMe aboutRef={aboutRef} scrollHandler={scrollHandler} />
          <SectionDivider />
          <ContactMe contactRef={contactRef} />
        </main>
        <Footer scrollHandler={scrollHandler} />
      </div>
    </>
  );
}
