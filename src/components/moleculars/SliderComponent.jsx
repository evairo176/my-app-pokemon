import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Gap from "../atoms/Gap";
import box from "../../assets/images/icon/box.svg";

function SliderComponent() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data_item = [
    {
      id: 1,
      title: "Business Idea Planning",
      p_title: "We present you a proposal and discuss niffty-gritty like",
    },
    {
      id: 2,
      title: "Business Idea Planning",
      p_title: "We present you a proposal and discuss niffty-gritty like",
    },
    {
      id: 3,
      title: "Business Idea Planning",
      p_title: "We present you a proposal and discuss niffty-gritty like",
    },
    {
      id: 4,
      title: "Business Idea Planning",
      p_title: "We present you a proposal and discuss niffty-gritty like",
    },
  ];

  return (
    <div style={{ width: "300px" }}>
      <div>
        <Slider {...settings}>
          {data_item?.map((row, key) => {
            return (
              <div key={key}>
                <div className="card-idea">
                  <Gap height={15} />
                  <div className="container-box">
                    <img src={box} alt="" />
                  </div>
                  <Gap height={15} />
                  <div className="title">{row?.title}</div>
                  <Gap height={15} />
                  <div className="p-title">{row?.p_title}</div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default SliderComponent;
