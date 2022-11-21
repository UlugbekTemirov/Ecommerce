import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Counter from "../../util/Counter";

import deleteIcon from "../../icons/delete.png";

export default function BasketCard(props) {
  const { basketItem, setCount, count, deleteBusketHandler } = props;
  if (basketItem.length === 0) return <h1>No products in Busket</h1>;

  return (
    <>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "2px solid #999",
          width: 380,
          mt: 1,
        }}
      >
        <Box>
          <CardContent sx={{ flex: "1 0 auto", position: "relative" }}>
            <button
              onClick={() => deleteBusketHandler(basketItem.id)}
              className="absolute top-4 right-0 hover:bg-red-800 bg-red-700 rounded p-1 active:bg-red-900"
            >
              <img className="w-6" src={deleteIcon} alt="delete" />
            </button>
            <Typography component="div" variant="h5">
              {basketItem.name}
            </Typography>
            <Typography
              sx={{ mb: 1 }}
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              <Counter count={count} setCount={setCount} />
            </Typography>
            <Button sx={{ mr: 1 }} variant="outlined">
              More
            </Button>
            <Button sx={{ mx: 1 }} variant="contained">
              Buy
            </Button>
          </CardContent>
        </Box>
        <CardMedia
          sx={{ maxWidth: 160, maxHeight: 150 }}
          component="img"
          image={basketItem.coverImg}
          alt={basketItem.name}
        />
      </Card>
    </>
  );
}
