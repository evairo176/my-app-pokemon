import React from "react";
import { TypeAnimation } from "react-type-animation";
import "../../assets/css/profile.css";

function ProfileComponent() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="cek">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="cek">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="cek">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="cek">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="cek">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'M{" "}
              <span className="highlighted-text">Dicki Prasetya</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                {" "}
                <TypeAnimation
                  sequence={[
                    "Ethusiastic Dev 🚀",
                    1000,
                    "Full Stack Developer 💻",
                    1000,
                    "MERN Stack Dev 😎",
                    1000,
                    "Cross Platform Dev 🌐",
                    1000,
                    "React/React Native Dev 📱",
                    1000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building application with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me
            </button>
            <a href="cek" download="dicki prasetya.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent;
