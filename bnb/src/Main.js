import React from "react";
import Photo from "./photo-grid.png";

const Hero = () => {
  return (
    <div className="main">
      <section>
        <div className="style">
        <img src={Photo} alt="" className="styling" />
        </div>
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </section>
    </div>
  );
};

export default Hero;
