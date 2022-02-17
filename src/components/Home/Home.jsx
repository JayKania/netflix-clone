import React from "react";
import AllSections from "./AllSections";
import FaqSection from "./FaqSection";
import Footer from "./Footer";
import Nav from "./Nav";
import TitleSection from "./TitleSection";

const Home = () => {
  return (
    <>
      <div className="nav-title-wrapper">
        <Nav />
        <TitleSection />
      </div>
      <AllSections />
      <FaqSection />
      <Footer />
    </>
  );
};

export default Home;
