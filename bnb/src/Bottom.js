import React from "react";
import One from "./img1.png";
import Two from "./img2.png";
import Three from "./img3.png";
import Star from "./star.png";

const Bottom = () => {
  return (
    <div className="bottom">
      <div className="bottam">
        <img src={One} alt="aa" className="one"></img>
        <p className="rating">
          <img src={Star} alt="" className="star" />
          <div className="statt">
            <span>5.0</span>
            <span>(6) • </span>
            <span>RSA</span>
          </div>
        </p>
        <p className="content">Enjoy a facial</p>
        <p>
          <strong>From R150</strong>/person
        </p>
      </div>
      <div className="bottem">
        <img src={Two} alt="bb" className="two"></img>
        <p className="ratinga">
          <img src={Star} alt="" className="star" />
          <div className="stata">
            <span>10.0</span>
            <span>(1) • </span>
            <span>RSA</span>
          </div>
        </p>
        <p className="contenta">Some breakfast?</p>
        <p>
          <strong>From R150</strong>/person
        </p>
      </div>
      <div className="bottim">
        <img src={Three} alt="cc" className="three"></img>
        <p className="ratingb">
          <img src={Star} alt="" className="star" />
          <div className="statb">
            <span>4.0</span>
            <span>(8) • </span>
            <span>RSA</span>
          </div>
        </p>
        <p className="contentb">Let's watch a movie</p>
        <p>
          <strong>From R150</strong>/person
        </p>
      </div>
    </div>
  );
};

export default Bottom;
