import * as React from "react";
import { Link } from "react-router-dom";

// MUI
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import ProductRating from "../components/Rating";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BasicCard(props) {
  const { product, addToCardHandler, shareHandler } = props;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        minWidth: 310,
        position: "relative",
        borderRadius: "15px",
        height: "100%",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={product.seller == 1 ? "Akang kuchaydi uje" : "sotuvchiman"}
        subheader={product.createdAt}
      />
      <CardMedia
        sx={{ height: 200, width: "100%" }}
        component="img"
        height="194"
        image={product.coverImg}
        alt={product.name}
      />
      <CardContent>
        <Typography
          sx={{ fontSize: "20px" }}
          variant="body2"
          color="text.primary"
        >
          {product.name} | {product.brand}
        </Typography>
        <Typography
          sx={{ fontSize: "20px" }}
          variant="body2"
          color="text.primary"
        >
          {product.price} USD
        </Typography>
        <ProductRating
          rating={product.ratingAvg}
          ratingCount={product.ratingCount}
        />
      </CardContent>
      <CardActions disableSpacing>
        <Link to={product.slug}>
          <Button variant="outlined" sx={{ mr: 1 }}>
            More
          </Button>
        </Link>
        <IconButton onClick={() => shareHandler(product)} aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          aria-label="share"
          onClick={() => addToCardHandler(product)}
        >
          <AddShoppingCartIcon />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse
        className="bg-black-500/75 backdrop-blur-xl"
        sx={{
          position: "absolute",
          bottom: 50,
          left: 0,
        }}
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        <CardContent sx={{ opacity: 1 }}>{product.description}</CardContent>
      </Collapse>
    </Card>
  );
}
