import React from "react";
import bg from "../../assets/images/ilustration/shape-bg.png";
import "../../assets/css/footerProfile.css";

function FooterProfileComponent() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img src={bg} alt="no internet connection" />
      </div>
    </div>
  );
}

export default FooterProfileComponent;
