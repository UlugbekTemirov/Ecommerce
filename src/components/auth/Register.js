import { SettingsCellSharp } from "@mui/icons-material";
import * as React from "react";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";

import userData from "../../users.json";

const Register = () => {
  const [data, setData] = React.useState(userData);
  const [checked, setChecked] = React.useState();

  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPass, setConfirmPass] = React.useState("");
  const [confirmState, setConfirmState] = React.useState(true);

  const getFullNameHandler = (event) => {
    setFullName(event.target.value);
  };

  const getEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const getPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const confirmPassHandler = (event) => {
    setConfirmPass(event.target.value);
    if (password !== event.target.value) setConfirmState(false);
    else {
      setConfirmState(true);
      setConfirmPass(event.target.value);
    }
  };

  const notify = () => {
    checked && toast.success("Success!", { theme: "dark" });
    setChecked(false);
  };

  const formSubmitHandler = (event) => {
    if (email.includes("@") && fullName.trim() !== "" && confirmState) {
      setChecked(true);
      const userData = {
        fullName,
        email,
        password,
      };
      setData((prev) => [...prev, userData]);
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPass("");
    } else return;
  };

  return (
    <form>
      <label className="block mt-4">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-lg font-large text-slate-500">
          Full Name
        </span>
        <input
          value={fullName}
          onChange={getFullNameHandler}
          type="text"
          name="text"
          className="mt-1 px-3 py-2 text-black bg-slate-200 border shadow-sm border-slate-300 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="John Doe"
        />
      </label>
      <label className="block mt-4">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-lg font-large text-slate-500">
          Email
        </span>
        <input
          value={email}
          onChange={getEmailHandler}
          type="email"
          name="email"
          className="mt-1 px-3 py-2 text-black bg-slate-200 border shadow-sm border-slate-300 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="you@example.com"
        />
      </label>
      <label className="block mt-4">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-lg font-large text-slate-500">
          Password
        </span>
        <input
          value={password}
          onChange={getPasswordHandler}
          type="password"
          name="password"
          className="mt-1 px-3 py-2 text-black bg-slate-200 border shadow-sm border-slate-300 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="password"
        />
      </label>
      <label className="block mt-4">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-lg font-large text-slate-500">
          Confirm Password
        </span>
        <input
          value={confirmPass}
          onChange={confirmPassHandler}
          type="password"
          name="password"
          className="mt-1 px-3 py-2 text-black bg-slate-200 border shadow-sm border-slate-300 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="password"
        />
        {!confirmState && (
          <h1 className="text-red-500">Password didn't match</h1>
        )}
      </label>
      {checked && notify()}
      <Button
        sx={{ mt: 3, minWidth: 150 }}
        onClick={formSubmitHandler}
        variant="contained"
      >
        Submit
      </Button>
    </form>
  );
};

export default Register;
