import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function BasketCard(props) {
  const { basketItem } = props;
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
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Live From Space
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Mac Miller
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          sx={{ maxWidth: 150, maxHeight: 100 }}
          component="img"
          image={basketItem.coverImg}
          alt={basketItem.name}
        />
      </Card>
    </>
  );
}
