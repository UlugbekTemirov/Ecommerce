import Container from "@mui/material/Container";
import * as React from "react";
import ShareModal from "../components/ShareModal";

// Dummy database
// import { products } from "../products";

// Components
import BasicCard from "../UI/BasicCard";
import ProductApi from "../components/Api/ProductsApi";
import Loader from "../components/Loader";

const Products = (props) => {
  const { data: products, loader } = ProductApi();

  const { addToCardHandler, search } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const [product, setProduct] = React.useState({});

  const shareHandler = (product) => {
    setProduct(product);
    handleOpen();
  };

  if (loader) return <Loader />;

  return (
    <Container maxWidth="xl">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-5 place-content-center text-center place-items-center">
        {search === "" &&
          products.map((product) => {
            return (
              <BasicCard
                key={product.id}
                addToCardHandler={addToCardHandler}
                product={product}
                shareHandler={shareHandler}
              />
            );
          })}
        {search !== "" &&
          products.map(
            (product) =>
              product.name.toLowerCase().includes(search.toLowerCase()) && (
                <BasicCard
                  key={product.id}
                  addToCardHandler={addToCardHandler}
                  product={product}
                  shareHandler={shareHandler}
                />
              )
          )}
        <ShareModal product={product} open={open} setOpen={setOpen} />
      </div>
    </Container>
  );
};

export default Products;
