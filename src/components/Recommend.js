import React, { useContext } from "react";
import Product from "./Product";

import { DataContext } from "../context";

function Recommend() {
  const { getRecommend } = useContext(DataContext);
  const recommendData = getRecommend();
  return (
    <>
      <div className="recommend">
        {recommendData.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            weight={item.weight}
            name={item.name}
            pictures={item.pictures[0]}
            price={item.productprice}
            country={item.country}
          />
        ))}
      </div>
    </>
  );
}

export default Recommend;
