import React from "react";
import tv from "../assets/tv.png";
import tv_video from "../assets/video-tv.m4v";

const About = () => {
  return (
    <>
      <div className="section-1 section">
        <div className="image-desc-wrapper">
          <div className="description">
            <h1>Enjoy on your TV.</h1>
            <p>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className="img-video-wrapper">
            {/* <img src={tv} alt="" /> */}
            <video autoPlay playsInline muted loop>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div className="section-2 section"></div>
      <div className="section-3 section"></div>
      <div className="section-4 section"></div>
    </>
  );
};

export default About;
