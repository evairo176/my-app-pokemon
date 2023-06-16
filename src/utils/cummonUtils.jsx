import Resume from "../pages/Resume/Resume";
import About from "../pages/aboutMe/About";
import Home from "../pages/home/Home";
import Testimonial from "../pages/testimonial/Testimonial";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "About",
    component: About,
  },
  {
    screen_name: "Resume",
    component: Resume,
  },
  {
    screen_name: "Testimonial",
    component: Testimonial,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) {
    return -1;
  } else {
    for (let i = 0; i < TOTAL_SCREENS.length; i++) {
      if (TOTAL_SCREENS[i].screen_name === screen_name) {
        return i;
      }
    }
    return -1;
  }
};
