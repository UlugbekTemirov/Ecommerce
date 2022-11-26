import * as React from "react";
import { URL } from "../../globals/global";

import Cookies from "universal-cookie";

const PostProductApi = (product) => {
  const cookie = new Cookies();
  //   const [response, setResponse] = React.useState({});
  //   const [loading, setLoading] = React.useState(true);
  //   const getResponseHandler = (res) => {
  //     // setLoading(false);
  //     // setResponse(res);
  //   };

  //   React.useEffect(() => {
  // setLoading(true);
  const jwt = cookie.get("jwt", { path: "/" });
  fetch(`${URL}/api/v1/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify(product),
  })
    .then((promise) => promise.json())
    .then((response) => console.log(response));
  //   }, []);

  //   return { response, loading };
};

export default PostProductApi;
