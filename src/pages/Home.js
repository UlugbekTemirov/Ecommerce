import * as React from "react";

// COMPONENTS
import Products from "../components/Products/Products";

const Home = (props) => {
  const { addToCardHandler } = props;
  return <Products addToCardHandler={addToCardHandler} />;
};

export default Home;
