import React, { useEffect, useState } from "react";
import "../../assets/css/landingpage.css";

function NavbarComponent() {
  const [toggle, setToggle] = useState(false);
  //   const [offset, setOffset] = useState(0);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 20) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleClick = () => {
    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  return (
    <nav className={`container-navbar ${sticky ? "sticky" : ""}`}>
      <div className="container-logo">
        <div className="logo">DICKI PRASETYA</div>
      </div>
      <ul className={`menu-list ${toggle ? "open" : ""}`}>
        <li>
          <div className={`nav-item-cs ${sticky ? "sticky" : ""}`}>
            <span>Home</span>
            <div className="liquid"></div>
          </div>
        </li>
        <li>
          <div className={`nav-item-cs ${sticky ? "sticky" : ""}`}>
            <span>About</span>
            <div className="liquid"></div>
          </div>
        </li>
        <li>
          <div className={`nav-item-cs ${sticky ? "sticky" : ""}`}>
            <span>Service</span>
            <div className="liquid"></div>
          </div>
        </li>
        <li>
          <div className={`nav-item-cs ${sticky ? "sticky" : ""}`}>
            <span>Contact</span>
            <div className="liquid"></div>
          </div>
        </li>
      </ul>
      <div
        id="nav-icon1"
        className={`icon-menu ${toggle ? "open" : ""}`}
        onClick={() => toggleClick()}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default NavbarComponent;
