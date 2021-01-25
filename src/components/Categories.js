import React from "react";
import SubTitle from "./SubTitle";
import { Link } from "react-router-dom";

import bracelet from "../images/bracelet/1.jpg";
import earrings from "../images/earrings/1.jpg";
import necklace from "../images/necklace/1.jpg";
import rings from "../images/rings/2.jpg";
import watche from "../images/watche/1.jpg";
import other from "../images/4.jpg";

function Cat({ img, title }) {
  const url = `/${title}`;
  return (
    <div className="cat">
      <Link to={url}>
        <img src={img} alt="gold store" />
        <div className="container">
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
}

function Categories() {
  return (
    <>
      <SubTitle title="Shope By Categories" />
      <div className="categories">
        <Cat img={necklace} title="necklaces" />
        <Cat img={bracelet} title="bracelets" />
        <Cat img={rings} title="rings" />
        <Cat img={watche} title="Belts" />
        <Cat img={earrings} title="earrings" />
        <Cat img={rings} title="engagement" />
        <Cat img={watche} title="watches" />
        <Cat img={other} title="other" />
      </div>
    </>
  );
}

export default Categories;
