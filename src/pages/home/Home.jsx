import React from "react";
import ProfileComponent from "../../components/moleculars/ProfileComponent";
import FooterProfileComponent from "../../components/moleculars/FooterProfileComponent";
import "../../assets/css/home.css";

function Home() {
  return (
    <>
      <div className="home-container">
        <ProfileComponent />
        <FooterProfileComponent />
      </div>
    </>
  );
}

export default Home;
