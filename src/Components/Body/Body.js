import React from "react";
import ImageHeroforMobile from "../../images/image-hero-mobile.png";
import ImageHeroforDesktop from "../../images/image-hero-desktop.png";
import AudioPhile from "../../images/client-audiophile.svg";
import Maker from "../../images/client-maker.svg";
import Databiz from "../../images/client-databiz.svg";
import Meet from "../../images/client-meet.svg";
import "./Body.css";

const Body = () => {
  return (
    <div className="Body">
      <div className="leftBody">
        <h1>Make Remote Work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn More</button>
        <div className="logos">
          <img src={Databiz} alt="" />
          <img src={AudioPhile} alt="" />
          <img src={Meet} alt="" />
          <img src={Maker} alt="" />
        </div>
      </div>
      <div className="rightBody">
        <img src={ImageHeroforDesktop} className="forDesktop" alt="" />
        <img src={ImageHeroforMobile} className="forMobile" alt="" />
      </div>
    </div>
  );
};

export default Body;
