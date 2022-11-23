import * as React from "react";
import { Await } from "react-router-dom";

import Cookies from "universal-cookie";

// COOKIE
import { URL } from "../../globals/global";

// REACT TOASTIFY
import { toast } from "react-toastify";

const cookie = new Cookies();

const UpdatePasswordApi = (update) => {
  const jwt = cookie.get("jwt");

  const getDataHandler = (data) => {
    console.log(data);
  };

  fetch(`${URL}/api/v1/users/updatemypassword`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify(update),
  })
    .then((promise) => promise.json())
    .then((data) => {
      console.log(data);
      if (data.status === "succes") {
        getDataHandler(data);
        toast.success("Successfully changed", { theme: "dark" });
        cookie.remove("jwt", { path: "/" });
        let date = new Date(data.cookieOptions.expires);

        cookie.set("jwt", data.token, {
          path: "/",
          expires: date,
          httpOnly: false,
        });
      } else if (data.status !== "success") {
        toast.error(data.message, { theme: "dark" });
      }
    });
};

export default UpdatePasswordApi;
