import React from "react";
import "../../assets/css/screenHeading.css";

function ScreenHeading({ title, subHeading }) {
  return (
    <div className="heading-container">
      <div className="screen-header">
        <span>{title}</span>
      </div>
      {subHeading ? (
        <div className="screen-sub-heading">
          <span>{subHeading}</span>
        </div>
      ) : (
        <div></div>
      )}

      <div className="heading-seperator">
        <div className="seperator-line">
          <div className="seperator-blob">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScreenHeading;
