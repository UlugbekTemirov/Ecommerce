import * as React from "react";
import Button from "@mui/material/Button";

const EditProduct = () => {
  const [addprod, setaddprod] = React.useState(false);
  const openProductHandler = () => {
    setaddprod((prev) => !prev);
  };

  return (
    <form className="w-1/2 m-auto mt-5">
      <h1
        onClick={openProductHandler}
        className="text-3xl text-center bg-gray-800 px-20 py-2 rounded-3xl relative cursor-pointer"
      >
        Edit Product <span className="absolute right-10 font-bold">+</span>
      </h1>
      <div
        className={`ease-in duration-300 overflow-hidden flex justify-center mt-2
      ${!addprod && "hidden"}`}
      >
        <Button sx={{ w: "70%" }} variant="contained">
          Select which product do you want to edit
        </Button>
      </div>
    </form>
  );
};

export default EditProduct;
