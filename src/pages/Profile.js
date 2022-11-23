import * as React from "react";

// COMPONENT
import UpdatePassword from "../components/auth/UpdatePassword";
import GetMeApi from "../components/Api/GetMeApi";

const Profile = () => {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  const data = GetMeApi();

  if (data.status === "loading") return <h1>loading</h1>;
  else if (data.status === "error") return <h1>An error has occured</h1>;

  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.email}</h1>
      <UpdatePassword />
    </div>
  );
};

export default Profile;
