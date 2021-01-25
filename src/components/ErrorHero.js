import React from "react";
import { Link } from "react-router-dom";

import img1 from "../images/4.jpg";
import img2 from "../images/5.jpg";
import img3 from "../images/6.jpg";

function ErrorHero({ title, subTitle, buttonText, des }) {
  return (
    <div className="hero-error">
      <div className="overlay"></div>
      <div className="img">
        <img src={img1} alt="hero" />
      </div>
      <div className="img">
        <img src={img2} alt="hero" />
      </div>
      <div className="img">
        <img src={img3} alt="hero" />
      </div>
      <div className="s-img">
        <img src={img3} alt="hero" />
      </div>
      <div className="hero-text">
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
        <div className="hero-button">
          <Link to={des}>{buttonText}</Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorHero;
