import React from "react";
import ScreenHeading from "../../components/moleculars/ScreenHeading";
import Animation from "../../utils/Animations";
import ScrollManagement from "../../utils/ScrollManagement";
import "../../assets/css/aboutMe.css";
import image from "../../assets/images/ilustration/me.jpg";

function About({ id }) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== id) {
      return Animation.animations.fadeInScreen(id);
    }
  };

  const fadeInSubcription =
    ScrollManagement.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building application with utmost effeciency. Strong professional with a BSC willing to be an asset for an organization.",
    highlight: {
      bullets: [
        "Full Stack web and mobile development",
        "interactive Front End as per the design",
        "React and React Native",
        "Laravel, Node Js, Express JS",
        "Building REST API",
        "Managing database from MongoDb, Mysql",
      ],
      heading: "Here are a Few Highlights:",
    },
  };

  const renderHighLight = () => {
    return SCREEN_CONSTANTS.highlight.bullets.map((row, key) => {
      return (
        <div className="highlight" key={key}>
          <div className="highlight-blob"></div>
          <span>{row}</span>
        </div>
      );
    });
  };
  return (
    <div className="about-me-container screen-container" id={id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title="About Me" subHeading="Why Choose Me?" />
        <div className="about-me-card">
          <div className="about-me-profile">
            <img src={image} alt="" />
          </div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlight.heading}</span>
              </div>
              {renderHighLight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn">
                {""}
                Hire Me
              </button>
              <a href="cek" download="dicki prasetya.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
