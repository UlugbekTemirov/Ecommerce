import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login, Register } from "./components/auth";
import Navbar from "./components/Navbar";
import Container from "@mui/material/Container";
import Drawer from "./components/Drawer";
import BottomNav from "./components/BottomNav/BottomNav";

// pages
import Home from "./pages/Home";
import Category from "./pages/Category";
import Basket from "./pages/Basket";

const App = () => {
  const [drawerState, setDrawerState] = React.useState(false);
  const pages = ["Home", "Category", "Basket"];

  return (
    <React.Fragment>
      <Router>
        <Navbar setDrawerState={setDrawerState} pages={pages} />
        <Drawer setDrawerState={setDrawerState} drawerState={drawerState} />
        <BottomNav pages={pages} />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="basket" element={<Basket />} />
        </Routes>
      </Router>
      <Container></Container>
    </React.Fragment>
  );
};

export default App;
