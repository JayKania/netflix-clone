import React from "react";
import navLogo from "../../assets/Netflix-Logo.svg";
import styled from "styled-components";

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
    <StyledProfiles className="profiles">
      <div className="profile-nav">
        <a href="/">
          <img src={navLogo} alt="" />
        </a>
      </div>
      <StyledProfileContainer className="profile-container">
        <h2 className="profile-title">Who's watching?</h2>
        <div className="profile-body">{profileHtml}</div>
      </StyledProfileContainer>
      <div className="manage-profiles">Manage Profiles</div>
    </StyledProfiles>
  );
};

const StyledProfiles = styled.div`
  min-height: 100vh;
  padding-bottom: 2rem;
  background: #171717;
  .profile-nav {
    padding-top: 1rem;
    padding-left: 3rem;
    a {
      img {
        height: 45px;
        width: 90px;
      }
    }
  }
  .manage-profiles {
    width: fit-content;
    color: grey;
    padding: 0.5rem 2rem;
    border: 2px solid grey;
    margin: 0rem auto;
    letter-spacing: 2px;
    font-size: 1.3rem;
    &:hover {
      border: 2px solid white;
      color: white;
      cursor: pointer;
    }
  }
`;

const StyledProfileContainer = styled.div`
  margin: 7rem auto 4rem auto;
  text-align: center;
  h2 {
    color: white;
    font-size: 3.5rem;
    font-weight: 400;
  }
  .profile-body {
    padding-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .profile-wrapper {
      margin: 1rem;
      &:hover {
        cursor: pointer;
        .profile {
          border: 3px solid white;
        }
        .profile-name {
          color: white;
        }
      }
      .profile-name {
        color: grey;
        margin: 1rem;
        font-size: 1.3rem;
      }
      .profile {
        height: 9rem;
        width: 9rem;
        border: 3px solid transparent;
        &.blue {
          background: url("https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41");
          background-size: 9rem 9rem;
          background-repeat: no-repeat;
        }
        &.yellow {
          background: url("https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWu33TcylnaLZwSdtgKR6mr0O63afqQLxZbzHYQZLkCJ9bgMTtsf6tzs_ua2BuTpAVPbhxnroiEA-_bqJmKWiXblO9h-.png?r=f71");
          background-size: 9rem 9rem;
          background-repeat: no-repeat;
        }
        &.red {
          background: url("https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeUqbfriC_pGWtwTa1KOx-ZSiQYa7ltLkOuduGxY_GRRc41ugYJNGYHe4LNcmshST4qkRSENvcs2xFomPc0rtX8wq2NG.png?r=b97");
          background-size: 9rem 9rem;
          background-repeat: no-repeat;
        }
        &.grey {
          background: url("https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABX_cjFqekMWlVv9AS6vI54p7W5uxkdnDz0RZ_BWg2XRBOMNYXnJRhtOnpMappsaT2-4TP8mjyaBTNLX-mLEJHl8GIfn_.png?r=fcc");
          background-size: 9rem 9rem;
          background-repeat: no-repeat;
        }
        &.kids {
          background: url("https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABaUPoBCVB1RRbB3EfRHmR0B--jKWw5PtSZJG0K6KlbQwBvJPKU8mI-SSMWepaLtGsiR9SQnE92jjKFidoUpPQq-hGhE1.png?r=5cf");
          background-size: 9rem 9rem;
          background-repeat: no-repeat;
        }
      }
    }
  }
`;

export default Profiles;
