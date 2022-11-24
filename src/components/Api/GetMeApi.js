import * as React from "react";
import { URL } from "../../globals/global";

import Cookie from "universal-cookie";
import { toast } from "react-toastify";

const cookie = new Cookie();

const GetMeApi = () => {
  const jwt = cookie.get("jwt");

  const [data, setData] = React.useState({});

  const [loader, setLoader] = React.useState(true);

  React.useEffect(() => {
    setLoader(true);
    fetch(`${URL}/api/v1/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${jwt}`,
      },
    })
      .then((promise) => promise.json())
      .then((response) => {
        setLoader(false);
        setData(response);
        if (response.status === "fail") {
          cookie.remove("jwt", { path: "/" });
          toast.error(response.message, { theme: "dark" });
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (loader) return { status: "loading" };
  else if (data?.length !== 0) return data?.data?.doc;
  else return { status: "error", message: "Data not found" };
};

export default GetMeApi;
