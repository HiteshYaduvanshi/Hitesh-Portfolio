import React, { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Education from "../Education/Education";
import SkillsSection from "../SkillsSection/SkillsSection";
import AboutHero from "../AboutHero/AboutHero";

function AboutPage() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <HashLoader
          color="#3B82F6"
          size={70}
          cssOverride={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
          }}
        />
      ) : (
        <>
          <Header />
          <AboutHero />
          <SkillsSection />
          <Education />
          <Footer />
        </>
      )}
    </>
  );
}

export default AboutPage;
