import * as React from "react";
import GetAllUsersApi from "../Api/GetAllUsersApi";
import Loader from "../Loader";

const AllUsers = () => {
  const { users, loading } = GetAllUsersApi();
  console.log(users);

  if (loading) return <Loader />;

  return (
    <React.Fragment>
      <h1>All Users</h1>
      <ul>
        {users.data.data.map((user, index) => (
          <li key={index}>
            {user.name} | {user.role}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default AllUsers;
