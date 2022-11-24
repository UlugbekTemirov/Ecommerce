import Cookies from "universal-cookie";

const URL = "http://localhost:3000";

const cookie = new Cookies();
const jwt = cookie.get("jwt", { path: "/" });

export { URL, jwt };
