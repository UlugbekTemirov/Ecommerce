import * as React from "react";

// EXTERNAL PACKAGES
import Button from "@mui/material/Button";
import { toast } from "react-toastify";

// COMPONENTS
import { Input } from "../Input";
import AuthLoader from "./AuthLoader";

// GLOBALS
import { URL } from "../../globals/global";

const Login = (props) => {
  const [loading, setLoading] = React.useState(false);
  const { setOpenModal, cookie, getUserHandler } = props;

  const LENGTH_ERROR_8 = "At least 8 characters";
  const EMAIL_FORMAT_ERROR = "Email format invalid!";

  const [authenticated, setAuthenticated] = React.useState(false);

  // HANDLING INPUT VALUES
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // CHECKING INPUT VALUES
  const [checkEmail, setCheckEmail] = React.useState();
  const [checkPassword, setCheckPassword] = React.useState();

  // HANDLING ERRORS
  const [emailErr, setEmailErr] = React.useState("");
  const [passwordErr, setPasswordErr] = React.useState("");

  // HANDLING BACKEND [POST REQUEST] ERRORS
  const [error, setError] = React.useState("");

  // VALIDATIONS
  /////////////////////////////////////
  // EMAIL HANDLER FUNCTION
  const getEmailHandler = (e) => {
    let value = e.target.value.trim(" ");
    setEmail(value);
    const mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (value.match(mailformat)) {
      setCheckEmail(true);
      setEmailErr("");
    } else {
      setCheckEmail(false);
      setEmailErr(EMAIL_FORMAT_ERROR);
    }
  };

  // PASSWORD HANDLER FUNCTION
  const getPasswordHandler = (e) => {
    let value = e.target.value;
    setPassword(value);
    if (value.trim(" ").split("").length >= 8) {
      setCheckPassword(true);
      setPasswordErr("");
    } else {
      setCheckPassword(false);
      setPasswordErr(LENGTH_ERROR_8);
    }
  };

  // CHECKING ALL STATES IF TRUE OR FALSE
  let allChecked =
    checkEmail && checkPassword && email !== "" && password !== "";

  // HANDLING RESPONSE FROM POST REQUEST
  const responseHandler = (res) => {
    setLoading(false);
    if (res.token !== undefined) {
      setAuthenticated(true);

      let date = new Date(res.cookieOptions.expires);

      // SETTINGUP COOKIES
      cookie.set("jwt", res.token, {
        expires: date,
        httpOnly: false,
        path: "/",
      });
      localStorage.setItem("name", res.data.user.name);
      // MODAL WINDOW CLOSER FUNCTION
      setOpenModal(false);

      // SETTINGUP ERROR
      setError("");
    } else {
      setError(res.message);
      toast.error(res.message, { theme: "dark" });
      setAuthenticated(false);
    }
  };

  // POST REQUEST
  const loginUserHandler = (url = "", data) => {
    setLoading(true);
    fetch(`${url}/api/v1/users/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data), // altering data to JSON format
    })
      .then((response) => response.json())
      .then((response) => {
        responseHandler(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // FORM SUBMITION
  const formSubmitHandler = () => {
    if (allChecked) {
      let newUser = {
        email,
        password,
      };
      loginUserHandler(URL, newUser);

      setEmail("");
      setPassword("");
    } else {
      return;
    }
  };

  // SHOW TOAST ALERT ABOUT REGISTER INFORMATION
  const alertRegisterInfo = () => {
    authenticated && toast.success("Successfully logged in", { theme: "dark" });
  };

  return (
    <form>
      {authenticated && alertRegisterInfo()}
      <h1 className="text-red-700">{error}</h1>
      <Input
        value={email}
        label="Email"
        type="text"
        name="name"
        pholder="example@gmail.com"
        func={getEmailHandler}
        isValid={checkEmail}
        error={emailErr}
      />
      <Input />
      <Input
        value={password}
        label="Password"
        type="password"
        name="password"
        pholder="password"
        func={getPasswordHandler}
        isValid={checkPassword}
        error={passwordErr}
      />
      <Input />
      <Button
        disabled={!allChecked}
        onClick={formSubmitHandler}
        sx={{ mt: 3, minWidth: 150 }}
        variant="contained"
      >
        Submit {loading && <AuthLoader />}
      </Button>
    </form>
  );
};

export default Login;

// label, type, name, pholder, value, func, isValid, error
