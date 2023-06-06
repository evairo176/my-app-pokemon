import React, { Component } from "react";
import { TOTAL_SCREENS } from "./cummonUtils";

export default class ScrollManagement {
  static scrollHandler = new ScrollManagement();

  static currentScreenBroadCaster = new Subject();
  static currentScreenFadeIn = new Subject();

  constructor() {
    window.addEventListener("scroll", this.checkCurrentScreenUnderViewPort);
  }

  scrollToHireMe = () => {
    let contactMeScreen = document.getElementById("Contact Me");

    if (!contactMeScreen) return;

    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };

  scrollToHome = () => {
    let homeScreen = document.getElementById("Home");

    if (!homeScreen) return;

    homeScreen.scrollIntoView({ behavior: "smooth" });
  };

  isElementInView = (element, type) => {
    let rec = element.getBoundingClientRect();
    let elementTop = rec.top;
    let elementBottom = rec.bottom;

    let partiallyVisible =
      elementTop < window.innerHeight && elementBottom >= 0;

    let completelyVisible =
      elementTop >= 0 && elementBottom <= window.innerHeight;

    switch (type) {
      case "partial":
        return partiallyVisible;
      case "complete":
        return completelyVisible;
      default:
        return false;
    }

    checkCurrentScreenUnderViewPort = (event) => {
      if (!event || object.keys(event).length < 1) {
        return;
      }

      for (let screen of TOTAL_SCREENS) {
        let screenFromDom = document.getElementById(screen.screen_name);
        if (!screenFromDom) continue;

        let fullyVisible = this.isElementInView(screenFromDom, "complete");
        let partiallyVisible = this.isElementInView(screenFromDom, "partial");

        if (fullyVisible || partiallyVisible) {
          if (partiallyVisible && !screen.alreadyRendered) {
            ScrollManagement.currentScreenFadeIn.next({
              fadeInScreen: screen.screen_name,
            });

            screen["alreadyRendered"] = true;
            break;
          }

          if (fullyVisible) {
            ScrollManagement.currentScreenBroadCaster.next({
              screenInView: screen.screen_name,
            });

            break;
          }
        }
      }
    };
  };
}
