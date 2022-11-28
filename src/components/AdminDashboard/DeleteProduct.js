import * as React from "react";
import { Input } from "../Input";
import Button from "@mui/material/Button";
import DelProdModal from "./DelProdModal";
import DeleteProductApi from "../Api/DeleteProductApi";
import Loader from "../Loader";

const DeleteProduct = () => {
  const [addprod, setaddprod] = React.useState(false);
  const openProductHandler = () => {
    setaddprod((prev) => !prev);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const [productId, setProductId] = React.useState("");
  const getIdHandler = (id) => {
    setProductId(id);
  };

  const { loading, response } = DeleteProductApi(productId);

  if (loading) return <Loader />;
  return (
    <form className="w-1/2 m-auto mt-5">
      <h1
        onClick={openProductHandler}
        className="text-3xl text-center bg-gray-800 px-20 py-2 rounded-3xl relative cursor-pointer"
      >
        Delete Product <span className="absolute right-10 font-bold">+</span>
      </h1>
      <div
        className={`ease-in duration-300 overflow-hidden flex justify-center mt-2
          ${!addprod && "hidden"}`}
      >
        <Button sx={{ w: "70%" }} variant="contained" onClick={handleOpen}>
          Select which product do you want to delete
        </Button>
      </div>
      <DelProdModal open={open} setOpen={setOpen} getIdHandler={getIdHandler} />
    </form>
  );
};

export default DeleteProduct;

//  label, type, name, pholder, value, func, isValid, error
