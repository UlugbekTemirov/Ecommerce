import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Container from "@mui/material/Container";
import Drawer from "./components/Drawer";
import BottomNav from "./components/BottomNav/BottomNav";

// pages
import Home from "./pages/Home";
import Category from "./pages/Category";
import Basket from "./pages/Basket";
import Auth from "./components/auth/index";

const App = () => {
  const [drawerState, setDrawerState] = React.useState(false);
  const pages = ["Home", "Category", "Basket"];

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const [authenticated, setAuthenticated] = React.useState(
    localStorage.getItem("authenticated") !== null
      ? localStorage.getItem("authenticated") === "false"
        ? false
        : true
      : false
  );

  console.log(localStorage.getItem("authenticated"));

  const setAuthHandler = (authCondition) => {
    setAuthenticated(authCondition);

    // STORING ISLOGGEDIN PARAM IN LOCAL STORAGE
    localStorage.setItem("authenticated", authCondition);
  };

  return (
    <React.Fragment>
      <Router>
        <Navbar
          authenticated={authenticated}
          handleOpen={handleOpen}
          setDrawerState={setDrawerState}
          pages={pages}
        />
        <Drawer setDrawerState={setDrawerState} drawerState={drawerState} />
        <BottomNav pages={pages} />
        <Auth setAuthHandler={setAuthHandler} setOpen={setOpen} open={open} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="basket" element={<Basket />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Router>
      <Container></Container>
    </React.Fragment>
  );
};

export default App;
