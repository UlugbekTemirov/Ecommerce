import * as React from "react";
import { URL, jwt } from "../../globals/global";

const ProductApi = () => {
  const [loader, setLoader] = React.useState(true);
  const [data, setData] = React.useState([]);
  const getResponseHandler = (res) => {
    setLoader(false);
    setData(res.data.doc);
  };

  React.useEffect(() => {
    setLoader(true);
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

  return { data, loader };
};

export default ProductApi;
