import React, { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import {
  Header,
  HomeBanner,
  HomeAbout,
  ServicesSection,
  Footer,
  PortfolioSection,
} from "../index";

function HomePage() {
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
          <HomeBanner />
          <HomeAbout />
          <ServicesSection />
          <PortfolioSection />
          <Footer />
        </>
      )}
    </>
  );
}

export default HomePage;
