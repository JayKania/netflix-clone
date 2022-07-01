import React from "react";

//  Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// Import Navigation module and its styles
import { Navigation } from "swiper";
import "swiper/css/navigation";

import { memo, useState } from "react";
import styled from "styled-components";

import "./slider.css";

const Slider = ({ title, data }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const slidesMarkup = data ? (
    React.Children.toArray(
      data.map((result) => {
        // return result.original_language === "en" ? (
        // ) : null;
        return (
          <SwiperSlide
            className="slides loadingAnimation"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                result.backdrop_path ? result.backdrop_path : result.poster_path
              })`,
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
            }}
          ></SwiperSlide>
        );
      })
    )
  ) : (
    <>
      {/* templates */}
      <SwiperSlide className="slides"></SwiperSlide>
      <SwiperSlide className="slides"></SwiperSlide>
      <SwiperSlide className="slides"></SwiperSlide>
      <SwiperSlide className="slides"></SwiperSlide>
      <SwiperSlide className="slides"></SwiperSlide>
      <SwiperSlide className="slides"></SwiperSlide>
    </>
  );

  return (
    <StyledSwiperContainer className="swiper-container">
      <StyledHeading className="category">{title}</StyledHeading>

      <Swiper
        style={{ overflow: "visible", maxWidth: "100vw" }}
        modules={[Navigation]}
        slidesPerView={6}
        spaceBetween={4}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 5,
            navigation: { enabled: false, nextEl: "", prevEl: "" },
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 5,
            navigation: { enabled: false, nextEl: "", prevEl: "" },
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 5,
            navigation: { enabled: false, nextEl: "", prevEl: "" },
          },
          1115: {
            slidesPerView: 6,
            spaceBetween: 5,
            navigation: {
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            },
          },
        }}
      >
        {slidesMarkup}
        <StyledButtons className="swiper-button-prev"></StyledButtons>
        <StyledButtons className="swiper-button-next"></StyledButtons>
      </Swiper>
    </StyledSwiperContainer>
  );
};

const StyledButtons = styled.div`
  --swiper-navigation-size: 25px;
  --swiper-theme-color: white;
  @media only screen and (max-width: 1115px) {
    display: none;
  }
`;

const StyledSwiperContainer = styled.div`
  padding: 2rem 1rem;
`;

const StyledHeading = styled.h2`
  color: grey;
  margin-bottom: 10px;
  @media only screen and (max-width: 320px) {
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 320px) and (max-width: 540px) {
    font-size: 1.75rem;
  }
  @media only screen and (min-width: 550px) and (max-width: 1115px) {
    font-size: 1.85rem;
  }
`;

export default memo(Slider);
