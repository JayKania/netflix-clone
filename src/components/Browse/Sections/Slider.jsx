//  Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// Import Navigation module and its styles
import { Navigation } from "swiper";
import "swiper/css/navigation";

import styled from "styled-components";
import { memo, useEffect } from "react";

const slides = {
  backgroundColor: "black",
  color: "white",
  height: "130px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "7px",
};

const Slider = ({ trendingMovies, trendingShows }) => {
  useEffect(() => {
    console.log(trendingMovies);
    console.log(trendingShows);
  });
  return (
    <StyledSwiperContainer className="swiper-container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={4}
        slidesPerView={6}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
      >
        <SwiperSlide className="slides" style={slides}>
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="slides" style={slides}>
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="slides" style={slides}>
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="slides" style={slides}>
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="slides" style={slides}>
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="slides" style={slides}>
          Slide 6
        </SwiperSlide>
        <SwiperSlide className="slides" style={slides}>
          Slide 7
        </SwiperSlide>

        <StyledButtons className="swiper-button-prev"></StyledButtons>
        <StyledButtons className="swiper-button-next"></StyledButtons>
      </Swiper>
    </StyledSwiperContainer>
  );
};

const StyledButtons = styled.div`
  --swiper-navigation-size: 25px;
  --swiper-theme-color: white;
`;

const StyledSwiperContainer = styled.div`
  padding: 0 1rem;
  background-color: #141414;
`;

const StyledSlides = styled(SwiperSlide)`
  background-color: black;
  color: white;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default memo(Slider);
