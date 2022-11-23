import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { toast } from "react-toastify";

// COOKIES
import Cookies from "universal-cookie";

// MUI
import Container from "@mui/material/Container";

// COMPONENTS
import Navbar from "./components/Navbar";
import Drawer from "./components/Drawer";
import Auth from "./components/auth/index";

// pages
import Home from "./pages/Home";
import Category from "./pages/Category";
import Products from "./pages/Products";
import Information from "./pages/Information";

// Dummy Products
import { products } from "./products";
import Profile from "./pages/Profile";

const App = () => {
  // COOKIES CONFIG
  const cookie = new Cookies();

  // CONTROL DRAWER STATE
  const [drawerState, setDrawerState] = React.useState(false);

  // PAGES
  const pages = ["Home", "Products", "Category"];

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
  // const setAuthHandler = (authCondition) => {
  //   setAuthenticated(authCondition);

  //   // STORING ISLOGGEDIN PARAM IN LOCAL STORAGE
  //   localStorage.setItem("authenticated", authCondition);
  // };

  // DUMMY DATA FOR BASKET
  const [basket, setBasket] = React.useState([]);

  // DELETE FROM BASKET FUNCTION
  const deleteBusketHandler = (id) => {
    setBasket(basket.filter((item) => item.id !== id));
    toast.success("Deleted!", { theme: "dark" });
  };

  // SEARCH HANDLER
  const [search, setSearch] = React.useState("");
  const searchHandler = (search) => {
    setSearch(search);
  };

  // ADD TO CARD HANDLER
  const addToCardHandler = (id) => {
    if (cookie.get("jwt")) {
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
    } else {
      toast.error("You are not authenticated", { theme: "dark" });
    }
  };

  // GET USER ID HANDLER
  const getUserHandler = (user) => {
    localStorage.setItem("name", user.name);
    localStorage.setItem("email", user.email);
  };

  return (
    <React.Fragment>
      <Router>
        <Navbar
          // authenticated={authenticated}
          handleOpen={handleOpen}
          setDrawerState={setDrawerState}
          pages={pages}
          basket={basket}
          deleteBusketHandler={deleteBusketHandler}
          searchHandler={searchHandler}
          // user={user}
        />
        <Drawer
          pages={pages}
          setDrawerState={setDrawerState}
          drawerState={drawerState}
        />
        {/* <BottomNav pages={pages} /> */}
        <Auth
          cookie={cookie}
          // setAuthHandler={setAuthHandler}
          setOpen={setOpen}
          open={open}
          getUserHandler={getUserHandler}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="products"
            element={
              <Products search={search} addToCardHandler={addToCardHandler} />
            }
          />
          <Route
            path="products/:productSlug"
            element={<Information products={products} />}
          />
          <Route path="profile/:userId" element={<Profile />} />
          <Route path="category" element={<Category />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Router>
      <Container></Container>
    </React.Fragment>
  );
};

export default App;
