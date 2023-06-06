import React from "react";
import ProfileComponent from "../../components/moleculars/ProfileComponent";
import FooterProfileComponent from "../../components/moleculars/FooterProfileComponent";
import "../../assets/css/home.css";
import HeaderComponent from "../../components/moleculars/HeaderComponent";

function Home() {
  return (
    <>
      <div className="home-container">
        <HeaderComponent />
        <ProfileComponent />
        <FooterProfileComponent />
      </div>
    </>
  );
}

export default Home;
