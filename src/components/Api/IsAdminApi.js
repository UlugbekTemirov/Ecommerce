import * as React from "react";
import Cookies from "universal-cookie";
import { URL } from "../../globals/global";
import { toast } from "react-toastify";

const cookie = new Cookies();

const IsAdminApi = () => {
  const jwt = cookie.get("jwt", { path: "/" });
  const [isAdmin, setIsAdmin] = React.useState("");
  const [loader, setLoader] = React.useState(true);

  React.useEffect(() => {
    if (Boolean(jwt)) {
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
          setIsAdmin(response.data?.doc?.role);
          if (response.status === "fail") {
            cookie.remove("jwt", { path: "/" });
            toast.error(response.message, { theme: "dark" });
          }
        })
        .catch((err) => console.log(err));
    } else {
      setIsAdmin("");
      setLoader(false);
    }
  }, [jwt]);

  return { isAdmin, loader };
};

export default IsAdminApi;
