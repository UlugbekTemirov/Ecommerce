import * as React from "react";

// external packages
import Button from "@mui/material/Button";
import { toast } from "react-toastify";

// components
import Input from "../Input";

// GLOBALS
import { URL } from "../../globals/global";

const Register = (props) => {
  const { setOpenModal, setAuthHandler, cookie } = props;

  const LENGTH_OF_NAME = 4;
  const LENGTH_ERROR_4 = `At least ${LENGTH_OF_NAME} characters`;
  const EMAIL_FORMAT_ERROR = "Email format invalid!";
  const LENGTH_ERROR_8 = "At least 8 characters";

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

  // HANDLING BACKEND [POST REQUEST] ERRORS
  const [error, setError] = React.useState("");

  // VALIDATIONS
  /////////////////////////////////////
  // NAME HANDLER FUNCTION
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

  // CONFIRM PASSWORD HANDLER FUNCTION
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
    if (res.token !== undefined) {
      setAuthenticated(true);

      let date = new Date(res.cookieOptions.expires);

      // SETTINGUP COOKIES
      cookie.set("jwt", res.token, { expires: date, httpOnly: false });

      // MODAL WINDOW CLOSER FUNCTION
      setOpenModal(false);
      setAuthHandler(true);

      // SETTINGUP ERROR
      setError("");
    } else {
      setError(res.message);
      setAuthenticated(false);
    }
  };

  // POST REQUEST
  const registerUserHandler = (url = "", data) => {
    console.log(JSON.stringify(data));
    fetch(`${url}/api/v1/users/signup`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data), // altering data to JSON format
    })
      .then((response) => response.json())
      .then((response) => responseHandler(response))
      .catch((err) => {
        console.log(err);
      });
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
      console.log(password, confirmPassword);
      let newUser = {
        name,
        email,
        password,
        passwordConfirm: confirmPassword,
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
