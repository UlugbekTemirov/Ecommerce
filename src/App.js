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
// import { products } from "./products";
import Profile from "./pages/Profile";
import ProductApi from "./components/Api/ProductsApi";
import AdminDashboard from "./pages/AdminDashboard";
import ChangeProduct from "./components/AdminDashboard/ChangeProduct";

// JWT
import { jwt } from "./globals/global";

const App = () => {
  // COOKIES CONFIG
  const cookie = new Cookies();

  // CONTROL DRAWER STATE
  const [drawerState, setDrawerState] = React.useState(false);

  // PAGES
  const pages = ["Home", "Products"];

  // CONTROL MODAL STATE
  const [open, setOpen] = React.useState(false);

  // CONTROL MODAL STATE FUNCTION
  const handleOpen = () => {
    setOpen(true);
  };

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
  const addToCardHandler = (product) => {
    if (cookie.get("jwt")) {
      console.log(product);
      if (basket.length === 0) {
        setBasket((prev) => [...prev, product]);
        product.basketCount = 1;
        toast.success("Product added to the busket!", { theme: "dark" });
      } else {
        let counter = 0;
        for (let i = 0; i < basket.length; i++) {
          if (basket[i].id === product.id) {
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

  return (
    <React.Fragment>
      <Router>
        <Navbar
          handleOpen={handleOpen}
          setDrawerState={setDrawerState}
          pages={pages}
          basket={basket}
          deleteBusketHandler={deleteBusketHandler}
          searchHandler={searchHandler}
        />
        <Drawer
          pages={pages}
          setDrawerState={setDrawerState}
          drawerState={drawerState}
        />
        {/* <BottomNav pages={pages} /> */}
        <Auth cookie={cookie} setOpen={setOpen} open={open} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="products"
            element={
              <Products search={search} addToCardHandler={addToCardHandler} />
            }
          />
          <Route path="products/:productSlug" element={<Information />} />
          {Boolean(jwt) && (
            <Route path="profile/:userName" element={<Profile />} />
          )}
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/changeproduct" element={<ChangeProduct />} />

          {/* <Route path="category" element={<Category />} /> */}
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
