import React, { Fragment } from "react";
import bg from "../../assets/images/ilustration/image 8.png";
import TemplateComponent from "../../components/atoms/TemplateComponent";
import Gap from "../../components/atoms/Gap";
import FloatingSquare from "../../components/atoms/FloatingSquare";
import "../../assets/css/landingpage.css";
import "../../assets/css/responsive.css";
import SliderComponent from "../../components/moleculars/SliderComponent";
import Maps from "../../components/moleculars/Maps";

function Home() {
  return (
    <Fragment>
      <TemplateComponent>
        {" "}
        <section className="banner">
          <div className="container-banner">
            <div className="dot-dot"></div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="container-content-banner">
                  <div className="title">A Digital Product Agency</div>
                  <Gap height={40} />
                  <div className="p-title">
                    Leading digital agency with solid design and development
                    expertise. We build readymade websites, mobile applications,
                    and elaborate online business services.
                  </div>
                  <Gap height={60} />
                  <button className="btn-contact">Contact Now</button>
                  <Gap height={30} />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="image-banner">
                  <img src={bg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <FloatingSquare />
      </TemplateComponent>
      <section className="idea">
        <div className="container-idea-f">
          <TemplateComponent>
            <div className="content-idea">
              <div className="title">How can we help your Business ?</div>
              <div className="p-title">
                We build readymade websites, mobile applications, and elaborate
                online business services.
              </div>
            </div>
          </TemplateComponent>

          <SliderComponent />
        </div>
      </section>
      <TemplateComponent>
        <Maps />
      </TemplateComponent>
    </Fragment>
  );
}

export default Home;
