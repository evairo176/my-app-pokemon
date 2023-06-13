import React, { useRef, useState } from "react";
import ScreenHeading from "../../components/moleculars/ScreenHeading";
import ScrollManagement from "../../utils/ScrollManagement";
import "../../assets/css/resume.css";
import { useEffect } from "react";

const ScrollButton = ({ id, active, setActiveButton, logo, label, divId }) => {
  const handleScrollFadeIn = (index) => {
    // console.log(index);
    const targetElement = document.getElementById(index);
    console.log(targetElement.scrollHeight);
    //

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });

      setActiveButton(index);
    }
  };
  return (
    <div
      id={id}
      onClick={() => handleScrollFadeIn(divId)}
      className={active ? "bullet selected-bullet" : "bullet"}
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

function Resume({ id }) {
  //   const [selectedBulletIndex, setSelectedBulletIndex] = useState("0");
  const cekRef = useRef();

  //   let fadeInScreenHandler = (screen) => {
  //     if (screen.fadeScreen !== id) {
  //       return Animation.animations.fadeInScreen(id);
  //     }
  //   };

  const handleScroll = () => {
    if (cekRef.current) {
      //   const scrollValue = cekRef.current.scrollTop + window.screenY;
      //   const elementScroll = document.getElementsByClassName(
      //     "resume-bullet-details"
      //   );
      const scrollPosition =
        cekRef.current.scrollTop + window.scrollY ||
        document.documentElement.scrollY;
      //   console.log({ scrollPosition });

      const divs = document.getElementsByClassName("scrollable-div");
      //   console.log(di);

      for (let i = 0; i < divs.length; i++) {
        const div = divs[i];

        const divOffset = div.offsetTop;
        const divHeight = div.clientHeight;

        // console.log({ divOffset: divHeight + divOffset });
        // console.log({ divHeight });

        if (
          //   scrollPosition >= divOffset + 904 &&
          scrollPosition >=
          divOffset + divHeight - 150
        ) {
          //   console.log(div.id);
        } else {
          setActiveButton(div.id);
          return 0;
        }
      } // You can use the scrollValue as per your requirement
    }
  };

  //   const fadeInSubcription =
  //     ScrollManagement.currentScreenFadeIn.subscribe(fadeInScreenHandler);

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
          <div className="heading-bullet"></div>
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
    { id: "1", label: "Education", logoSrc: "education.svg", content: {} },
    {
      id: "2",
      label: "Work History",
      logoSrc: "work-history.svg",
    },
    { id: "3", label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { id: "4", label: "Projects", logoSrc: "projects.svg" },
    { id: "5", label: "Interests", logoSrc: "interests.svg" },
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
  const [activeButton, setActiveButton] = useState(null);
  const divs = [
    { id: "div1", content: "Div 1" },
    { id: "div2", content: "Div 2" },
    { id: "div3", content: "Div 3" },
  ];

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const elementScroll = document.getElementsByClassName(
  //         "resume-bullet-details"
  //       );
  //       const scrollPosition = elementScroll.scrollTop;
  //       console.log({ scrollPosition });

  //       //   const divs = document.getElementsByClassName("scrollable-div");
  //       //   console.log(di);

  //       for (let i = 0; i < divs.length; i++) {
  //         const div = divs[i];
  //         const divOffset = div.offsetTop;
  //         const divHeight = div.clientHeight;
  //         console.log(
  //           scrollPosition >= divOffset && scrollPosition < divOffset + divHeight
  //         );

  //         if (
  //           scrollPosition >= divOffset &&
  //           scrollPosition < divOffset + divHeight
  //         ) {
  //           setActiveButton(div.id);
  //           break;
  //         }
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

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
                      id={"button" + row?.id}
                      divId={row.id}
                      active={activeButton === row.id}
                      logo={row.logoSrc}
                      label={row.label}
                      setActiveButton={setActiveButton}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div
            className="resume-bullet-details"
            ref={cekRef}
            onScroll={handleScroll}
          >
            {resumeBullets?.map((row) => {
              return (
                <div id={row?.id} key={row?.id} className="scrollable-div">
                  <h1>Test{row.id}</h1>
                  <ResumeHeading
                    heading="Politeknik Negeri Indramayu, Indramayu"
                    subHeading="D3 TEKNIK INFORMATIKA"
                    fromDate="2019"
                    toDate="2022"
                  />
                  <ResumeHeading
                    heading="Politeknik Negeri Indramayu, Indramayu"
                    subHeading="D3 TEKNIK INFORMATIKA"
                    fromDate="2019"
                    toDate="2022"
                  />
                  <ResumeHeading
                    heading="Politeknik Negeri Indramayu, Indramayu"
                    subHeading="D3 TEKNIK INFORMATIKA"
                    fromDate="2019"
                    toDate="2022"
                  />
                  <ResumeHeading
                    heading="Politeknik Negeri Indramayu, Indramayu"
                    subHeading="D3 TEKNIK INFORMATIKA"
                    fromDate="2019"
                    toDate="2022"
                  />
                  <ResumeHeading
                    heading="Politeknik Negeri Indramayu, Indramayu"
                    subHeading="D3 TEKNIK INFORMATIKA"
                    fromDate="2019"
                    toDate="2022"
                  />
                  <ResumeHeading
                    heading="Politeknik Negeri Indramayu, Indramayu"
                    subHeading="D3 TEKNIK INFORMATIKA"
                    fromDate="2019"
                    toDate="2022"
                  />
                  <ResumeHeading
                    heading="Politeknik Negeri Indramayu, Indramayu"
                    subHeading="D3 TEKNIK INFORMATIKA"
                    fromDate="2019"
                    toDate="2022"
                  />
                  <ResumeHeading
                    heading="Politeknik Negeri Indramayu, Indramayu"
                    subHeading="D3 TEKNIK INFORMATIKA"
                    fromDate="2019"
                    toDate="2022"
                  />
                  <ResumeHeading
                    heading="Politeknik Negeri Indramayu, Indramayu"
                    subHeading="D3 TEKNIK INFORMATIKA"
                    fromDate="2019"
                    toDate="2022"
                  />
                  <ResumeHeading
                    heading="Politeknik Negeri Indramayu, Indramayu"
                    subHeading="D3 TEKNIK INFORMATIKA"
                    fromDate="2019"
                    toDate="2022"
                  />
                  <ResumeHeading
                    heading="Politeknik Negeri Indramayu, Indramayu"
                    subHeading="D3 TEKNIK INFORMATIKA"
                    fromDate="2019"
                    toDate="2022"
                  />
                  <ResumeHeading
                    heading="Politeknik Negeri Indramayu, Indramayu"
                    subHeading="D3 TEKNIK INFORMATIKA"
                    fromDate="2019"
                    toDate="2022"
                  />
                  <ResumeHeading
                    heading="Politeknik Negeri Indramayu, Indramayu"
                    subHeading="D3 TEKNIK INFORMATIKA"
                    fromDate="2019"
                    toDate="2022"
                  />
                  <ResumeHeading
                    heading="Politeknik Negeri Indramayu, Indramayu"
                    subHeading="D3 TEKNIK INFORMATIKA"
                    fromDate="2019"
                    toDate="2022"
                  />
                  <ResumeHeading
                    heading="Politeknik Negeri Indramayu, Indramayu"
                    subHeading="D3 TEKNIK INFORMATIKA"
                    fromDate="2019"
                    toDate="2022"
                  />
                  <ResumeHeading
                    heading="Politeknik Negeri Indramayu, Indramayu"
                    subHeading="D3 TEKNIK INFORMATIKA"
                    fromDate="2019"
                    toDate="2022"
                  />
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
