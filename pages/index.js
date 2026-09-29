import Head from "next/head";
import { useRef } from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import ContactMe from "../components/ContactMe/ContactMe";
import Experience from "../components/Experience/Experience";
import EngineeringImpact from "../components/EngineeringImpact/EngineeringImpact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import MySkills from "../components/MySkills/MySkills";
import MyWorks from "../components/MyWorks/MyWorks";
import SectionDivider from "../components/SectionDivider/SectionDivider";
import Testimonials from "../components/Testimonials/Testimonials";
import styles from "../styles/Home.module.scss";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const homeRef = useRef(null);
  const impactRef = useRef(null);
  const experienceRef = useRef(null);
  const workRef = useRef(null);
  const skillRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollHandler = (section) => {
    const offset = 83;
    const refs = {
      home: homeRef,
      impact: impactRef,
      experience: experienceRef,
      work: workRef,
      skill: skillRef,
      about: aboutRef,
      contact: contactRef,
    };

    const ref = refs[section];
    if (ref?.current) {
      window.scrollTo({
        top: ref.current.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Uruemuesiri Samuel Ogbe-Green",
    alternateName: "Samuel Ogbe-Green",
    jobTitle: "Senior Frontend Engineer",
    url: "https://samuel-green.vercel.app",
    sameAs: [
      "https://linkedin.com/in/samuel-ogbe-green",
      "https://github.com/celebsam",
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Core Web Vitals",
      "WordPress Development",
      "Zustand",
      "Redux",
      "Tailwind CSS",
      "AI-Assisted Software Engineering",
    ],
  };

  return (
    <>
      <Head>
        <title>Uruemuesiri Samuel Ogbe-Green | Senior Frontend &amp; Mobile Engineer</title>
        <meta
          name="title"
          content="Uruemuesiri Samuel Ogbe-Green | Senior Frontend & Mobile Engineer"
        />
        <meta
          name="description"
          content="Senior Frontend Engineer with 5+ years of experience building fast, accessible, and scalable web and mobile applications using React, Next.js, React Native, TypeScript, and custom WordPress."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Uruemuesiri Samuel Ogbe-Green" />
        <meta
          name="keywords"
          content="Samuel Ogbe-Green, Senior Frontend Engineer, React Developer, Next.js Architect, TypeScript, React Native, Core Web Vitals, WordPress Engineer, Nigeria Developer"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Uruemuesiri Samuel Ogbe-Green | Senior Frontend & Mobile Engineer"
        />
        <meta
          property="og:description"
          content="Senior Frontend Engineer with 5+ years of professional experience in React, Next.js, React Native, TypeScript, and performance engineering."
        />
        <meta property="og:image" content="/ogimage.PNG" />
        <meta property="og:url" content="https://samuel-green.vercel.app" />
        <meta property="og:site_name" content="Samuel Ogbe-Green Portfolio" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Samuel Ogbe-Green | Senior Frontend Engineer" />
        <meta
          name="twitter:description"
          content="Senior Frontend Engineer with 5+ years of experience in React, Next.js, TypeScript, and React Native."
        />
        <meta name="twitter:image" content="/ogimage.PNG" />

        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <Toaster position="bottom-center" reverseOrder={false} />

      <div className={styles.wrapper}>
        <Header scrollHandler={scrollHandler} />

        <main className={styles.main}>
          <Hero homeRef={homeRef} scrollHandler={scrollHandler} />
          <SectionDivider />
          <div ref={impactRef}>
            <EngineeringImpact />
          </div>
          <SectionDivider />
          <Experience experienceRef={experienceRef} />
          <SectionDivider />
          <MyWorks workRef={workRef} />
          <SectionDivider />
          <MySkills skillRef={skillRef} />
          <SectionDivider />
          <AboutMe aboutRef={aboutRef} scrollHandler={scrollHandler} />
          <SectionDivider />
          <Testimonials />
          <SectionDivider />
          <ContactMe contactRef={contactRef} />
        </main>

        <Footer scrollHandler={scrollHandler} />
      </div>
    </>
  );
}
