import React from "react";
import navLogo from "../../assets/Netflix-Logo.svg";

const Profiles = () => {
  const profiles = [
    {
      color: "blue",
      name: "Jay",
    },
    {
      color: "yellow",
      name: "Rakesh",
    },
    {
      color: "red",
      name: "Jenish",
    },
    {
      color: "grey",
      name: "Priya",
    },
    {
      color: "kids",
      name: "Children",
    },
  ];

  const profileHtml = React.Children.toArray(
    profiles.map((profile) => {
      return (
        <div className="profile-wrapper">
          <div className={`profile ${profile.color}`}></div>
          <p className="profile-name">{profile.name}</p>
        </div>
      );
    })
  );

  return (
    <div className="profiles">
      <div className="profile-nav">
        <a href="/">
          <img src={navLogo} alt="" />
        </a>
      </div>
      <div className="profile-container">
        <h2 className="profile-title">Who's watching?</h2>
        <div className="profile-body">{profileHtml}</div>
      </div>
      <div className="manage-profiles">Manage Profiles</div>
    </div>
  );
};

export default Profiles;
