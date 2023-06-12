import React, { useState } from "react";
import ScreenHeading from "../../components/moleculars/ScreenHeading";
import ScrollManagement from "../../utils/ScrollManagement";

function Resume({ id }) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  const ResumeHeading = ({
    heading,
    fromDate,
    toDate,
    subHeading,
    description,
  }) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet">
            <span>{heading ? heading : ""}</span>
            {fromDate && toDate ? (
              <div className="heading-date">{fromDate + "-" + toDate}</div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{subHeading ? subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{description ? description : ""}</span>
          </div>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    {
      label: "Education",
      logoSrc: "education.svg",
    },
    {
      label: "Work History",
      logoSrc: "work-history.svg",
    },
    {
      label: "Programming Skills",
      logoSrc: "programming-skills.svg",
    },
    {
      label: "Projects",
      logoSrc: "projects.svg",
    },
    {
      label: "Interests",
      logoSrc: "interests.svg",
    },
  ];

  const programmingSkills = [
    {
      skill: "Javascript",
      ratingPercentage: 85,
    },
    {
      skill: "React Js",
      ratingPercentage: 90,
    },
    {
      skill: "React Native",
      ratingPercentage: 75,
    },
    {
      skill: "Express JS",
      ratingPercentage: 89,
    },
    {
      skill: "Node JS",
      ratingPercentage: 89,
    },
    {
      skill: "Mongo Db",
      ratingPercentage: 80,
    },
    {
      skill: "HTML",
      ratingPercentage: 90,
    },
    {
      skill: "CSS",
      ratingPercentage: 90,
    },
  ];

  const projectDetails = [
    {
      title: "Personal Portofolio Website",
      duration: {
        fromDate: "2020",
        toDate: "2021",
      },
      description:
        "A Personal Portofolio website to showcase all my details and projects at one place",
      subHeading: "Technologies Used: React Js, Bootstrap",
    },
    {
      title: "Personal Portofolio Website",
      duration: {
        fromDate: "2020",
        toDate: "2021",
      },
      description:
        "A Personal Portofolio website to showcase all my details and projects at one place",
      subHeading: "Technologies Used: React Js, Bootstrap",
    },
    {
      title: "Personal Portofolio Website",
      duration: {
        fromDate: "2020",
        toDate: "2021",
      },
      description:
        "A Personal Portofolio website to showcase all my details and projects at one place",
      subHeading: "Technologies Used: React Js, Bootstrap",
    },
  ];

  const resumeDetails = () => {
    return (
      <>
        <div className="resume-screen-container" key="education">
          <ResumeHeading
            heading="Politeknik Negeri Indramayu, Indramayu"
            subHeading="D3 TEKNIK INFORMATIKA"
            fromDate="2019"
            toDate="2022"
          />
          <ResumeHeading
            heading="SMK Negeri 1 Losarang, Indramayu"
            subHeading="D3 TEKNIK INFORMATIKA"
            fromDate="2016"
            toDate="2019"
          />
        </div>
        <div className="resume-screen-container" key="work-experience">
          <ResumeHeading
            heading="CEK"
            subHeading="Full Stack"
            fromDate="2019"
            toDate="present"
          />
          <div className="experience-description">
            <span className="resume-description-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur quidem eaque sunt adipisci, dicta molestias. Qui sint
              tempora quia? Repellat!
            </span>
          </div>
          <div className="experience-description">
            <span className="resume-description-text">
              - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              saepe earum atque fugit, voluptates ad non. Illum eius ut rerum
              unde.
            </span>
            <br />
            <span className="resume-description-text">
              - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              saepe earum atque fugit, voluptates ad non. Illum eius ut rerum
              unde.
            </span>
            <br />
            <span className="resume-description-text">
              - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              saepe earum atque fugit, voluptates ad non. Illum eius ut rerum
              unde.
            </span>
          </div>
        </div>
      </>
    );
  };

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== id) {
      return Animation.animations.fadeInScreen(id);
    }
  };

  const fadeInSubcription =
    ScrollManagement.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
    <div className="resume-container screen-container" id={id || ""}>
      <div className="resume-content">
        <ScreenHeading title="Resume" subHeading="My Formal Bio Details" />
      </div>
    </div>
  );
}

export default Resume;
