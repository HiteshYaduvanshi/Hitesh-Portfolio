import React, { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PortfolioSection from "../PortfolioSection/PortfolioSection";

function PortfolioPage() {
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
          <PortfolioSection />
          <Footer />
        </>
      )}
    </>
  );
}

export default PortfolioPage;
