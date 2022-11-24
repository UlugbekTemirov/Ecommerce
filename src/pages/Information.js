import * as React from "react";
import { useParams } from "react-router-dom";

// MUI
import Container from "@mui/material/Container";
import Loader from "../components/Loader";

const Information = (props) => {
  const { products } = props;
  const { productSlug } = useParams();
  const product = products.filter((product) => product.slug === productSlug)[0];

  if (!product) {
    return <Loader />;
  } else {
    const [coverImage, setCoverImage] = React.useState(product.coverImg);

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
            src={coverImage}
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
  }
};

export default Information;
