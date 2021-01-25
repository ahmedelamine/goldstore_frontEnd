import React, {useContext, useEffect} from "react";
import {
  Recommend,
  ProductsList,
  SubTitle,
  ProductsFilter,
} from "../components";

import { useParams, Redirect } from "react-router-dom";
import { DataContext } from "../context";

function Product() {
  const { setType } = useContext(DataContext);

  

  const params = useParams();
  const title = `All ${params.type}`;
  const types = [
    "necklaces",
    "bracelets",
    "rings",
    "Belts",
    "earring",
    "engagement",
    "watches",
    "other",
  ];
  useEffect(() => {
    setType(params.type)
    return () => {
      setType("");
    }
  }, [params.type, setType])
  const ok = types.filter((type) => type === params.type);
  if (!ok[0]) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <SubTitle title="Recommend for you" />
      <Recommend />
      <SubTitle title={title} />
      <ProductsFilter />
      <ProductsList />
    </>
  );
}

export default Product;
