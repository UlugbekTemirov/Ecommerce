import * as React from "react";

// COMPONENT
import UpdatePassword from "../components/auth/UpdatePassword";
import GetMeApi from "../components/Api/GetMeApi";
import { useParams } from "react-router-dom";

const Profile = (props) => {
  const { userName } = useParams();
  const data = GetMeApi();

  if (data?.status === "loading") return <h1>loading</h1>;
  else if (data?.status === "error") return <h1>An error has occured</h1>;
  else if (userName !== data?.name.toLowerCase())
    return <h1>{userName} user not found</h1>;
  return (
    <div>
      <h1>Name: {data?.name}</h1>
      <h1>Email: {data?.email}</h1>
      <h1>Role: {data?.role}</h1>
      <img src={data?.photo} alt={data?.name} />
      <UpdatePassword />
    </div>
  );
};

export default Profile;
