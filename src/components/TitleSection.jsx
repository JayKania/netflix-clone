import React from "react";
import "../styles/_title.scss";
const TitleSection = () => {
  return (
    <div className="title">
      <h1>Unlimited movies, TV </h1>
      <h1>shows and more.</h1>
      <p>Watch anywhere. Cancel anytime.</p>
      <p className="last-p">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="input-button-wrapper">
        <input type="text" placeholder="Email address" />
        <button>Get Started {">"}</button>
      </div>
    </div>
  );
};

export default TitleSection;
