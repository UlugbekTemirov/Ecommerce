import * as React from "react";

// external packages
import Button from "@mui/material/Button";
import { toast } from "react-toastify";

// cookies
import Cookies from "universal-cookie";

// components
import Input from "../Input";

const Register = (props) => {
  const { setOpenModal, setAuthHandler } = props;

  const LENGTH_OF_NAME = 4;
  const LENGTH_ERROR_4 = "At least 4 characters";
  const INCLUDE_SIGN_ONCE_ERROR = "Include @ sign once";
  const EMAIL_FORMAT_ERROR = "Email format invalid!";
  const LENGTH_ERROR_8 = "At least 8 characters";
  const URL = "http://localhost:8000";

  const [authenticated, setAuthenticated] = React.useState(false);

  // HANDLING INPUT VALUES
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  // CHECKING INPUT VALUES
  const [checkName, setCheckName] = React.useState();
  const [checkEmail, setCheckEmail] = React.useState();
  const [checkPassword, setCheckPassword] = React.useState();
  const [checkConfirmPassword, setCheckConfirmPassword] = React.useState();

  // HANDLING ERRORS
  const [nameErr, setNameErr] = React.useState("");
  const [emailErr, setEmailErr] = React.useState("");
  const [passwordErr, setPasswordErr] = React.useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = React.useState("");

  // NEW COOKIES
  const cookie = new Cookies();

  // HANDLING BACKEND [POST REQUEST] ERRORS
  const [error, setError] = React.useState("");

  // VALIDATIONS
  const getNameHandler = (e) => {
    let value = e.target.value;
    setName(value);

    if (value.trim("").split("").length >= LENGTH_OF_NAME) {
      setCheckName(true);
      setNameErr("");
    } else {
      setCheckName(false);
      setNameErr(LENGTH_ERROR_4);
    }
  };
  const getEmailHandler = (e) => {
    let value = e.target.value.trim(" ");
    setEmail(value);
    if (
      value.indexOf("@") !== -1 &&
      value.trim().indexOf("@") >= 2 &&
      !value.includes(" ")
    ) {
      if (value.indexOf("@") === value.lastIndexOf("@")) {
        setCheckEmail(true);
        setEmailErr("");
      } else {
        setEmailErr(INCLUDE_SIGN_ONCE_ERROR);
      }
    } else {
      setCheckEmail(false);
      setEmailErr(EMAIL_FORMAT_ERROR);
    }
  };
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
  const getConfirmPasswordHandler = (e) => {
    let value = e.target.value;
    setConfirmPassword(value);
    if (value === password) {
      setCheckConfirmPassword(true);
      setConfirmPasswordErr("");
    } else {
      setCheckConfirmPassword(false);
      setConfirmPasswordErr("Passwords didn't match");
    }
  };

  // HANDLING RESPONSE FROM POST REQUEST
  const responseHandler = (res) => {
    if (res.access_token !== undefined) {
      setAuthenticated(true);

      // SETTING UP COOKIES
      cookie.set("jwt", res.access_token, { path: "/" });

      // MODAL WINDOW CLOSER FUNCTION
      setOpenModal(false);
      setAuthHandler(true);

      setError("");
    } else {
      setError(res.message);
    }
  };

  // POST REQUEST
  const registerUserHandler = (url = "", data) => {
    fetch(`${url}/auth/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data), // altering data to JSON format
    })
      .then((response) => response.json())
      .then((response) => responseHandler(response))
      .catch((err) => console.log(`An arror has occured: ${err}`));
  };

  // CHECKING ALL STATES IF TRUE OR FALSE
  let allChecked =
    checkEmail &&
    checkPassword &&
    checkName &&
    checkConfirmPassword &&
    name !== "" &&
    email !== "" &&
    password !== "" &&
    confirmPassword !== "";

  // FORM SUBMITION
  const formSubmitHandler = () => {
    if (allChecked) {
      let newUser = {
        email,
        password,
      };
      registerUserHandler(URL, newUser);

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } else return;
  };

  // SHOW TOAST ALERT ABOUT REGISTER INFORMATION
  const alertRegisterInfo = () => {
    authenticated && toast.success("Successfully register", { theme: "dark" });
  };

  return (
    <form>
      {authenticated && alertRegisterInfo()}
      <h1 className="text-red-600 fs-sm">{error}</h1>
      <Input
        label="Name"
        type="text"
        name="fname"
        pholder="John Doe"
        value={name}
        func={getNameHandler}
        isValid={checkName}
        error={nameErr}
      />
      <Input
        label="Email"
        type="email"
        name="email"
        pholder="example@gmail.com"
        value={email}
        func={getEmailHandler}
        isValid={checkEmail}
        error={emailErr}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        pholder="password"
        value={password}
        func={getPasswordHandler}
        isValid={checkPassword}
        error={passwordErr}
      />
      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        pholder="confirm password"
        value={confirmPassword}
        func={getConfirmPasswordHandler}
        isValid={checkConfirmPassword}
        error={confirmPasswordErr}
      />
      <Button
        disabled={!allChecked}
        onClick={formSubmitHandler}
        sx={{ mt: 3, minWidth: 150 }}
        variant="contained"
      >
        Submit
      </Button>
    </form>
  );
};

export default Register;
