import React, { useState } from "react";
import { GET_SCREEN_INDEX, TOTAL_SCREENS } from "../../utils/cummonUtils";
import ScrollManagement from "../../utils/ScrollManagement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/header.css";

function HeaderComponent() {
  const [selectScreen, setSelectScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;

    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);

    if (screenIndex < 0) return;
  };

  let currentScreenSubcription =
    ScrollManagement.currentScreenBroadCaster.subscribe(updateCurrentScreen);

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((screen, key) => {
      return (
        <div
          key={screen.screen_name}
          className={getHeaderOptionsClass(key)}
          onClick={() => switchScreen(key, screen)}
        >
          <span>{screen.screen_name}</span>
        </div>
      );
    });
  };

  const getHeaderOptionsClass = (key) => {
    let classes = "header-option";

    if (key < TOTAL_SCREENS.length - 1) {
      classes += "header-option-seperator";
    }

    if (selectScreen === key) {
      classes += "selected-header-option";
      return;
    }
  };

  const switchScreen = (key, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);

    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectScreen(key);
    setShowHeaderOptions(false);
  };

  return (
    <div>
      <div
        className="header-container"
        onClick={() => setShowHeaderOptions(!showHeaderOptions)}
      >
        <div className="header-parent">
          <div
            className="header-hamburger"
            onClick={() => setShowHeaderOptions(!showHeaderOptions)}
          >
            <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
          </div>
          <div className="header-logo">
            <span>EVAIRO~</span>
          </div>
          <div
            className={
              showHeaderOptions
                ? "header-option show-hamburger-option"
                : "header-option"
            }
          >
            {getHeaderOptions()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
