import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/UserContextProvider";
import { auth } from "../../firebase/FirebseConfig";
import AllSections from "./AllSections";
import FaqSection from "./FaqSection";
import Footer from "./Footer";
import Nav from "./Nav";
import TitleSection from "./TitleSection";

const Home = () => {
  const authObject = useAuth();
  const navigate = useNavigate();
  // console.log(authObject.user);
  useEffect(() => {
    authObject.user ? navigate("/browse") : navigate("/");
  }, []);
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
