import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CategoryIcon from "@mui/icons-material/Category";

import { Link } from "react-router-dom";

const BottomNav = (props) => {
  const { pages } = props;

  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        display: { md: "none", xs: "flex" },
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;",
      }}
      value={value}
      onChange={handleChange}
    >
      {pages.map((page) => (
        <BottomNavigationAction
          sx={{ p: 0, overflow: "hidden" }}
          key={page}
          label={page}
          value={page}
          icon={
            (page === "Home" && (
              <Link to={page}>
                <HomeIcon sx={{ width: 200, height: 40, mb: -1 }} />
              </Link>
            )) ||
            (page === "Category" && (
              <Link to={page}>
                <CategoryIcon sx={{ width: 200, height: 40, mb: -1 }} />
              </Link>
            )) ||
            (page === "Basket" && (
              <Link to={page}>
                <ShoppingBasketIcon sx={{ width: 200, height: 40, mb: -1 }} />
              </Link>
            ))
          }
        />
      ))}
    </BottomNavigation>
  );
};

export default BottomNav;
