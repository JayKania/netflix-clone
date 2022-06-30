//  Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// Import Navigation module and its styles
import { Navigation } from "swiper";
import "swiper/css/navigation";

import styled from "styled-components";
import { memo, useEffect, useState } from "react";

const slides = {
  backgroundColor: "black",
  color: "white",
  height: "130px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "7px",
};

const posters = {
  height: "100%",
  width: "100%",
  objectFit: "cover",
};

const Slider = ({ title, data }) => {
  useEffect(() => {
    console.log(data);
  });

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const slidesMarkup = data ? (
    data.map((result) => {
      return result.original_language === "en" ? (
        <SwiperSlide
          className="slides"
          style={{
            ...slides,
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${result.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "",
            backgroundRepeat: "no-repeat",
            // transform: hover ? "scale(2)" : "",
            cursor: hover ? "pointer" : "",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          key={result.id}
        >
          {/* {result.original_name
              ? result.original_name
              : result.original_title} */}
          {/* <img
              style={posters}
              src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
              alt="show/movie poster"
            /> */}
        </SwiperSlide>
      ) : null;
    })
  ) : (
    <SwiperSlide className="slides" style={slides}></SwiperSlide>
  );

  return (
    <StyledSwiperContainer className="swiper-container">
      <h2 style={{ color: "white" }}>{title}</h2>

      <Swiper
        modules={[Navigation]}
        slidesPreView={6}
        spaceBetween={4}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
            navigation: { enabled: false, nextEl: "", prevEl: "" },
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
            navigation: { enabled: false, nextEl: "", prevEl: "" },
          },
          1115: {
            spaceBetween: 4,
            slidesPreView: 6,
            navigation: { enabled: false, nextEl: "", prevEl: "" },
          },
        }}
      >
        {/* <SwiperSlide className="slides" style={slides}>
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
        </SwiperSlide> */}
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

const StyledSwiperSlide = styled(SwiperSlide)`
  background-color: black;
  color: white;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
`;

export default memo(Slider);
