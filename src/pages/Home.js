import React from "react";
import { Hero, Recommend, Categories, SubTitle } from "../components";

function Home() {
  return (
    <>
      <Hero
        title="Welcome to our store"
        subTitle="We have the best gold products"
        buttonText="See The Products"
        des="/products"
      />
      <SubTitle title="Recommend for you" />
      <Recommend />
      <Categories />
    </>
  );
}

export default Home;
