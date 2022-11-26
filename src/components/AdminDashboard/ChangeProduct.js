import * as React from "react";
import IsAdminApi from "../Api/IsAdminApi";
import Loader from "../Loader";
import AddProduct from "./AddProduct";
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProduct";
import Container from "@mui/material/Container";

const ChangeProduct = () => {
  const { isAdmin, loader } = IsAdminApi();

  if (loader) {
    return <Loader />;
  } else {
    if (isAdmin === "admin") {
      return (
        <Container>
          <AddProduct />
          <DeleteProduct />
          <EditProduct />
        </Container>
      );
    } else {
      return <h1>You are not admin</h1>;
    }
  }
};

export default ChangeProduct;
