import * as React from "react";
import { jwt, URL } from "../../globals/global";

const DeleteProductApi = (id) => {
  const [response, setResponse] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    fetch(`${URL}/api/v1/products/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then((promise) => {
      setLoading(false);
      setResponse(promise);
      // return promise;
    });
    //   .then((response) => {
    //     setLoading(false);
    //     // setResponse(response);
    //   });
  }, [id]);

  return { response, loading };
};

export default DeleteProductApi;
