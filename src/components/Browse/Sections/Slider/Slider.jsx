import React from "react";
import { v4 as uuid4 } from "uuid";

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
  console.log(data);

  const slidesMarkup = data ? (
    data.map((result) => {
      // return result.original_language === "en" ? (
      // ) : null;
      const id = uuid4();
      return (
        <div>
          <SwiperSlide className="slides">
            <div className="card">
              <div className="poster">
                <img
                  src={`https://image.tmdb.org/t/p/original/${
                    result.backdrop_path
                      ? result.backdrop_path
                      : result.poster_path
                  }`}
                  alt="movie/tv img"
                />
              </div>
              <div className="details-card">
                <div className="btns">
                  <div className="btn-grp">
                    <div className="btn">
                      <i class="fal fa-duotone fa-play"></i>
                    </div>
                    <div className="btn">
                      <i class="fal fa-thin fa-plus"></i>
                    </div>
                    <div className="btn">
                      <i class="fal fa-thin fa-thumbs-up"></i>
                    </div>
                  </div>
                  <div className="btn-grp">
                    <div className="btn">
                      <i class="fal fa-thin fa-angle-down"></i>
                    </div>
                  </div>
                </div>
                <div className="details">
                  <h6 className="title">
                    {result.title
                      ? result.title
                      : result.original_language !== "en"
                      ? result.name
                      : result.original_name}
                  </h6>
                  <span className="match">96% Match</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      );
    })
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
  z-index: 5;
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
