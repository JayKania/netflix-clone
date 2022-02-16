import React from "react";

const Input = () => {
  return (
    <>
      <p className="last-p">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="input-button-wrapper">
        <input type="text" placeholder="Email address" />
        <button>Get Started {">"}</button>
      </div>
    </>
  );
};

export default Input;
