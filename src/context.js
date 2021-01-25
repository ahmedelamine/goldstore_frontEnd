import React, { useState, useEffect } from "react";
import data, { recommendData, goldPrice } from "./data";
export const DataContext = React.createContext();

const tProducts = () => {
  const rd = data.map((item) => {
    const goldP = goldPrice.filter((p) => p.country === item.country)[0].price;
    const itemPrice = item.weight * goldP;
    return { ...item, productprice: itemPrice };
  });
  return rd;
};

function DataProvider({ children }) {
  const [products] = useState(tProducts());
  const [fproducts, setFproducts] = useState(tProducts());
  const [loading, setLoading] = useState(true);
  const [price] = useState(goldPrice);
  const [priceD, setPriceD] = useState({
    minP: 0,
    maxP: 0,
  });
  const [filter, setFilter] = useState({
    minPrice: 0,
    maxPrice: 0,
  });
  const [type, setType] = useState("");

  // fun return the data for recommend products
  const getRecommend = () => {
    let recProducts = recommendData.map((item) => {
      let productID = item.productID;
      let recommends = products.find((item) => item.id === productID);
      return recommends;
    });
    return recProducts;
  };

  // fun return products by type ex: ring
  const getProducts = (type) => {
    let testData = fproducts.filter((item) => item.type === type);
    return testData;
  };

  // fun return all data about product by id
  const getProduct = (id) => {
    let productData = products.filter((item) => item.id === id);
    if (productData) {
      return productData;
    }
    return false;
  };

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  useEffect(() => {
    let minprice = Math.min(...products.map((item) => item.productprice));
    let maxprice = Math.max(...products.map((item) => item.productprice));

    setPriceD((prevPrices) => {
      return { ...prevPrices, minP: minprice, maxP: maxprice };
    });
    setFilter((prevFilter) => {
      return { ...prevFilter, minPrice: minprice, maxPrice: maxprice };
    });
    setLoading(false);
  }, [products, type]);

  // run filterProducts() when filter or type change
  useEffect(() => {
    // filter products by price and type
    const filterProducts = (type) => {
      let { minPrice, maxPrice } = filter;
      let tempProducts = [...products];
      if (type) {
        tempProducts = tempProducts.filter(
          (item) =>
            item.productprice >= minPrice &&
            item.productprice <= maxPrice &&
            item.type === type
        );
      } else {
        tempProducts = tempProducts.filter(
          (item) =>
            item.productprice >= minPrice && item.productprice <= maxPrice
        );
      }
      setFproducts(tempProducts);
    };
    filterProducts(type);
  }, [filter, type, products]);

  //  useEffect(() => {
  //   setFilter({
  //     minPrice: 0,
  //     maxPrice: 0
  //   });
  //  }, [type])

  return (
    <DataContext.Provider
      value={{
        data: fproducts,
        loading: loading,
        price: price,
        getRecommend: getRecommend,
        getProducts: getProducts,
        getProduct: getProduct,
        handleFilter: handleFilter,
        priceD: priceD,
        setType: setType,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
