import React, { useContext, useEffect, useState } from "react";
import Product from "./Product";
import { DataContext } from "../context";
import { SubTitle, ErrorHero } from "../components";
const getKeys = () => {
  var archive = [],
    keys = Object.keys(localStorage),
    i = 0,
    key;

  for (; (key = keys[i]); i++) {
    archive.push(key);
  }

  return archive;
};
function CompareConatiner() {
  const { getProduct } = useContext(DataContext);
  const [compareProducts, setCompareProducts] = useState([]);
  const [allkey, setAllKey] = useState(getKeys());

  useEffect(() => {
    setCompareProducts(allkey.map((key) => getProduct(key)[0]));
    //eslint-disable-next-line
  }, [allkey]);

  if (!compareProducts.length) {
    return (
      <>
        <ErrorHero
          title="The is not products for compare"
          subTitle="Go select products to compare"
          buttonText="See all products"
          des="/products"
        />
      </>
    );
  }

  return (
    <>
      <SubTitle title="Compare" />
      <div className="compare-all">
        {compareProducts.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            weight={item.weight}
            name={item.name}
            pictures={item.pictures[0]}
            price={item.productprice}
            onC={setAllKey}
          />
        ))}
      </div>
    </>
  );
}

export default CompareConatiner;
