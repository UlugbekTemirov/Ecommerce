import * as React from "react";
import { jwt, URL } from "../../globals/global";

const GetAllUsersApi = () => {
  const [users, setUsers] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    fetch(`${URL}/api/v1/users`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${jwt}`,
      },
    })
      .then((promise) => promise.json())
      .then((response) => {
        setUsers(response);
        setLoading(false);
      });
  }, []);

  return { users, loading };
};

export default GetAllUsersApi;
