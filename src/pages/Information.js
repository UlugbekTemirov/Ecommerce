import * as React from "react";
import { Navigate, useParams } from "react-router-dom";

const Information = (props) => {
  const { products } = props;
  const { productSlug } = useParams();
  const product = products.filter((product) => product.slug === productSlug)[0];
  if (!product) {
    return <h1>{productSlug} product does not exist in our store</h1>;
  }

  return (
    <React.Fragment>
      <h1>{product.name}</h1>
      <img src={product.coverImg} alt={product.slug} />
    </React.Fragment>
  );
};

export default Information;
