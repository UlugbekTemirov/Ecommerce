import * as React from "react";

// API
import UpdatePasswordApi from "../Api/UpdatePasswordApi";

const UpdatePassword = () => {
  const [showPassword, setShowPassword] = React.useState("password");
  const [showPasswordConfirm, setShowPasswordConfirm] =
    React.useState("password");
  const [showOldPassword, setShowOldPassword] = React.useState("password");

  const showPasswordHandler = () => {
    setShowPassword((prev) => (prev === "password" ? "text" : "password"));
  };

  const showPasswordConfirmHandler = () => {
    setShowPasswordConfirm((prev) =>
      prev === "password" ? "text" : "password"
    );
  };

  const showOldPasswordHandler = () => {
    setShowOldPassword((prev) => (prev === "password" ? "text" : "password"));
  };

  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = React.useState("");

  const newPasswordHandler = (e) => {
    setNewPassword(e.target.value);
  };

  const newPasswordConfirmHandler = (e) => {
    setNewPasswordConfirm(e.target.value);
  };

  const oldPasswordHandler = (e) => {
    setOldPassword(e.target.value);
  };

  // UPDATE PASSWORD API HANDLER
  const updatePasswordHandler = () => {
    UpdatePasswordApi({
      passwordCurrent: oldPassword,
      password: newPassword,
      passwordConfirm: newPasswordConfirm,
    });
  };

  return (
    <>
      <input
        className="text-black"
        type={showOldPassword}
        value={oldPassword}
        placeholder="old password"
        onChange={(e) => oldPasswordHandler(e)}
      />
      <button className="p-1 bg-gray-500" onClick={showOldPasswordHandler}>
        show
      </button>
      <br />
      <input
        className="text-black"
        type={showPassword}
        value={newPassword}
        placeholder="new password"
        onChange={(e) => newPasswordHandler(e)}
      />
      <button className="p-1 bg-gray-500" onClick={showPasswordHandler}>
        show
      </button>
      <br />
      <input
        className="text-black"
        type={showPasswordConfirm}
        placeholder="confirm new password"
        value={newPasswordConfirm}
        onChange={(e) => newPasswordConfirmHandler(e)}
      />
      <button className="p-1 bg-gray-500" onClick={showPasswordConfirmHandler}>
        show
      </button>
      <br />
      <button
        onClick={updatePasswordHandler}
        className="p-1 bg-green-800 rounded"
      >
        update my password
      </button>
    </>
  );
};
export default UpdatePassword;
