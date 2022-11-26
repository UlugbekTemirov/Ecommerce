import { Button } from "@mui/material";
import React, { useState } from "react";
import { Images, Input, Radio } from "../Input";
import PostProductApi from "../Api/PostProductApi";

const AddProduct = (props) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState([]);
  const [brand, setBrand] = useState("");
  const [seller, setSeller] = useState("");
  const [category, setCategory] = useState("");
  const [season, setSeason] = useState("");
  const [coverImg, setCoverImg] = useState(null);
  const [images, setImages] = useState(null);
  const [style, setStyle] = useState("");
  const [price, setPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [sizes, setSizes] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");

  const getNameHandler = (e) => {
    setName(e.target.value);
  };

  const getGenderHandler = (e) => {
    setGender(e.target.value);
  };

  const getBrandHandler = (e) => {
    setBrand(e.target.value);
  };

  const getSeasonHandler = (e) => {
    setSeason(e.target.value);
  };

  const getStyleHandler = (e) => {
    setStyle(e.target.value);
  };

  const getCategoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const getPriceHandler = (e) => {
    setPrice(e.target.value);
  };

  const getDiscountPriceHandler = (e) => {
    setDiscountPrice(e.target.value);
  };

  const getImagesHandler = (e) => {
    setImages(e.target.files[0]);
  };

  const getCoverImageHandler = (e) => {
    setCoverImg(e.target.files[0]);
  };

  const getQuantityHandler = (e) => {
    setQuantity(e.target.value);
  };

  const getSizesHandler = (e) => {
    setSizes(e.target.value);
  };

  const getColorHandler = (e) => {
    setColor(e.target.value);
  };

  const getDescriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const getSellerHandler = (e) => {
    setSeller(e.target.value);
  };

  // const [response, setResponse] = React.useState({});
  // const [loading, setLoading] = React.useState(true);

  // SUBMIT HANDLER FUNCTION
  const submitHandler = () => {
    const product = {
      name,
      gender: ["men", "women"],
      brand,
      category,
      season: ["winter"],
      coverImg: "https://picsum.photos/id/237/200/300",
      seller: "637d20609647bb834e4815bc",
      images: [
        "https://picsum.photos/id/238/200/300",
        "https://picsum.photos/id/239/200/300",
        "https://picsum.photos/id/240/200/300",
      ],
      inStock: Boolean(quantity > 0),
      ratingAvg: 5.0,
      ratingCount: 0,
      style: ["sport", "party"],
      price,
      discountPrice,
      quantity,
      sizes: [34, 35, 36, 37, 38, 39, 40],
      color: ["black", "gray"],
      description,
      slug: "",
    };
    PostProductApi(product);
    // setResponse(response);
    // setLoading(loading);
  };

  return (
    <form className="w-1/2 m-auto">
      <h1 className="text-3xl text-center">Add Product</h1>
      <Input
        label="Name"
        type="text"
        pholder="Adidas Air 97"
        name="name"
        func={getNameHandler}
        value={name}
      />
      {/* <div className="flex mt-5">
        <h1 className="text-lg font-large text-slate-500 mr-5">Gender:</h1>
        <Radio
          label="male"
          type="radio"
          name="gander"
          id="forMale"
          func={getGenderHandler}
          value="male"
        />
        <Radio
          label="female"
          type="radio"
          name="gender"
          id="forFemale"
          value="female"
          func={getGenderHandler}
        />
      </div> */}
      <Input
        label="Gender"
        type="text"
        pholder="male, female, kids"
        name="gender"
        value={gender}
        func={getGenderHandler}
      />
      <Input
        label="Brand"
        type="text"
        pholder="Nike"
        name="brand"
        value={brand}
        func={getBrandHandler}
      />
      <Input
        label="Category"
        type="text"
        pholder="shoes"
        name="category"
        value={category}
        func={getCategoryHandler}
      />
      <Input
        label="Season"
        type="text"
        pholder="winter, summer"
        name="name"
        value={season}
        func={getSeasonHandler}
      />
      <Input
        label="Seller"
        type="text"
        pholder="John Doe"
        name="seller"
        value={seller}
        func={getSellerHandler}
      />
      <Images
        label="Cover image"
        type="file"
        accept="image/png, image/jpeg"
        name="coverImage"
        func={getCoverImageHandler}
      />
      <Images
        label="Images"
        type="file"
        name="images"
        accept="image/png, image/jpeg"
        func={getImagesHandler}
      />
      <Input
        label="Style"
        type="text"
        pholder="sport, clasic"
        name="style"
        value={style}
        func={getStyleHandler}
      />
      <Input
        label="Price"
        type="number"
        pholder="120 USD"
        name="price"
        value={price}
        func={getPriceHandler}
      />
      <Input
        label="DiscountPrice"
        type="text"
        pholder="Adidas Air 97"
        name="name"
        value={discountPrice}
        func={getDiscountPriceHandler}
      />
      <Input
        label="Quantity"
        type="number"
        pholder="120"
        name="quantity"
        value={quantity}
        func={getQuantityHandler}
      />
      <Input
        label="Sizes"
        type="text"
        pholder="30-40"
        name="sizes"
        value={sizes}
        func={getSizesHandler}
      />
      <Input
        label="Color"
        type="text"
        pholder="black, gray, ..."
        name="color"
        value={color}
        func={getColorHandler}
      />
      <Input
        label="Description"
        type="text"
        pholder="This product is amazing ..."
        name="description"
        value={description}
        func={getDescriptionHandler}
      />
      <Button
        onClick={submitHandler}
        variant="contained"
        sx={{ mt: 2, width: "30%" }}
      >
        Submit
      </Button>
    </form>
  );
};

export default AddProduct;

//  label, type, name, pholder, value, func, isValid, error
