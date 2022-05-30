import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userStore from "../../store/UserStore";
// import { useAuth } from "../../context/UserContextProvider";
import AllSections from "./AllSections";
import FaqSection from "./FaqSection";
import Footer from "./Footer";
import Nav from "./Nav";
import TitleSection from "./TitleSection";

const Home = () => {
  const navigate = useNavigate();
  const user = userStore((state) => state.user);
  useEffect(() => {
    user ? navigate("/browse") : navigate("/");
  }, []);
  return (
    <>
      <div className="nav-title-wrapper">
        <Nav />
        <TitleSection />
      </div>
      <AllSections />
      {/* <FaqSection />
      <Footer /> */}
    </>
  );
};

export default Home;
