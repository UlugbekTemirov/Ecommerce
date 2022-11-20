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
import BottomNav from "./components/BottomNav/BottomNav";

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
  console.log(cookie.get("jwt"));

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

  // React.useState(() => {
  //   // CHECK IF LOGGED IN
  // }, []);

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

  // ADD TO CARD HANDLER
  const addToCardHandler = (id) => {
    const product = products.filter((product) => product.id === id);
    toast.success("Product added to the busket!", { theme: "dark" });
    setBasket((prev) => [...prev, product]);
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
