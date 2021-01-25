import React, { useContext } from "react";
import { DataContext } from "../context";

function GoldPrice() {
  const { price } = useContext(DataContext);
  return (
    <div className="gold-price">
      <h3>GoldPrice:</h3>
      {price.map((item) => (
        <span key={item.id}>
          {item.country}: 1g = {item.price} DA{" "}
        </span>
      ))}
    </div>
  );
}

export default GoldPrice;
