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
import { URL } from "./globals/global";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
  const products = ProductApi();

  // COOKIES CONFIG
  const cookie = new Cookies();

  // CONTROL DRAWER STATE
  const [drawerState, setDrawerState] = React.useState(false);

  // PAGES
  const pages = ["Home", "Products", "Category", "Admin"];

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
  const jwt = cookie.get("jwt");

  const [isAdmin, setIsAdmin] = React.useState("");
  React.useEffect(() => {
    console.log(jwt);
    fetch(`${URL}/api/v1/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${jwt}`,
      },
    })
      .then((promise) => promise.json())
      .then((response) => {
        setIsAdmin(response.data?.doc?.role);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <Router>
        <Navbar
          isAdmin={isAdmin}
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
          <Route
            path="products/:productSlug"
            element={<Information products={products} />}
          />
          {Boolean(jwt) && (
            <Route path="profile/:userName" element={<Profile />} />
          )}
          {isAdmin === "admin" && (
            <Route path="admin" element={<AdminDashboard />} />
          )}
          <Route path="category" element={<Category />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
