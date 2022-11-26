import * as React from "react";
import { useParams } from "react-router-dom";

// MUI
import Container from "@mui/material/Container";
import Loader from "../components/Loader";
import ProductApi from "../components/Api/ProductsApi";

const Information = () => {
  const { productSlug } = useParams();
  const { data, loader } = ProductApi();

  const [coverImage, setCoverImage] = React.useState();

  if (loader) return <Loader />;

  const product = data?.filter((product) => product.slug === productSlug)[0];

  const allImages = [product.coverImg, ...product.images];

  const getImageUrlHandler = (img) => {
    let indOf = allImages.indexOf(img);
    setCoverImage(allImages[indOf]);
  };

  return (
    <Container sx={{ display: "flex", alignItems: "center", mt: 5 }}>
      <div className="w-1/2">
        <img
          className="rounded-lg w-full max-h-96"
          src={coverImage ?? product.coverImg}
          alt={product.name}
        />
        <div className="flex mt-3 overflow-auto w-full h-28">
          {allImages.map((img, index) => (
            <img
              onClick={() => getImageUrlHandler(img)}
              className="w-40 mr-3 rounded-lg cursor-pointer"
              key={index}
              src={img}
              alt="product"
            />
          ))}
        </div>
      </div>
      <div className="w-1/2">
        <h1>{product.name}</h1>
      </div>
    </Container>
  );
};

export default Information;
