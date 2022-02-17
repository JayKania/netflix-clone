import React from "react";

const Section_3 = () => {
  return (
    <div className="section-3 section">
      <div className="image-desc-wrapper">
        <div className="description">
          <h1>Watch everywhere.</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="img-video-wrapper">
          <div className="tv-img"></div>
          <video autoPlay playsInline muted loop>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Section_3;
