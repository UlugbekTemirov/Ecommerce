import * as React from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import Loader from "../components/Loader";
import { URL } from "../globals/global";
import Container from "@mui/material/Container";
import IsAdminApi from "../components/Api/IsAdminApi";
import AllUsers from "../components/AdminDashboard/AllUsers";

const AdminDashboard = () => {
  const { isAdmin, loader } = IsAdminApi();

  console.log(loader);
  if (loader) return <Loader />;
  else {
    if (isAdmin !== "admin")
      return (
        <Container>
          <h1 className="text-center text-xl">
            You are not admin! <br />
            <Link className="text-blue-800" to="/">
              back to home page
            </Link>
          </h1>
        </Container>
      );
    else
      return (
        <Container className="mt-4">
          <h1>Welcome to Admin Dashboard</h1>
          <AllUsers />
        </Container>
      );
  }
};

export default AdminDashboard;
