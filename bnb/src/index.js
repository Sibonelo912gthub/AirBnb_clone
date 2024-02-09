import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navb from "./Navbar";
import Hero from "./Main";
import Divider from "./Divider";
import Bottom from "./Bottom";

const Bnb = () => {
  return (
    <div>
      <div className="bdy">
        <Navb />
        <Divider />
        <Hero />
        <Bottom />
      </div>
    </div>
  );
};

ReactDOM.render(<Bnb />, document.getElementById("root"));
