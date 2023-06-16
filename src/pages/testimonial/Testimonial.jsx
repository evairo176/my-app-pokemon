import React from "react";
import ScreenHeading from "../../components/moleculars/ScreenHeading";
import ScrollManagement from "../../utils/ScrollManagement";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testi1 from "../../assets/images/testimonial/lady.png";
import "../../assets/css/testimonial.css";

function Testimonial({ id }) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== id) {
      return Animation.animations.fadeInScreen(id);
    }
  };
  const fadeInSubcription =
    ScrollManagement.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
  return (
    <div className="testimonial">
      <ScreenHeading
        title="Testimonial"
        subHeading="What My Client Say About Me"
      />
      <div className="testimonial-section" id={id || ""}>
        <div className="container-content">
          <Slider {...settings}>
            <div>
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                    <i className="fa fa-quote-left" />
                    I patronized Ehizeex and when He delivered, I honestly fell
                    in love with the project He is a very honest guy and he
                    delivers ontime.
                    <i className="fa fa-quote-right" />
                  </p>
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                  <img src={testi1} alt="no internet" />
                  <h5>Agung Nana</h5>
                  <p>IT backend Telkomsel</p>
                </div>
              </div>
            </div>
            <div>
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                    <i className="fa fa-quote-left" />
                    I patronized Ehizeex and when He delivered, I honestly fell
                    in love with the project He is a very honest guy and he
                    delivers ontime.
                    <i className="fa fa-quote-right" />
                  </p>
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                  <img src={testi1} alt="no internet" />
                  <h5>Agung Nana</h5>
                  <p>IT backend Telkomsel</p>
                </div>
              </div>
            </div>
            <div>
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                    <i className="fa fa-quote-left" />
                    I patronized Ehizeex and when He delivered, I honestly fell
                    in love with the project He is a very honest guy and he
                    delivers ontime.
                    <i className="fa fa-quote-right" />
                  </p>
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                  <img src={testi1} alt="no internet" />
                  <h5>Agung Nana</h5>
                  <p>IT backend Telkomsel</p>
                </div>
              </div>
            </div>
            <div>
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                    <i className="fa fa-quote-left" />
                    I patronized Ehizeex and when He delivered, I honestly fell
                    in love with the project He is a very honest guy and he
                    delivers ontime.
                    <i className="fa fa-quote-right" />
                  </p>
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                  <img src={testi1} alt="no internet" />
                  <h5>Agung Nana</h5>
                  <p>IT backend Telkomsel</p>
                </div>
              </div>
            </div>
            <div>
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                    <i className="fa fa-quote-left" />
                    I patronized Ehizeex and when He delivered, I honestly fell
                    in love with the project He is a very honest guy and he
                    delivers ontime.
                    <i className="fa fa-quote-right" />
                  </p>
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                  <img src={testi1} alt="no internet" />
                  <h5>Agung Nana</h5>
                  <p>IT backend Telkomsel</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
