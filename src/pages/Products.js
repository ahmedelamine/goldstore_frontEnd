import React from "react";
import {
  Recommend,
  ProductsList,
  SubTitle,
  ProductsFilter,
} from "../components";

function Products() {
  return (
    <>
      <SubTitle title="Recommend for you" />
      <Recommend />
      <SubTitle title="All products" />
      <ProductsFilter />
      <ProductsList />
    </>
  );
}

export default Products;
