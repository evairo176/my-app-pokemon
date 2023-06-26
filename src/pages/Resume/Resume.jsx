import React, { Fragment, useRef, useState } from "react";
import ScreenHeading from "../../components/moleculars/ScreenHeading";
import ScrollManagement from "../../utils/ScrollManagement";
import "../../assets/css/resume.css";
import { useEffect } from "react";

function Resume({ id }) {
  const [activeButton, setActiveButton] = useState("1");

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== id) {
      return Animation.animations.fadeInScreen(id);
    }
  };
  const fadeInSubcription =
    ScrollManagement.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const toggleShowClass = (index) => {
    const resumeContent = document.getElementById("resume" + index);
    resumeContent.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    setActiveButton(index);
  };

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
          heading: "PT. Xtreme Network Sistem (TNOS)",
          subHeading: "Full Stack Web Developer",
          fromDate: "OKT 2022",
          toDate: "Sekarang",
          description: [
            `1. Membuat PWA Website dengan menggunakan React Js dan laravel 8, dengan fitur Google Map, dan Payment Xendit Custom`,
            `2. Membuat fitur-fitur di dashboard seperti email masal dan push notif ke mobile dengan menggunakan API, Laravel dan React JS`,
          ],
        },
        {
          heading: "PT. Technogis Indonesia",
          subHeading: "Full Stack Web Developer",
          fromDate: "JUL 2021",
          toDate: "DES 2022",
          description: [
            `1. Membuat Website Inventori barang internal dengan menggunakan laravel`,
            `2. Menslicing atau mengconveret Figma to HTML 18 Halaman dari website Utama Jagoweb`,
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
          skill: "Laravel",
          ratingPercentage: 90,
        },
        {
          skill: "Git",
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
          heading: "PT Xtreme Network Sistem",
          subHeading: "Full Stack Dev",
          description: [
            `1. Membuat PWA Website (Google Maps, Xendit Custom, Api Telegram, React-Redux, React Js, Laravel 8, Integrasi API backend)`,
            `2. Membuat fitur-fitur di dashboard seperti email masal dan push notif ke mobile dengan menggunakan API, Laravel dan React JS`,
          ],
        },
        {
          heading: "Dinas Pemberdayaan Masyarakat dan Desa Kabupaten Indramayu",
          subHeading: "Full Stack Dev",
          description: [
            `1. Membuat aplikasi rancang bangun web penyajian pelaporan kegiatan posyandu pada Dinas Pemberdayaan Masyarakat dan Desa Kabupaten Indramayu, dengan menggunakan laravel 8`,
          ],
        },
        {
          heading: "PT. Techogis Indonesia",
          subHeading: "Full Stack Dev",
          description: [
            `1. Membuat Website Inventori barang internal dengan menggunakan laravel`,
            `2. Menslicing atau mengconveret Figma to HTML 18 Halaman dari website Utama Jagoweb`,
          ],
        },
        {
          heading: "Projek Pribadi",
          subHeading: "Full Stack Dev",
          description: [
            `1. Membuat Website SIAKAD Sekolah Menengah Atas, dengan menggunakan Codeigniter 4`,
            `2. Membuat tampilan atau integrasi API Youtube dan wikipedia menggunakan React Js`,
            `3. Membuat Website Blog (React Js, Express Js, dan MongoDb)`,
            `4. Membuat App Food Market (React Native, dan Laravel Api)`,
          ],
        },
        // {
        //   heading: "Freelance",
        //   subHeading: "Full Stack Dev",
        //   description: [
        //     `1. Membuat Web Pemesanan Wisata dengan laravel 8 menggunakan metode pembayaran Midtrans`,
        //   ],
        // },
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
        <ScreenHeading title="Resume" subHeading="My Formal Bio Details" />
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
