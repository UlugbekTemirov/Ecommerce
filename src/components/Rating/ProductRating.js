import * as React from "react";

// MUI
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const ProductRating = (props) => {
  const { rating, ratingCount } = props;
  return (
    <div className="flex items-center w-full justify-center">
      <Stack spacing={1}>
        <Rating
          readOnly
          name="half-rating"
          defaultValue={rating}
          precision={0.5}
        />
      </Stack>
      <h1 className="m-0 text-lg pt-1 ml-2 text-gray-500">{ratingCount}</h1>
    </div>
  );
};

export default ProductRating;
