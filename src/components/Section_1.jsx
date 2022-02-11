import React from "react";

const Section_1 = () => {
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
            <div className="tv-img"></div>
            <video autoPlay playsInline muted loop>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section_1;
