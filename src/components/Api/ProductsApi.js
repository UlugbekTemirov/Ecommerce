import * as React from "react";
import { URL, jwt } from "../../globals/global";

const ProductApi = () => {
  const [data, setData] = React.useState([]);
  const getResponseHandler = (res) => {
    setData(res.data.data);
  };

  React.useEffect(() => {
    fetch(`${URL}/api/v1/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((promise) => promise.json())
      .then((response) => getResponseHandler(response))
      .catch((err) => console.log(err));
  }, []);

  return data;
};

export default ProductApi;
