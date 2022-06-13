import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userStore from "../../store/UserStore";
import FaqSection from "./FAQ Section/FaqSection";
import Footer from "./Footer/Footer";
import AllSections from "./Middle Sections/AllSections";
import Nav from "./Navigation/Nav";
import TitleSection from "./Title Section/TitleSection";
import styled from "styled-components";
import background_img from "../../assets/background-image.jpg";

const Home = () => {
  const navigate = useNavigate();
  const user = userStore((state) => state.user);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (user) {
      navigate("/browse");
    } else {
      navigate("/");
      setLoading(false);
    }
  }, [user]);
  return (
    <>
      {loading ? null : (
        <>
          <StyledNavTitleWrapper className="nav-title-wrapper">
            <Nav />
            <TitleSection />
          </StyledNavTitleWrapper>
          <AllSections />
          <FaqSection />
          <Footer />
        </>
      )}
    </>
  );
};

const StyledNavTitleWrapper = styled.div`
  background: url(${background_img});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 99.5vh;
  box-shadow: inset 30px 70px 50px 500px #000000a6,
    inset -30px -50px 50px 100px #000000a6;
  border-bottom: 10px solid #222222;

  // mobile
  @media only screen and (max-width: 480px) {
    min-height: 58vh;
  }

  // tablet
  @media only screen and (min-width: 481px) and (max-width: 820px) {
    min-height: 72vh;
  }

  // tablet portrait mode
  @media only screen and (min-width: 550px) and (max-width: 1024px) {
    min-height: 55vh;
  }
`;

export default Home;
