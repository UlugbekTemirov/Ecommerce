import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// COOKIES
import Cookies from "universal-cookie";

import Navbar from "./components/Navbar";
import Container from "@mui/material/Container";
import Drawer from "./components/Drawer";
// import BottomNav from "./components/BottomNav/BottomNav";

// pages
import Home from "./pages/Home";
import Category from "./pages/Category";
import Auth from "./components/auth/index";

// Dummy Products
import { products } from "./products";
import { toast } from "react-toastify";

const App = () => {
  // COOKIES CONFIG
  const cookie = new Cookies();

  // CONTROL DRAWER STATE
  const [drawerState, setDrawerState] = React.useState(false);

  // PAGES
  const pages = ["Home", "Category"];

  // CONTROL MODAL STATE
  const [open, setOpen] = React.useState(false);

  // CONTROL MODAL STATE FUNCTION
  const handleOpen = () => {
    setOpen(true);
  };

  // AUTH CONTROLLER
  const [authenticated, setAuthenticated] = React.useState(
    localStorage.getItem("authenticated") !== null
      ? localStorage.getItem("authenticated") === "false"
        ? false
        : true
      : false
  );

  React.useState(() => {
    if (!Boolean(cookie.get("jwt"))) {
      localStorage.removeItem("authenticated");
      // location.reload();
    }
  }, [cookie.get("jwt")]);

  // GETS AUTH STATE FROM REGISTER COMPONENT
  const setAuthHandler = (authCondition) => {
    setAuthenticated(authCondition);

    // STORING ISLOGGEDIN PARAM IN LOCAL STORAGE
    localStorage.setItem("authenticated", authCondition);
  };

  // DUMMY DATA FOR BASKET
  const [basket, setBasket] = React.useState([]);

  // DELETE FROM BASKET FUNCTION
  const deleteBusketHandler = (id) => {
    setBasket(basket.filter((item) => item.id !== id));
    toast.success("Deleted!", { theme: "dark" });
  };

  // ADD TO CARD HANDLER
  const addToCardHandler = (id) => {
    const getProduct = products.filter((product) => product.id === id);
    const product = getProduct[0];

    if (basket.length === 0) {
      setBasket((prev) => [...prev, product]);
      product.basketCount = 1;
      toast.success("Product added to the busket!", { theme: "dark" });
    } else {
      let counter = 0;
      for (let i = 0; i < basket.length; i++) {
        if (basket[i].id === id) {
          toast.error("Product already exist!", { theme: "dark" });
        } else {
          ++counter;
          if (counter === basket.length) {
            setBasket((prev) => [...prev, product]);
            product.basketCount = 1;
            toast.success("Product added to the busket!", { theme: "dark" });
          }
        }
      }
      counter = 0;
    }
  };

  return (
    <React.Fragment>
      <Router>
        <Navbar
          authenticated={authenticated}
          handleOpen={handleOpen}
          setDrawerState={setDrawerState}
          pages={pages}
          basket={basket}
          deleteBusketHandler={deleteBusketHandler}
        />
        <Drawer
          pages={pages}
          setDrawerState={setDrawerState}
          drawerState={drawerState}
        />
        {/* <BottomNav pages={pages} /> */}
        <Auth
          cookie={cookie}
          setAuthHandler={setAuthHandler}
          setOpen={setOpen}
          open={open}
        />
        <Routes>
          <Route
            path="/"
            element={<Home addToCardHandler={addToCardHandler} />}
          />
          <Route path="category" element={<Category />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Router>
      <Container></Container>
    </React.Fragment>
  );
};

export default App;
