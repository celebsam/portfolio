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
        <title>
          Samuel Green | Frontend Developer | Web Developer | React Developer
        </title>
        <meta
          name="title"
          content="Samuel Green | Frontend Developer | Web Developer | React Developer"
        />
        <meta
          name="description"
          content="I am a frontend developer passionate about developing solutions using the best tools and best practices to deliver amazing UI's and UX. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Samuel Ogbe-Green" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React, Frontend, Web Developer, portfolio, web development, front end development, React developer, frontend developer"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta charSet="UTF-8" />

        {/* <meta property="og:type" content="article" />
        <meta property="og:title" content="TITLE OF YOUR POST OR PAGE" />
        <meta property="og:description" content="DESCRIPTION OF PAGE CONTENT" />
        <meta property="og:image" content="LINK TO THE IMAGE FILE" />
        <meta property="og:url" content="PERMALINK" />
        <meta property="og:site_name" content="SITE NAME" /> */}

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
