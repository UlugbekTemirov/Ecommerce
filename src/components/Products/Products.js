import Container from "@mui/material/Container";
import * as React from "react";

// Dummy database
import { products } from "../../products";

// Components
import BasicCard from "../../UI/BasicCard";

const Products = (props) => {
  const { addToCardHandler } = props;

  return (
    <Container maxWidth="xl">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-5 place-content-center text-center place-items-center">
        {products.map((product) => (
          <BasicCard
            addToCardHandler={addToCardHandler}
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </Container>
  );
};

export default Products;
