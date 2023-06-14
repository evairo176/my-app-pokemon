import React, { Fragment, useRef, useState } from "react";
import ScreenHeading from "../../components/moleculars/ScreenHeading";
import ScrollManagement from "../../utils/ScrollManagement";
import "../../assets/css/resume.css";
import { useEffect } from "react";

function Resume({ id }) {
  //   const [selectedBulletIndex, setSelectedBulletIndex] = useState("0");

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== id) {
      return Animation.animations.fadeInScreen(id);
    }
  };
  const fadeInSubcription =
    ScrollManagement.currentScreenFadeIn.subscribe(fadeInScreenHandler);

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
          <div className="heading-bullet">1</div>
          <div>
            <div className="resume-title-heading">
              <span>{heading ? heading : ""}</span>
              {fromDate && toDate ? (
                <div className="heading-date">
                  <span>{fromDate + "-" + toDate}</span>
                </div>
              ) : (
                ""
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
      </div>
    );
  };

  const resumeBullets = [
    {
      id: "1",
      label: "Education",
      logoSrc: "education.svg",
      content: [
        {
          heading: "Politeknik Negeri Indramayu, Indramayu",
          subHeading: "D3 TEKNIK INFORMATIKA",
          fromDate: "2019",
          toDate: "2022",
        },
        {
          heading: "SMK Negeri 1 Losarang, Indramayu",
          subHeading: "TEKNIK MESIN",
          fromDate: "2016",
          toDate: "2019",
        },
        {
          heading: "SMP Negeri 1 Anjatan, Indramayu",
          subHeading: "-",
          fromDate: "2013",
          toDate: "2016",
        },
        {
          heading: "SD Negeri Cilandak Lor 1, Indramayu",
          subHeading: "-",
          fromDate: "2013",
          toDate: "2016",
        },
      ],
    },
    {
      id: "2",
      label: "Work History",
      logoSrc: "work-history.svg",
      content: [
        {
          heading: "Politeknik Negeri Indramayu, Indramayu",
          subHeading: "D3 TEKNIK INFORMATIKA",
          fromDate: "2019",
          toDate: "2022",
          description: [
            `- Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            saepe earum atque fugit, voluptates ad non. Illum eius ut rerum
            unde.`,
            `- Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            saepe earum atque fugit, voluptates ad non. Illum eius ut rerum
            unde.`,
            `- Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            saepe earum atque fugit, voluptates ad non. Illum eius ut rerum
            unde.`,
          ],
        },
        {
          heading: "SMK Negeri 1 Losarang, Indramayu",
          subHeading: "TEKNIK MESIN",
          fromDate: "2016",
          toDate: "2019",
          description: [
            `- Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            saepe earum atque fugit, voluptates ad non. Illum eius ut rerum
            unde.`,
          ],
        },
        {
          heading: "SMP Negeri 1 Anjatan, Indramayu",
          subHeading: "-",
          fromDate: "2013",
          toDate: "2016",
          description: [
            `- Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            saepe earum atque fugit, voluptates ad non. Illum eius ut rerum
            unde.`,
            `- Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            saepe earum atque fugit, voluptates ad non. Illum eius ut rerum
            unde.`,
          ],
        },
        {
          heading: "SD Negeri Cilandak Lor 1, Indramayu",
          subHeading: "-",
          fromDate: "2013",
          toDate: "2016",
          description: [
            `- Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            saepe earum atque fugit, voluptates ad non. Illum eius ut rerum
            unde.`,
            `- Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            saepe earum atque fugit, voluptates ad non. Illum eius ut rerum
            unde.`,
            `- Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            saepe earum atque fugit, voluptates ad non. Illum eius ut rerum
            unde.`,
            `- Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            saepe earum atque fugit, voluptates ad non. Illum eius ut rerum
            unde.`,
            `- Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            saepe earum atque fugit, voluptates ad non. Illum eius ut rerum
            unde.`,
          ],
        },
      ],
    },
    {
      id: "3",
      label: "Programming Skills",
      logoSrc: "programming-skills.svg",
      content: [
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
      ],
    },
    {
      id: "4",
      label: "Projects",
      logoSrc: "projects.svg",
      content: [
        {
          heading: "Website Pemesanan Wisata (Midtrans dan laravel 8)",
          subHeading: "Project Pribadi",
          fromDate: "OKT 2022",
          toDate: "Sekarang",
        },
        {
          heading: "SMK Negeri 1 Losarang, Indramayu",
          subHeading: "TEKNIK MESIN",
          fromDate: "2016",
          toDate: "2019",
        },
        {
          heading: "SMP Negeri 1 Anjatan, Indramayu",
          subHeading: "-",
          fromDate: "2013",
          toDate: "2016",
        },
        {
          heading: "SD Negeri Cilandak Lor 1, Indramayu",
          subHeading: "-",
          fromDate: "2013",
          toDate: "2016",
        },
      ],
    },
    {
      id: "5",
      label: "Interests",
      logoSrc: "interests.svg",
      content: [
        {
          heading: "Website Pemesanan Wisata (Midtrans dan laravel 8)",
          subHeading: "Project Pribadi",
        },
        {
          heading: "SMK Negeri 1 Losarang, Indramayu",
          subHeading: "TEKNIK MESIN",
        },
        {
          heading: "SMP Negeri 1 Anjatan, Indramayu",
          subHeading: "-",
        },
        {
          heading: "SD Negeri Cilandak Lor 1, Indramayu",
          subHeading: "-",
        },
      ],
    },
  ];

  //   const programmingSkills = [
  //     {
  //       skill: "Javascript",
  //       ratingPercentage: 85,
  //     },
  //     {
  //       skill: "React Js",
  //       ratingPercentage: 90,
  //     },
  //     {
  //       skill: "React Native",
  //       ratingPercentage: 75,
  //     },
  //     {
  //       skill: "Express JS",
  //       ratingPercentage: 89,
  //     },
  //     {
  //       skill: "Node JS",
  //       ratingPercentage: 89,
  //     },
  //     {
  //       skill: "Mongo Db",
  //       ratingPercentage: 80,
  //     },
  //     {
  //       skill: "HTML",
  //       ratingPercentage: 90,
  //     },
  //     {
  //       skill: "CSS",
  //       ratingPercentage: 90,
  //     },
  //   ];

  //   const projectDetails = [
  //     {
  //       title: "Personal Portofolio Website",
  //       duration: {
  //         fromDate: "2020",
  //         toDate: "2021",
  //       },
  //       description:
  //         "A Personal Portofolio website to showcase all my details and projects at one place",
  //       subHeading: "Technologies Used: React Js, Bootstrap",
  //     },
  //     {
  //       title: "Personal Portofolio Website",
  //       duration: {
  //         fromDate: "2020",
  //         toDate: "2021",
  //       },
  //       description:
  //         "A Personal Portofolio website to showcase all my details and projects at one place",
  //       subHeading: "Technologies Used: React Js, Bootstrap",
  //     },
  //     {
  //       title: "Personal Portofolio Website",
  //       duration: {
  //         fromDate: "2020",
  //         toDate: "2021",
  //       },
  //       description:
  //         "A Personal Portofolio website to showcase all my details and projects at one place",
  //       subHeading: "Technologies Used: React Js, Bootstrap",
  //     },
  //   ];

  //   const resumeDetails = () => {
  //     return (
  //       <>
  //         <div className="resume-screen-container" id="0">
  //           <ResumeHeading
  //             heading="Politeknik Negeri Indramayu, Indramayu"
  //             subHeading="D3 TEKNIK INFORMATIKA"
  //             fromDate="2019"
  //             toDate="2022"
  //           />
  //           <ResumeHeading
  //             heading="Politeknik Negeri Indramayu, Indramayu"
  //             subHeading="D3 TEKNIK INFORMATIKA"
  //             fromDate="2019"
  //             toDate="2022"
  //           />
  //           <ResumeHeading
  //             heading="SMK Negeri 1 Losarang, Indramayu"
  //             subHeading="D3 TEKNIK INFORMATIKA"
  //             fromDate="2016"
  //             toDate="2019"
  //           />
  //         </div>
  //         <div className="resume-screen-container" id="1">
  //           <ResumeHeading
  //             heading="CEK 1"
  //             subHeading="Full Stack"
  //             fromDate="2019"
  //             toDate="present"
  //           />

  //           <div className="experience-description">
  //             <span className="resume-description-text">
  //               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  //               Consectetur quidem eaque sunt adipisci, dicta molestias. Qui sint
  //               tempora quia? Repellat!
  //             </span>
  //           </div>
  //           <div className="experience-description">
  //             <span className="resume-description-text">
  //               - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
  //               saepe earum atque fugit, voluptates ad non. Illum eius ut rerum
  //               unde.
  //             </span>
  //             <br />
  //             <span className="resume-description-text">
  //               - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
  //               saepe earum atque fugit, voluptates ad non. Illum eius ut rerum
  //               unde.
  //             </span>
  //             <br />
  //             <span className="resume-description-text">
  //               - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
  //               saepe earum atque fugit, voluptates ad non. Illum eius ut rerum
  //               unde.
  //             </span>
  //           </div>
  //           <ResumeHeading
  //             heading="CEK 2"
  //             subHeading="Full Stack"
  //             fromDate="2019"
  //             toDate="present"
  //           />

  //           <div className="experience-description">
  //             <span className="resume-description-text">
  //               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  //               Consectetur quidem eaque sunt adipisci, dicta molestias. Qui sint
  //               tempora quia? Repellat!
  //             </span>
  //           </div>
  //           <div className="experience-description">
  //             <span className="resume-description-text">
  //               - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
  //               saepe earum atque fugit, voluptates ad non. Illum eius ut rerum
  //               unde.
  //             </span>
  //             <br />
  //             <span className="resume-description-text">
  // - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
  // saepe earum atque fugit, voluptates ad non. Illum eius ut rerum
  // unde.
  //             </span>
  //             <br />
  //             <span className="resume-description-text">
  //               - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
  //               saepe earum atque fugit, voluptates ad non. Illum eius ut rerum
  //               unde.
  //             </span>
  //           </div>
  //           <ResumeHeading
  //             heading="CEK 3"
  //             subHeading="Full Stack"
  //             fromDate="2019"
  //             toDate="present"
  //           />

  //           <div className="experience-description">
  //             <span className="resume-description-text">
  //               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  //               Consectetur quidem eaque sunt adipisci, dicta molestias. Qui sint
  //               tempora quia? Repellat!
  //             </span>
  //           </div>
  //           <div className="experience-description">
  //             <span className="resume-description-text">
  //               - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
  //               saepe earum atque fugit, voluptates ad non. Illum eius ut rerum
  //               unde.
  //             </span>
  //             <br />
  //             <span className="resume-description-text">
  //               - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
  //               saepe earum atque fugit, voluptates ad non. Illum eius ut rerum
  //               unde.
  //             </span>
  //             <br />
  //             <span className="resume-description-text">
  //               - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
  //               saepe earum atque fugit, voluptates ad non. Illum eius ut rerum
  //               unde.
  //             </span>
  //           </div>
  //         </div>
  //         <div
  //           className="resume-screen-container programming-skills-container"
  //           id="2"
  //         >
  //           {programmingSkills?.map((row, key) => {
  //             return (
  //               <div key={key} className="skill-parent">
  //                 <div className="heading-bullet"></div>
  //                 <span>{row.skill}</span>
  //                 <div className="skill-percentage">
  //                   <div
  //                     style={{ width: row.ratingPercentage + "%" }}
  //                     className="active-percentage-bar"
  //                   ></div>
  //                 </div>
  //               </div>
  //             );
  //           })}
  //         </div>
  //         <div className="resume-screen-container" id="3">
  //           {projectDetails.map((row, key) => {
  //             return (
  //               <ResumeHeading
  //                 key={key}
  //                 heading={row.title}
  //                 subHeading={row.subHeading}
  //                 description={row.description}
  //                 fromDate={row.duration.fromDate}
  //                 toDate={row.duration.toDate}
  //               />
  //             );
  //           })}
  //         </div>
  //         <div className="resume-screen-container" id="4">
  //           <ResumeHeading
  //             heading="Teaching"
  //             subHeading="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, assumenda."
  //           />
  //           <ResumeHeading
  //             heading="Teaching"
  //             subHeading="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, assumenda."
  //           />
  //           <ResumeHeading
  //             heading="Teaching"
  //             subHeading="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, assumenda."
  //           />
  //         </div>
  //       </>
  //     );
  //   };

  //   //   const handleCarousal = (key) => {
  //   //     let offsetHeight = 360;
  //   //     let newCarousalOffset = {
  //   //       style: { transform: `translateY(${key * offsetHeight * -1 + "px"})` },
  //   //     };

  //   //     setCarousalOffsetStyle(newCarousalOffset);
  //   //     setSelectedBulletIndex(key);
  //   //     console.log(key);
  //   //   };

  //   const getBullets = () => {
  //     return resumeBullets.map((row, key) => {
  //       //   console.log(key);
  //       return (
  //         <div
  //           key={key}
  //           onClick={() => handleScrollFadeIn(key.toString())}
  //           className={
  //             key.toString() === selectedBulletIndex
  //               ? "bullet selected-bullet"
  //               : "bullet"
  //           }
  //         >
  //           <img
  //             className="bullet-logo"
  //             src={require(`../../assets/images/resume/${row.logoSrc}`)}
  //             alt="Opps,,,, no internet connection"
  //           />
  //           <span className="bullet-label">{row.label}</span>
  //         </div>
  //       );
  //     });
  //   };

  //   const getResumeScreen = () => {
  //     return (
  //       <div
  //         className="resume-details-carousal"
  //         // style={carousalOffsetStyle.style}
  //       >
  //         {resumeDetails()}
  //       </div>
  //     );
  //   };

  //   return (
  //     <div className="resume-container screen-container" id={id || ""}>
  //       <div className="resume-content">
  //         <ScreenHeading title="Resume" subHeading="My Formal Bio Details" />
  //         <div className="resume-card">
  //           <div className="resume-bullets">
  //             <div className="bullet-container">
  //               <div className="bullet-icons"></div>
  //               <div className="bullets">{getBullets()}</div>
  //             </div>
  //           </div>
  //           <div
  //             className="resume-bullet-details"
  //             ref={cekRef}
  //             onScroll={handleScroll}
  //           >
  //             {getResumeScreen()}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  const [activeButton, setActiveButton] = useState("1");

  const toggleShowClass = (index) => {
    const resumeContent = document.getElementById("resume" + index);
    resumeContent.scrollIntoView({
      top: 0,
      behavior: "smooth",
    });
    setActiveButton(index);
  };

  const ScrollButton = ({ id, activeButton, logo, label }) => {
    return (
      <div
        id={id}
        onClick={() => toggleShowClass(id)}
        className={activeButton === id ? "bullet selected-bullet" : "bullet"}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/images/resume/${logo}`)}
          alt="Opps,,,, no internet connection"
        />
        <span className="bullet-label">{label}</span>
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={id || ""}>
      <div className="resume-content">
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">
                {" "}
                {resumeBullets?.map((row) => {
                  return (
                    <ScrollButton
                      key={row.id}
                      id={row?.id}
                      logo={row.logoSrc}
                      label={row.label}
                      activeButton={activeButton}
                      setActiveButton={setActiveButton}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="resume-bullet-details">
            {resumeBullets?.map((row) => {
              switch (row.label) {
                case "Education":
                  return (
                    <div
                      key={row.id}
                      id={"resume" + row.id}
                      className={`${
                        "resume" + activeButton === "resume" + row.id
                          ? "resume-screen-container resume-screen-jusitfy-none resume-hide resume-show"
                          : "resume-screen-container resume-screen-jusitfy-none resume-hide "
                      }`}
                    >
                      {row?.content?.map((row, key) => {
                        return (
                          <ResumeHeading
                            key={key}
                            heading={row.heading}
                            subHeading={row.subHeading}
                            fromDate={row.fromDate}
                            toDate={row.toDate}
                          />
                        );
                      })}
                      <hr />
                    </div>
                  );
                case "Work History":
                  return (
                    <div
                      key={row.id}
                      id={"resume" + row.id}
                      className={`${
                        "resume" + activeButton === "resume" + row.id
                          ? "resume-screen-container resume-screen-jusitfy-none resume-hide resume-show"
                          : "resume-screen-container resume-screen-jusitfy-none resume-hide "
                      }`}
                    >
                      {row?.content?.map((row, key) => {
                        return (
                          <div key={key}>
                            <ResumeHeading
                              heading={row.heading}
                              subHeading={row.subHeading}
                              fromDate={row.fromDate}
                              toDate={row.toDate}
                            />
                            <div className="experience-description">
                              {row?.description?.map((row, key) => {
                                return (
                                  <Fragment key={key}>
                                    {" "}
                                    <span className="resume-description-text">
                                      {row}
                                    </span>
                                    <br />
                                  </Fragment>
                                );
                              })}
                            </div>
                            <hr />
                          </div>
                        );
                      })}
                    </div>
                  );
                case "Programming Skills":
                  return (
                    <div
                      key={row.id}
                      id={"resume" + row.id}
                      className={`${
                        "resume" + activeButton === "resume" + row.id
                          ? "resume-screen-container programming-skills-container resume-hide resume-show"
                          : "resume-screen-container programming-skills-container resume-hide "
                      }`}
                    >
                      {row?.content?.map((row, key) => {
                        return (
                          <div key={key} className="skill-parent">
                            <div className="heading-bullet"></div>
                            <span>{row.skill}</span>
                            <div className="skill-percentage">
                              <div
                                style={{
                                  width: row.ratingPercentage + "%",
                                }}
                                className="active-percentage-bar"
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                case "Projects":
                  return (
                    <div
                      key={row.id}
                      id={"resume" + row.id}
                      className={`${
                        "resume" + activeButton === "resume" + row.id
                          ? "resume-screen-container resume-screen-jusitfy-none resume-hide resume-show"
                          : "resume-screen-container resume-screen-jusitfy-none resume-hide"
                      }`}
                    >
                      {row?.content?.map((row, key) => {
                        return (
                          <ResumeHeading
                            key={key}
                            heading={row.heading}
                            subHeading={row.subHeading}
                            fromDate={row.fromDate}
                            toDate={row.toDate}
                          />
                        );
                      })}
                    </div>
                  );
                case "Interests":
                  return (
                    <div
                      key={row.id}
                      id={"resume" + row.id}
                      className={`${
                        "resume" + activeButton === "resume" + row.id
                          ? "resume-screen-container resume-screen-jusitfy-none resume-hide resume-show"
                          : "resume-screen-container resume-screen-jusitfy-none resume-hide"
                      }`}
                    >
                      {row?.content?.map((row, key) => {
                        return (
                          <ResumeHeading
                            key={key}
                            heading={row.heading}
                            subHeading={row.subHeading}
                            fromDate={row.fromDate}
                            toDate={row.toDate}
                          />
                        );
                      })}
                    </div>
                  );
                default:
                  return "error";
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
