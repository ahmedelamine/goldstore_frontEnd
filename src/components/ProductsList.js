import React, { useContext } from "react";
import Product from "./Product";

import { DataContext } from "../context";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
function ProductsList() {
  const { data, getProducts, loading } = useContext(DataContext);
  const params = useParams();

  if (loading) {
    return <Loading />;
  }


  if (params.type) {
    const data = getProducts(params.type);

    return (
      <>
      {data.length ? <div className="all-products">
          {data.map((item) => (
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
        </div>: <div className="all-products">
          <h1>There is no product with this price</h1>
        </div> }
        
      </>
    );
  }

  return (
    <>
      <div className="all-products">
        {data.map((item) => (
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

export default ProductsList;
